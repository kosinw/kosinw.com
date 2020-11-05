module.exports = {
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
