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
            name: `Ulyana Kiklevich`,
            url: `/ulyana-kiklevich`,
          },
          {
            name: `Evgeni Obukhovski`,
            url: `/evgeni-obukhovski`,
          },
          {
            name: `Feeds Service`,
            url: `http://feed.ecommerce-consulting.pl/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_ID, // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
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
