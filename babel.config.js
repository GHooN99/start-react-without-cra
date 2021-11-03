module.exports = {
  presets: [
    [
      // es5로 변환
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    // jsx , 리액트를 위해
    "@babel/preset-react",
  ],
  // async await 오류 해결
  plugins: ["@babel/plugin-transform-runtime"],
};
