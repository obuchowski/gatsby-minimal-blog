require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `eCommerce Consulting`,
    siteTitleAlt: `eCommerce Consulting`,
    siteHeadline: `Ulyana Kiklevich and Evgeni Obukhovsky. Magento 2 consultants.`,
    siteUrl: `https://www.ecommerce-consulting.pl`,
    siteDescription: `Ulyana Kiklevich and Evgeni Obukhovsky. Magento 2 consultants.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `eCommerce Consulting PL`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Ulyana's LinkedIn`,
            url: `https://www.linkedin.com/in/ulyana-kiklevich-6b3b6a134/`,
          },
          {
            name: `Evgeni's LinkedIn`,
            url: `https://www.linkedin.com/in/evgeni-obukhovsky-342609134/`,
          },
          {
            name: `Feeds Service`,
            url: `http://feed.ecommerce-consulting.pl/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `eCommerce Consulting Ulyana Kiklevich, Evgeni Obukhovsky`,
        short_name: `eCommerce Consulting`,
        description: ` Ulyana Kiklevich and Evgeni Obukhovsky. Magento 2 consultants.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#5390c1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
