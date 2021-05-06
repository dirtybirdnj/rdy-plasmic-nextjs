
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['48hdstfvEZkFZSekMr6Q9R'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  