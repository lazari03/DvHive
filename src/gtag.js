// Centralized Google tag loader
const GA_ID = 'G-4DYXGC63NL'
const AW_ID = 'AW-16780787359'

function loadGtag(id) {
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(s)
}

loadGtag(GA_ID)
loadGtag(AW_ID)

window.dataLayer = window.dataLayer || []
function gtag() {
  window.dataLayer.push(arguments)
}
window.gtag = gtag

gtag('js', new Date())
gtag('config', GA_ID)
gtag('config', AW_ID)

// Export nothing; module runs on import
