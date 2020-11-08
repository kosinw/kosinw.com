// next.config.js
const withMdxEnhanced = require("next-mdx-enhanced");

const enhanced = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: "prebuild|loader|both",
  },
  reExportDataFetching: true,
})(/* your normal nextjs config */);

module.exports = {
  ...enhanced,
  async redirects() {
    return [
      {
        source: "/archive",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
