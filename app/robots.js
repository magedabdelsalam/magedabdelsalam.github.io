export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/konan',
      },
      sitemap: 'https://magedabdelsalam.com/sitemap.xml',
    }
  }