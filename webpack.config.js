const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = "production";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",
  
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./src/index.tsx",
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/public`,
      // 出力ファイル名
      filename: "index.js",
      assetModuleFilename: "img/[name][ext]"
    },
    module: {
      rules: [
        {
          // 拡張子 .ts もしくは .tsx の場合
          test: /.(ts|tsx)$/,
          // TypeScript をコンパイルする
          use: "ts-loader"
        },
        {
          test: /(\.s[ac]ss)$/,
          use: [
            // linkタグに出力する機能
            "style-loader",
            // CSSファイルを書き出すオプションを有効にする
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: false,
              },
            },
            // CSSをバンドルするための機能
            {
              loader: "css-loader",
              options: {
                // オプションでCSS内のurl()メソッドの取り込みを禁止する
                url: true,
                // ソースマップの利用有無
                sourceMap: enabledSourceMap,
  
                // 0 => no loaders (default);
                // 1 => postcss-loader;
                // 2 => postcss-loader, sass-loader
                importLoaders: 2,
                modules: {
                  mode: 'global',
                }
              },
            },
            {
              loader: "sass-loader",
              options: {
                // ソースマップの利用有無
                sourceMap: enabledSourceMap,
              },
            },
          ],
        },
        {
          test: /\.(ico|svg|jpe?g|png|webp)$/,
          type: "asset/inline",
        }, 
      ]
    },
    //プラグインの設定
    plugins: [
      new MiniCssExtractPlugin({
        // 抽出する CSS のファイル名
        filename: "style.css",
      }),
    ],
    devServer: {
        contentBase: `${__dirname}/public`,
        open: true,
        port: 3000,
    },
    // import 文で .ts や .tsx ファイルを解決するため
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    // ES5(IE11等)向けの指定（webpack 5以上で必要）
    target: ["web", "es5"],
  };