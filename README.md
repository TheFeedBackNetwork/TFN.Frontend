# TFN.Frontend Project

Visual Studio Team Services Build Status

[![VSTS Build Status](https://thefeedbacknetwork.visualstudio.com/_apis/public/build/definitions/877e046c-8c66-4487-b6f0-c1873436af8d/3/badge)](https://github.com/TheFeedBackNetwork/TFN.Frontend)


## Getting Started

### Prerequisites

Support for Node.js > 5

### Installation

```sh
$ git clone git@github.com:TheFeedBackNetwork/TFN.Frontend.git app-name
$ cd app-name
$ npm install
```

## Development

There are two ways in which you can build and run the web app:

* Build once for (ready for ***Production***):
  * `$ npm run build`
  * `$ npm run build:serve`

  The last command will boot up HTTP server on `3003` port and serve `build/client` directory in a default browser

* Hot reloading via webpack middlewares:
  * `$ npm start`
  * Point your browser to http://localhost:3000/, page hot reloads automatically when there are changes

## Testing

**(TBD)**

To execute all unit tests, use:

```sh
$ npm run test
```

To run unit tests continuously during development (watch tests), use:

```sh
$ npm run test:watch
```

## Expose App on Your Local Dev Machine

Assign yourself a unique publicly accessible url that will proxy all requests to your locally running webserver.

```sh
$ npm install -g localtunnel
$ npm start
$ npm run tunnel # run in a new tab
```

You will receive a url, for example `https://tbst.localtunnel.me`, that you can share with anyone for as long as your local instance of `lt` remains active. Any requests will be routed to your local service at the specified port.

## Error Tracking and Insights with Sentry

In order to get info on errors that happened in production, we integrate [Sentry](https://sentry.io/for/javascript/) into our application to track errors and get context on what happened.

To use it on your side, configure it first:

* Create account at [https://sentry.io/signup/](https://sentry.io/signup/)
* Add new project for your app on Sentry website
* In `/src/client/assets/javascripts/app/config.js` file assign `SENTRY_KEY` and `SENTRY_APP` constants values that you got after adding a new project
* Don't forget to define `Allowed Domains` section under your `Project Settings` on Sentry website to track errors from required domains

## Debugging

For debugging purposes please use:
- [Redux DevTools
](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) plugin for Chrome to simplify debugging React apps.
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## FAQ

### What's this for?

This starter kit implements best practices like testing (`unit testing`), minification, bundling, and so on. It saves you from the long, painful process of wiring it all together into an automated dev environment and build process.

### What's happening under the hood when I run `npm start`?

Webpack serves your app in memory when you run `npm start`. No physical files are written. However, the web root is `/src`, so you can reference files under /src in index.html. When the app is built using `npm run build`, physical files are written to `/build` folder and the app is served from `/build`.

### How is Sass being processed?

We're handling it differently in DEV vs PROD.

When you run `npm start`:

 1. The sass-loader compiles Sass into CSS
 2. Webpack bundles the compiled CSS into app.js. Sounds weird, but it works!
 3. app.js contains code that loads styles into the &lt;head&gt; section of index.html via JavaScript. This is why there is no stylesheet reference in index.html. In fact, if you disable JavaScript in your browser, you'll see the styles don't load either.

The approach above supports hot reloading, which is great for development. However, it also create a flash of unstyled content on load because you have to wait for the JavaScript to parse and load styles before they're applied. So for the production build, we use a different approach:

When you run `npm run build`:

 1. The sass-loader compiles Sass into CSS
 2. The [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) extracts the compiled Sass into app.css
 3. buildHtml.js adds a reference to the stylesheet to the head of index.html.

### How do I deploy this?

`npm run build`. This will prepare and build the project for production use. It does the following:

- Minifies all JS and CSS
- Inline base64 URLs for images and fonts if their size is less than specified limit
- Sets NODE_ENV to `production` so that React is built in production mode
- Places the resulting built project files into `/build` directory. (This is the folder you'll expose to the world).

## TODO

- [ ] Watch `index.html` for changes
- [ ] Setup test environment for React components using Enzyme, Mocha and Karma
- [ ] Add support for React Intl
- [ ] Add support for dynamic routing (`code splitting`)
- [ ] Update `FAQ` section to reflect latest greatest changes
- [ ] Add more Flow type annotations incrementally to allow Flow to validate more code, and gradually increase Flow’s coverage of the codebase
- [ ] Integrate Material Design or Bootstrap
- [ ] Check if PostCSS integration works
- [ ] Apply more best practices to how code is organized and written
- [ ] Add section about available `npm` scripts
- [ ] Any more ideas?

## License

[MIT License](https://opensource.org/licenses/MIT), 2017

Brought to you by The Feedback Network
