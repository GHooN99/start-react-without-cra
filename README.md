# start-react-without-cra
> CRA([Create React App](https://github.com/facebook/create-react-app)) 없이 리액트 개발 환경을 이해하고 템플릿 만들어보기

### 과정 기록물/참고자료 
- [블로그 공부 기록](https://ghoon99.tistory.com/61)
- [참고사항- Webpack](https://webpack.js.org/) 
- [참고사항- Babel](https://babeljs.io/) 

## 실행 방법

```sh
# degit 으로 깃헙 레포지토리 다운로드
npx degit GHooN99/start-react-without-cra folder-name
cd folder-name

yarn install  # 패키지 설치 (필수!) (혹은 npm 으로)

yarn start    # 개발 서버 열기
yarn build    # 빌드 하기
```


## dependencies
```json
"dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "@babel/core": "^7.16.0",
    "@babel/plugin-transform-runtime": "^7.16.0",
    "@babel/preset-env": "^7.16.0",
    "@babel/preset-react": "^7.16.0",
    "webpack": "^5.61.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.4.0",
    "babel-loader": "^8.2.3",
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^6.5.0",
    "html-loader": "^3.0.0",
    "html-webpack-plugin": "^5.5.0",
    "style-loader": "^3.3.1"
  }

```

## 구조

```sh
│ .gitignore
│  babel.config.js    # babel 설정 파일
│  package.json
│  webpack.config.js  # webpack 설정 파일 
│
├─build # 빌드 하면 생기는 폴더 
├─public
│      index.html
└─src
       App.jsx
       index.css
       index.js  # Entry point
```

### 아직 안되는 것 (cra 에 비해)
```
file-loader (파일 관련)
sass-loader
postcss-loader
webpack build 최적화(파일 나누기)
eslint, prettier 
등등 ...
```
