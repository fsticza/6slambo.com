const imagemin = require("imagemin")
const imageminJpegtran = require("imagemin-jpegtran")
const imageminPngquant = require("imagemin-pngquant")

(async () => {
  await imagemin(
    ["./src/assets/img/*.{jpg,png}"],
    "./src/assets/img",
    {
      plugins: [imageminJpegtran(), imageminPngquant({ quality: "65-80" })]
    }
  )
  .catch(console.error)
  .then(console.log)
})()
