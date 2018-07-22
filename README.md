# React API demo

This is a react single page application that performs searches against the Guardian content API and displays the results.

## Overview

This app takes a query from user and calls the Guardian API to retrieve related articles. Once articles are received, they will be grouped into sections. Each article has a checkbox that can be clicked to be pinned to show at the bottom of the screen.

## Technologies used

React and related frameworks:

- React
- Redux
- React router: to handle routes of a single page application
- Redux thunk: acts as action handlers for action creators
- Redux saga: handle side effects
- Immutable JS: to handle data immutability plus making it easier to compare non-primitive data types like arrays and objects

UI/Design elements:

- Material UI
- Styled components: enables CSS-in-JS

Testing:

- Jest

Service API:

- Guardian content API

Helpers/Utils:

- moment.js: handle date formatting

Bundler:

- Webpack
- Webpack-dev-server

## Running locally

- `npm install`
- `npm run start`

Webpack dev server will run the app in production mode on http://localhost:8080/

To run in development mode with hot module reload:

- `npm run watch`

## TODOs

- Add more tests to cover all reducers, actions, sagas, etc.
