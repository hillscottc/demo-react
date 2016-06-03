# webpack-express-boilerplate

Based on [The ultimate Webpack setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup) boilerplate.

### Features
- Basic React on the client, no Redux.
- Hot module replacement in development.
- [CSS modules](http://glenmaddern.com/articles/css-modules).
- Postgres database


## Running 
For development, `npm start`, then navigate to http://localhost:3000 in your browser.

For a production build, `npm run build` then you can open `./dist/index.html` in your browser.


## Testing
Uses [Mocha](https://mochajs.org/) + [Enzyme](https://github.com/airbnb/enzyme), as described [here](http://browniefed.com/blog/css-modules-webpack-and-testing/)

    npm test


### Babel and Linting
    
    npm run eslint


