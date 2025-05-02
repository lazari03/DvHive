<script setup>
import Navigation from './components/Nav.vue'
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative min-h-screen">
    <div class="h-24"></div>
    <Navigation />
    
    <div class="mt-12 mx-4">
      <!-- Compact Header -->
      <div class="blog-header max-w-7xl mx-auto mb-12 px-4 relative z-10">
        <h2 class="text-white text-2xl font-bold mb-2">Latest Articles</h2>
        <p class="text-gray-400 text-base">Stay updated with our insights and tips on diminished value claims</p>
      </div>
    </div>
      
      <div class="blog-list max-w-7xl mx-auto relative z-10">
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
            <p class="excerpt">{{ post.excerpt }}</p>
            
            <div class="card-footer">
              <div class="author">
                <div class="author-avatar">
                  {{ post.author ? post.author.charAt(0).toUpperCase() : 'A' }}
                </div>
                <span class="author-name">{{ post.author || 'DV Hive' }}</span>
              </div>
              <button class="read-more" @click="goToBlogPost(post.id)">Read More →</button>
            </div>
          </article>
        </div>
      </div>
      
      <!-- Decorative elements -->
      <div class="decoration decoration-1"></div>
      <div class="decoration decoration-2"></div>
      <div class="decoration decoration-3"></div>
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
      goToBlogPost(id){
        this.$router.push(`/blog/${id}`)
      }
    }
  }
  </script>
  
  <style scoped>
  .blog-container {
    position: relative;
    padding: 1rem 1.5rem 6rem;
    background-color: #1A1A1A;
    color: white;
    font-family: 'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    min-height: 100vh;
    overflow: hidden;
  }
  
  .blog-header {
    position: relative;
    border-left: 3px solid #F5B95F;
    padding-left: 1rem;
  }
  
  .posts-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin: 0 auto;
  }
  
  @media (min-width: 640px) {
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
    border-radius: 0.75rem;
    padding: 1.75rem;
    border: 1px solid #333333;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
  
  .blog-card:hover {
    border-color: rgba(245, 185, 95, 0.5);
    box-shadow: 0 8px 30px rgba(245, 185, 95, 0.15);
    transform: translateY(-5px);
  }
  
  .blog-card h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: white;
    transition: color 0.2s ease;
    line-height: 1.3;
  }
  
  .blog-card:hover h2 {
    color: #F5B95F;
  }
  
  .excerpt {
    color: #CCCCCC;
    margin-bottom: 1.5rem;
    line-height: 1.7;
    flex-grow: 1;
    font-size: 1.05rem;
  }
  
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: 1.25rem;
    border-top: 1px solid #333333;
  }
  
  .author {
    display: flex;
    align-items: center;
  }
  
  .author-avatar {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    background-color: #F5B95F;
    color: #1A1A1A;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1rem;
    box-shadow: 0 2px 8px rgba(245, 185, 95, 0.3);
  }
  
  .author-name {
    margin-left: 0.75rem;
    font-size: 0.95rem;
    color: #A0A0A0;
  }
  
  .read-more {
    background: transparent;
    border: none;
    color: #F5B95F;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
  }
  
  .read-more:hover {
    background-color: rgba(245, 185, 95, 0.1);
    text-decoration: underline;
  }
  
  /* Loading state */
  .loading-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin: 0 auto;
  }
  
  @media (min-width: 640px) {
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
    margin-bottom: 1.25rem;
    animation: pulse 1.5s infinite;
  }
  
  .loading .loading-excerpt {
    height: 1rem;
    background-color: #333333;
    border-radius: 0.25rem;
    width: 100%;
    margin-bottom: 0.75rem;
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
    padding: 5rem 0;
    color: #A0A0A0;
    font-size: 1.25rem;
    background-color: rgba(34, 34, 34, 0.5);
    border-radius: 1rem;
    border: 1px dashed #333333;
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
    width: 400px;
    height: 400px;
    top: -150px;
    left: -150px;
  }
  
  .decoration-2 {
    width: 500px;
    height: 500px;
    bottom: -200px;
    right: -200px;
  }
  
  .decoration-3 {
    width: 300px;
    height: 300px;
    top: 40%;
    left: 60%;
    background-color: rgba(245, 185, 95, 0.05);
  }
  </style>
