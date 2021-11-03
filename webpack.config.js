const path = require("path"); // 파일 경로 사용
const HtmlWebpackPlugin = require("html-webpack-plugin"); // html-webpack 플러그인
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // clean-webpack 플러그인

module.exports = {
  // ENTRY 파일을 읽는 진입점 설정
  entry: "./src/index.js",

  // OUTPUT 결과물(번들들)을 반환 하는 설정
  output: {
    // 파일 이름은 해시값을 붙여 만들음
    filename: "bundle.[chunkhash].js",
    // 경로는 path절대경로로 설정 , /build 폴더에 결과물 만들음
    path: path.resolve(__dirname, "/build"),
  },

  // MODULE 로더 , js 가 아닌 다른 파일을 웹팩이 이해 할 수 있게 함
  module: {
    rules: [
      // test(사용할 파일형식의 정규식) ,use(로더이름 , 로더 옵션)
      {
        // js 와 jsx 를 babel 로더로 해석
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ["babel-loader"],
      },

      {
        // css 관련 로더들
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // 순서 주의해야함!
      },

      {
        // html 로더 사용
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
    ],
  },

  // PLUGINs 번들링 후 결과물의 처리 방식 등 다양한 플러그인 들을 설정
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
