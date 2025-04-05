<template>
    <div class="blog-container">
      <div class="blog-header">
        <h1>Latest <span class="accent">Articles</span></h1>
        <p class="subtitle">Explore our collection of insightful articles and stay updated with the latest industry trends.</p>
      </div>
      
      <div class="blog-list">
        <div v-if="loading" class="loading-container">
          <div v-for="i in 3" :key="i" class="blog-card loading">
            <div class="loading-title"></div>
            <div class="loading-excerpt"></div>
            <div class="loading-excerpt short"></div>
          </div>
        </div>
        
        <div v-else-if="posts.length === 0" class="empty-state">
          <p>No posts found</p>
        </div>
        
        <div v-else class="posts-grid">
          <article v-for="post in posts" :key="post.id" class="blog-card">
            <h2>{{ post.title }}</h2>
            <!-- Render the generated HTML directly -->
            <!-- <div v-html="post.content.root.children[0].children[0].text"></div>-->
            <p class="excerpt">{{ post.excerpt }}</p>
            
            <div class="card-footer">
              <div class="author">
                <div class="author-avatar">
                  {{ post.author ? post.author.charAt(0).toUpperCase() : 'A' }}
                </div>
                <span class="author-name">{{ post.author || 'DV Hive' }}</span>
              </div>
              <button class="read-more" @click="goToBlogPost(post.slug)">Read More →</button>
            </div>
          </article>
        </div>
      </div>
      
      <!-- Decorative elements -->
      <div class="decoration decoration-1"></div>
      <div class="decoration decoration-2"></div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'BlogPosts',
    data() {
      return {
        posts: [],
        loading: true
      }
    },
    created() {
      this.fetchPosts()
    },
    methods: {
      async fetchPosts() {
        try {
          const response = await axios.get('https://blog-set.vercel.app/api/posts')
          this.posts = response.data.docs
        } catch (error) {
          console.error('Error fetching posts:', error)
        } finally {
          this.loading = false
        }
      },
      goToBlogPost(slug){
        this.$router.push(`/blog/${slug}`)
      }
    }
  }
  </script>
  
  <style scoped>
  .blog-container {
    position: relative;
    padding: 3rem 1.5rem;
    background-color: #1A1A1A;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    min-height: 100vh;
    overflow: hidden;
  }
  
  .blog-header {
    position: relative;
    margin-bottom: 3rem;
    max-width: 800px;
  }
  
  .blog-header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  .accent {
    color: #F5B95F;
  }
  
  .subtitle {
    color: #A0A0A0;
    font-size: 1.1rem;
    max-width: 600px;
  }
  
  .posts-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  @media (min-width: 768px) {
    .posts-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .posts-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .blog-card {
    background-color: #222222;
    border-radius: 0.5rem;
    padding: 1.5rem;
    border: 1px solid #333333;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .blog-card:hover {
    border-color: rgba(245, 185, 95, 0.5);
    box-shadow: 0 0 15px rgba(245, 185, 95, 0.1);
    transform: translateY(-3px);
  }
  
  .blog-card h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: white;
    transition: color 0.2s ease;
  }
  
  .blog-card:hover h2 {
    color: #F5B95F;
  }
  
  .excerpt {
    color: #CCCCCC;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    flex-grow: 1;
  }
  
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid #333333;
  }
  
  .author {
    display: flex;
    align-items: center;
  }
  
  .author-avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #F5B95F;
    color: #1A1A1A;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  
  .author-name {
    margin-left: 0.5rem;
    font-size: 0.875rem;
    color: #A0A0A0;
  }
  
  .read-more {
    background: transparent;
    border: none;
    color: #F5B95F;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .read-more:hover {
    text-decoration: underline;
  }
  
  /* Loading state */
  .loading-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  @media (min-width: 768px) {
    .loading-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .loading-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .loading .loading-title {
    height: 1.75rem;
    background-color: #333333;
    border-radius: 0.25rem;
    width: 75%;
    margin-bottom: 1rem;
    animation: pulse 1.5s infinite;
  }
  
  .loading .loading-excerpt {
    height: 1rem;
    background-color: #333333;
    border-radius: 0.25rem;
    width: 100%;
    margin-bottom: 0.5rem;
    animation: pulse 1.5s infinite;
  }
  
  .loading .loading-excerpt.short {
    width: 60%;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.8;
    }
  }
  
  /* Empty state */
  .empty-state {
    text-align: center;
    padding: 3rem 0;
    color: #A0A0A0;
  }
  
  /* Decorative elements */
  .decoration {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(245, 185, 95, 0.1);
    filter: blur(40px);
    z-index: 0;
  }
  
  .decoration-1 {
    width: 300px;
    height: 300px;
    top: -100px;
    left: -100px;
  }
  
  .decoration-2 {
    width: 400px;
    height: 400px;
    bottom: -200px;
    right: -200px;
  }
  </style>