const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = '"https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const workSans = new FontFaceObserver('Source Code Pro')

  workSans.load().then(() => {
    document.documentElement.classList.add('work-sans-loaded')
  })
}

export default Fonts