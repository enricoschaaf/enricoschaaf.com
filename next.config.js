const { createLoader } = require("simple-functional-loader")

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  pageExtensions: ["tsx", "mdx"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\/blog\/\/*.*.mdx$/,
      use: [
        createLoader(function (src) {
          return [
            'import Post from "components/Post"',
            src,
            "export default (props) => <Post meta={meta} {...props} />",
          ].join("\n")
        }),
      ],
    })
    return config
  },
})
