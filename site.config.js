const CONFIG = {
  // profile setting (required)
  profile: {
    name: "小太阳昌仔",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "INTJ+摩羯座",
    bio: "🔥平静的努力，精致的执着",
    email: "aixin2019@gmail.com",
    linkedin: "",
    github: "712346867",
    instagram: "",
  },
  projects: [
    {
      "name": "MY BLOG",
      "href": "https://blog.ssuncz.top"
    },
  ],
  // blog setting (required)
  blog: {
    title: "小太阳昌仔",
    description: "welcome to 小太阳昌仔 Prompts & Tools!",
  },

  // CONFIG configration (required)
  link: "https://blog.ssuncz.top",
  since: 2020, // If leave this empty, current year will be used.
  lang: "zh-CN", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "078908aa-ff33-4c79-8daa-b8be157ecc1a", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21, // revalidate time for [slug], index
}

module.exports = { CONFIG }
