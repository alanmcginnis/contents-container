const {
  constants,
} = require('./_11ty');

module.exports = function(eleventyConfig) {
  // --- Layout Aliases
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");

  // eleventyConfig.setServerOptions({
  //   watch: ["_site/**/*.css"],
  // });

  eleventyConfig.addPassthroughCopy({[constants.STYLES_FOLDER] : './'});

  // Set custom directories for input, output, includes, and data
  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: constants.CONTENT_FOLDER,
    },
  };
};
