function galleryShortcode(content, name) {
  return `
          <div class="gallery" id="gallery-${name}">
              ${content}
          </div>
          <script>
          Fancybox.bind('#gallery-${name} a', {
            groupAll: true,
            compact: false
          });          
</script>
  `.replace(/(\r\n|\n|\r)/gm, "");
}

module.exports = { galleryShortcode };
