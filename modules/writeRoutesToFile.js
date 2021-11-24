import fs from 'fs'
// const writeRouteToFile = 
export default function () {
    const { nuxt } = this;

    const fs = require('fs');
    const routesFile = 'nuxtPageRoutes.json';
    const fileExists = fs.existsSync(routesFile, ()=>{})

    if(!fileExists) {
        // Middlewares are evaluated during build even though requests aren't flowing through them,
        // so we have to ensure the file exists otherwise override404 will throw from not finding the file
        fs.writeFileSync(
            routesFile,
            JSON.stringify([])
        )
    }
    console.log(nuxt);
    console.log(nuxt.options);
    nuxt.hook('build:extendRoutes', routes => {
        // routes here is an array of nuxts internal route objects.
        // On routes[x].path we find paths like '/', '/posts' etc and this is the information we're after
        
        fs.writeFileSync(
            routesFile,
            JSON.stringify(
                routes.map(route => route.path),
                { encoding: 'utf-8', flag: 'a+' }, // The flag a+ creates the file if it doesn't exist
                err => {
                    if (err) throw err
                }
            )
        )
    });
};