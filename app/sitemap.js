export default function sitemap() {
    return [
      {
        url: 'https://magedabdelsalam.com',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://magedabdelsalam.com/konan',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    ]
  }