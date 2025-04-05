<template>
  <div class="blog-post-container">
    <!-- Decorative elements -->
    <div class="decoration decoration-1"></div>
    <div class="decoration decoration-2"></div>
    
    <div v-if="loading" class="loading-state">
      <div class="loading-title"></div>
      <div class="loading-meta"></div>
      <div class="loading-content">
        <div class="loading-line" v-for="i in 12" :key="i"></div>
      </div>
    </div>
    
    <div v-else-if="error" class="error-state">
      <p>{{ error }}</p>
      <button @click="goBack" class="back-button">Go Back</button>
    </div>
    
    <div v-else class="blog-post">
      <div class="post-header">
        <div class="post-meta">
          <div class="status" v-if="post.status">{{ post.status }}</div>
          <div class="date">{{ formatDate(post.publishedDate) }}</div>
        </div>
        
        <h1 class="post-title">{{ post.title }}</h1>
        
        <!-- Featured Image -->
        <div v-if="post.featuredImage" class="featured-image">
          <img 
            :src="post.featuredImage.url" 
            :alt="post.title" 
            class="w-full h-auto rounded-lg"
          />
        </div>
        
        <!-- Excerpt if available -->
        <div v-if="post.excerpt" class="post-excerpt">
          {{ post.excerpt }}
        </div>
      </div>
      
      <div class="post-content" v-html="renderContent(post.content)"></div>
      
      <div class="post-footer">
        <button @click="goBack" class="back-button">← Back to Articles</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlogPost',
  data() {
    return {
      post: null,
      loading: true,
      error: null
    }
  },
  created() {
    this.fetchPost()
  },
  methods: {
    async fetchPost() {
      try {
        this.loading = true
        const slug = this.$route.params.slug
        const response = await axios.get(`https://blog-set.vercel.app/api/posts/${slug}`)
        this.post = response.data
        console.log('Post fetched:', this.post)
      } catch (error) {
        console.error('Error fetching post:', error)
        this.error = 'Failed to load the blog post. Please try again later.'
      } finally {
        this.loading = false
      }
    },
    formatDate(dateString) {
      if (!dateString) return 'No date'
      const date = new Date(dateString)
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(date)
    },
    renderContent(content) {
      // Check that content exists and has a valid root with children
      if (!content || !content.root || !Array.isArray(content.root.children)) {
        return 'Content could not be displayed'
      }
      
      // Iterate over the children nodes of the root
      let html = ''
      content.root.children.forEach(node => {
        if (node.type === 'paragraph' && Array.isArray(node.children)) {
          // Join the text from all children of this paragraph node
          const paragraphText = node.children.map(child => child.text || '').join(' ')
          html += `<p>${paragraphText}</p>`
        } else if (node.text) {
          html += `<p>${node.text}</p>`
        }
      })
      return html
    },
    goBack() {
      this.$router.push('/blog')
    }
  }
}
</script>
  
  <style scoped>
  .blog-post-container {
    position: relative;
    padding: 3rem 1.5rem;
    background-color: #1A1A1A;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    min-height: 100vh;
    overflow: hidden;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .blog-post {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .post-header {
    margin-bottom: 2.5rem;
  }
  
  .post-meta {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.875rem;
  }
  
  .status {
    background-color: rgba(245, 185, 95, 0.2);
    color: #F5B95F;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-weight: 500;
    margin-right: 1rem;
    text-transform: capitalize;
  }
  
  .date {
    color: #A0A0A0;
  }
  
  .post-title {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
  
  .featured-image {
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  
  .featured-image img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .post-excerpt {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #CCCCCC;
    margin-bottom: 2rem;
    font-style: italic;
    padding-left: 1rem;
    border-left: 4px solid #F5B95F;
  }
  
  .post-content {
    font-size: 1.125rem;
    line-height: 1.8;
    margin-bottom: 3rem;
  }
  
  /* Styling for the HTML content */
  .post-content :deep(h2) {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 2rem 0 1rem;
    color: #F5B95F;
  }
  
  .post-content :deep(h3) {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1.5rem 0 1rem;
  }
  
  .post-content :deep(p) {
    margin-bottom: 1.5rem;
  }
  
  .post-content :deep(ul), .post-content :deep(ol) {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  .post-content :deep(li) {
    margin-bottom: 0.5rem;
  }
  
  .post-content :deep(blockquote) {
    border-left: 4px solid #F5B95F;
    padding-left: 1rem;
    font-style: italic;
    color: #CCCCCC;
    margin: 1.5rem 0;
  }
  
  .post-content :deep(a) {
    color: #F5B95F;
    text-decoration: underline;
    transition: color 0.2s ease;
  }
  
  .post-content :deep(a:hover) {
    color: #F8D093;
  }
  
  .post-content :deep(img) {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1.5rem 0;
  }
  
  .post-content :deep(code) {
    background-color: #333333;
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-family: monospace;
    font-size: 0.9em;
  }
  
  .post-content :deep(pre) {
    background-color: #333333;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;
  }
  
  .post-content :deep(pre code) {
    background-color: transparent;
    padding: 0;
  }
  
  .post-footer {
    border-top: 1px solid #333333;
    padding-top: 2rem;
    margin-top: 3rem;
  }
  
  .back-button {
    display: inline-block;
    background-color: transparent;
    border: 1px solid #F5B95F;
    color: #F5B95F;
    padding: 0.5rem 1.25rem;
    border-radius: 0.25rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .back-button:hover {
    background-color: #F5B95F;
    color: #1A1A1A;
  }
  
  /* Loading state */
  .loading-state {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .loading-title {
    height: 3rem;
    background-color: #333333;
    border-radius: 0.25rem;
    width: 80%;
    margin-bottom: 1.5rem;
    animation: pulse 1.5s infinite;
  }
  
  .loading-meta {
    height: 1.5rem;
    background-color: #333333;
    border-radius: 0.25rem;
    width: 40%;
    margin-bottom: 3rem;
    animation: pulse 1.5s infinite;
  }
  
  .loading-content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .loading-line {
    height: 1rem;
    background-color: #333333;
    border-radius: 0.25rem;
    width: 100%;
    animation: pulse 1.5s infinite;
  }
  
  .loading-line:nth-child(even) {
    width: 92%;
  }
  
  .loading-line:nth-child(3n) {
    width: 96%;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.8;
    }
  }
  
  /* Error state */
  .error-state {
    text-align: center;
    padding: 3rem 0;
    color: #CCCCCC;
  }
  
  /* Decorative elements */
  .decoration {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(245, 185, 95, 0.1);
    filter: blur(60px);
    z-index: 0;
  }
  
  .decoration-1 {
    width: 500px;
    height: 500px;
    top: -200px;
    right: -200px;
  }
  
  .decoration-2 {
    width: 600px;
    height: 600px;
    bottom: -300px;
    left: -300px;
  }
  
  @media (max-width: 768px) {
    .post-title {
      font-size: 2rem;
    }
    
    .post-content {
      font-size: 1rem;
    }
  }
  </style>