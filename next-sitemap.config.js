module.exports = {
  siteUrl: 'https://www.buenplansalud.cl',
  generateRobotsTxt: true,
  // Excluir panel de administración y archivos no-HTML
  exclude: ['/adminbp', '/adminbp/*', '/icon.png'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/adminbp'] },
    ],
  },
  // Prioridades diferenciadas por tipo de página
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/blog': 0.8,
      '/faq': 0.6,
    }
    const changefreqs = {
      '/': 'weekly',
      '/blog': 'weekly',
      '/faq': 'monthly',
    }
    return {
      loc: path,
      changefreq: changefreqs[path] || 'monthly',
      priority: priorities[path] || 0.5,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
};