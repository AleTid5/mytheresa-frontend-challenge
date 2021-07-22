# MyTheresa React Challenge
![React](https://img.shields.io/badge/-React-20232a?logo=react&style=for-the-badge)
![SCSS](https://img.shields.io/badge/SCSS-ffbedf?logo=sass&style=for-the-badge)
![Webpack](https://img.shields.io/badge/-Webpack-2b3b42?logo=webpack&style=for-the-badge)
![Babel](https://img.shields.io/badge/-Babel-323230?logo=babel&style=for-the-badge)

## 🤔 What is this?
This is a challenge for `MyTheresa`. It has been built from scratch,
with WebPack 5 (the packer), Babel (the transpiler), React and SCSS.
[Here are the requirements of the test](https://gist.github.com/angelcustodio/2e03fde60136dc2eb64071123d6250a9)

### 🖥 Install and run

Requires [Node.js](https://nodejs.org/) to run and install the dependencies.

Installing the dependencies and starting the server:

```sh
$ git clone https://github.com/AleTid5/mytheresa-frontend-challenge.git
$ cd mytheresa-frontend-challenge
$ npm i
$ npm start
```

> ###### Note: Live Demo is running on [https://aletid5.github.io/mytheresa-frontend-challenge](https://aletid5.github.io/mytheresa-frontend-challenge)

### 🧪 Tests

To run the unit tests, you have to run the following command:

```sh
$ npm run test
```

In addition, if you have `npx` installed locally, you can run

```sh
$ npx jest --watch # To hot reload the tests
$ npx jest --coverage # To generate the "coverage" folder and see how much percentage of the application has been tested (accessing the index.html file)
```

### 🔥 Features!
- Movies carousel is on fire!
- You can add or remove a movie from your movie favorite list
- For each movie gender there is a different banner
- Assets are cached
- Every dynamic component has a `Skeleton` and is rendered using `lazy` and `Suspense`

### 👻 Licence
[WTFPL](http://www.wtfpl.net/about/)
