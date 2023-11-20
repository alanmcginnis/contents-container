function imagesShortcode(month = "", data = []) {
  try {
    let width = "150px";
    let height = "200px";
    let galleryImgBaseURL = "https://alanmcginnis.twic.pics/francis-gallery";
    return data
      .map(
        (img, index) =>
          `<a href="${galleryImgBaseURL}/${month}/${img.src}" ${
            img.caption ? `data-caption="${img.caption}"` : ``
          } data-slug="image-${index}">
            <img data-twic-src="${galleryImgBaseURL}/${month}/${
            img.src
          }" width="${width}" height="${height}"  loading="lazy"></a>`
      )
      .join("\n");
  } catch (e) {
    console.log(e);
  }
}

module.exports = { imagesShortcode };
