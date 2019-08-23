# React Material-UI seed

[![Build Status](https://travis-ci.org/yaron1m/react-material-ui-seed.svg?branch=master)](https://travis-ci.org/yaron1m/react-material-ui-seed?branch=master)
[![dependencies](https://david-dm.org/yaron1m/react-material-ui-seed.svg)](https://david-dm.org/yaron1m/react-material-ui-seed)
[![devDependency Status](https://david-dm.org/yaron1m/react-material-ui-seed/dev-status.svg)](https://david-dm.org/yaron1m/react-material-ui-seed#info=devDependencies)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![License: MIT](https://img.shields.io/badge/licence-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

This is a seed for a simple react app with the following capabilities:
* [create-react-app](https://github.com/facebook/create-react-app)
* [react-redux](https://github.com/reduxjs/react-redux)
* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
* [material-ui](https://material-ui.com)
* [ESLint](https://eslint.org/)

## Live demo:
See [live demo here](https://yaron1m.github.io/react-material-ui-seed/).

## Requirements
* node `^5.0.0`
* npm `^3.0.0`

## Getting started

To start your new app, first clone this project:
```bash
$ git clone --depth=1 https://github.com/yaron1m/react-material-ui-seed.git <my-project-name>
$ cd <my-project-name>
```

Then, install the project dependencies:
```bash
$ npm install
```

To run the app, use:
```bash
$ npm start
```
The app will start at [http://localhost:3000](http://localhost:3000)

## Project structure
```
.
├── public                        # Static files for running the app
│   ├── index.html                # Base HTML file with div replaced by app
│   └── favicon.ico               # App icon, you may want to replace this
├── src                           # Source code
│   ├── header                    # App header and navigation drawer
│   │   ├── Header.tsx            # Blue app header component
│   │   └── LeftDrawer.tsx        # App left drawer, opened from header menu button
│   ├── pages                     # App pages
│   │   ├── AboutPage.tsx         # Simple about page, rendered when navigating to '/about'
│   │   ├── HomePage.tsx          # App home page, displaying text box and message
│   │   └── HomePageContainer.ts  # Connecting HomePage.tsx to the redux store
│   ├── store                     # Redux store
│   │   ├── index.ts              # Creating the redux store with combineReducers and thunk
│   │   └── user-info             # Sample reducer
│   │       ├── Actions.ts        # Handling UPDATE_NAME actions
│   │       ├── ActionTypes.ts    # Defining user-info reducer action types
│   │       └── Reducer.ts        # Reducer for user-info, holding the user name and selectors
│   ├── App.tsx                   # Displaying the header and app content
│   ├── Routes.tsx                # Managing app routes
│   ├── index.css                 # App body css, setting the margin and background color
│   └── index.ts                  # App entry point, creating redux store
├── .eslintrc.js                  # Configuration file for ESLint
├── .travis.yml                   # Configuration file for TravisCI
└── package.json                  # Project information and dependencies.
```

## Author
**Yaron Malin** - [LinkedIn](https://www.linkedin.com/in/yaron-malin/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
