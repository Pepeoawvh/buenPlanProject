module.exports = {
  siteUrl: 'https://www.buenplansalud.cl',
  generateRobotsTxt: true,
  exclude: ['/adminbp'], 
  additionalPaths: async (config) => [
    await config.transform(config, '/about'),
  ],
};