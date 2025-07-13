module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:5678', // n8n
        'http://localhost:3300',
        'https://shopkeng.vercel.app',
        'https://shopkeng.com',
        'https://www.shopkeng.com',
        'https://hudchew-nextjs.vercel.app',
        'https://hudchew.com',
        'https://www.hudchew.com'
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  // 'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
