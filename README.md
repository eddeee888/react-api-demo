# React API demo

This is a react single page application that performs searches against the Guardian content API and displays the results.

## Overview

This app takes a query from user and calls the Guardian API to retrieve related articles. Once articles are received, they will be grouped into sections. Each article has a checkbox that can be clicked to be pinned to show at the bottom of the screen.

## Technologies used

React and related frameworks:

- React
- Redux
- React router
- Redux thunk
- Redux saga
- Immutable JS

UI/Design elements:

- Material UI
- Styled components

Testing:

- Jest

Service API:

- Guardian content API

Helpers/Utils:

- moment.js

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
