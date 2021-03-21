/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    // directory name: 'build directory'
    public: '/',
    src: '/dist',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eslint src --ext .ts,.tsx,.js,.jsx',
        watch: 'esw -w --clear src --ext .ts,.tsx,.js,.jsx',
      },
    ],
    ,
    ['@snowpack/plugin-sass', { style: 'compressed' }],
    [
      '@snowpack/plugin-webpack',
      // {

      // },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
    // bundle: true,
    // minify: true,
    // target: 'es2017',
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
