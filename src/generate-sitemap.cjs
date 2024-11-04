const fs = require('fs')
const path = require('path')

// Read the router.js file
const routerPath = path.join(__dirname, 'router.js')
const routerContent = fs.readFileSync(routerPath, 'utf-8')

// Extract routes using a regular expression
const routeRegex = /{ path: '([^']+)'/g
const routes = []
let match
while ((match = routeRegex.exec(routerContent)) !== null) {
  routes.push(match[1])
}

// Generate XML content
const generateSitemap = (routes) => {
  const urlSet = routes
    .map(
      (route) => `
    <url>
      <loc>https://dvhive.com${route}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlSet}
</urlset>`
}

const sitemapContent = generateSitemap(routes)

// Write the XML content to sitemap.xml
const sitemapPath = path.join(__dirname, 'sitemap.xml')
fs.writeFileSync(sitemapPath, sitemapContent)

console.log('Sitemap generated successfully!')
