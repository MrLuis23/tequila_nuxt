import fs from 'fs'
import pathToRegexp from 'path-to-regexp'
import createProxyMiddleware from 'http-proxy-middleware'

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase()  : 'development';
// Take all routes and create path regexps from them. This means that we account for requests like /posts/1 and not just /posts
const readRoutesFromFile2 = () => JSON
    .parse(fs.readFileSync('nuxtPageRoutes.json'))
    .map(pathToRegexp);
    // console.log("regex PAGES");
    // console.log(readRoutesFromFile2);
// let nuxtPageRoutes = readRoutesFromFile();
    let nuxtPageRoutes = JSON.parse(fs.readFileSync('nuxtPageRoutes.json'));
// console.log("PAGES");
// console.log(nuxtPageRoutes);
// const proxy = createProxyMiddleware({ target: `http://localhost:` }) // target is set to the location of our legacy app


export default (req, res, next) => {
    if (NODE_ENV !== 'production') {
        // While in development mode, the available routes might change, so we need to check them every time.
        nuxtPageRoutes = readRoutesFromFile()
    }
    

    // if(nuxtPageRoutes.some(route => route.exec(req.url))) {
    //     // A valid path was found, so we let Nuxt render it!
    //     next()
    // } else {
        // Here we invoke our proxy middleware, but really you can put whatever it is you want here!
        // proxy(req, res, next)
        // app.use('*', createProxyMiddleware({
        //     target: 'localhost',
        //     changeOrigin: true,
        //     pathRewrite: {
        //         [`^/error`]: '',
        //     },
        //  }));
    }
// }