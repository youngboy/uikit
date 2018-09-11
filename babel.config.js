module.exports = {
  presets: [
    '@babel/react',
  ],
  env: {
    test: {
      presets: [
        '@babel/env'
      ],
    },
    cjs: {
      presets: [
        [ '@babel/env', {
          targets: {
            node: true
          }
        } ]
      ]
    },
    es: {
      presets: [
        [ '@babel/env', {
          loose: true,
          modules: false
        } ]
      ]
    },
  }
}