const path = require('node:path')
const process = require('node:process')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const WebpackBar = require('webpackbar')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const pkg = require('./package.json')

const isEnvDevelopment = process.env.NODE_ENV === 'development'
const isEnvProduction = process.env.NODE_ENV === 'production'
const isEnvProductionProfile
  = isEnvProduction && process.argv.includes('--profile')
const useSass = Boolean(pkg.devDependencies.sass)
const enableAnalyzer = process.env.ANALYZE === 'true'
const imageInlineSizeLimit = Number.parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT || '10000',
)

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    main: './src/index.ts',
  },
  output: {
    filename: isEnvDevelopment ? '[name].js' : '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: isEnvDevelopment ? 'development' : 'production',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true,
    port: 2333,
    watchFiles: ['src/**/*.{html,ts,tsx,js,jsx}'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: isEnvProduction,
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          isEnvDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: useSass ? 2 : 1,
            },
          },
          'postcss-loader',
          useSass && 'sass-loader',
        ].filter(Boolean),
      },
      {
        test: [/\.avif$/],
        exclude: /node_modules/,
        type: 'asset',
        mimetype: 'image/avif',
        parser: {
          dataUrlCondition: {
            maxSize: imageInlineSizeLimit,
          },
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        exclude: /node_modules/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: imageInlineSizeLimit,
          },
        },
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('@svgr/webpack'),
            options: {
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
              titleProp: true,
              ref: true,
            },
          },
        ],
        issuer: {
          and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
        },
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot)(\?[\s\S]+)?$/,
        exclude: /node_modules/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: isEnvDevelopment ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: isEnvDevelopment ? '[id].css' : '[id].[contenthash].css',
    }),
    new StyleLintPlugin({
      exclude: ['node_modules', 'build', 'dist', 'coverage'],
    }),
    new ESLintPlugin({
      extensions: ['tsx', 'ts', 'jsx', 'js'],
      configType: 'flat',
      eslintPath: 'eslint/use-at-your-own-risk',
    }),
    enableAnalyzer && new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    new WebpackBar(),
  ].filter(Boolean),
  optimization: {
    minimize: isEnvProduction,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            drop_console: true,
            comparisons: false,
            inline: 2,
            keep_classnames: isEnvProductionProfile,
            keep_fnames: isEnvProductionProfile,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          priority: -10,
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
        },
        common: {
          name: 'chunk-common',
          priority: -20,
          chunks: 'initial',
          minChunks: 2,
          reuseExistingChunk: true,
        },
        particle: {
          name: 'particle',
          priority: 0,
          chunks: 'all',
          test: /[\\/]particle[\\/]/,
          enforce: true,
        },
      },
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  cache: {
    type: 'filesystem',
  },
  devtool: isEnvDevelopment ? 'eval-cheap-module-source-map' : false,
  stats: 'errors-warnings',
}
