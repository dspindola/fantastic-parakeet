import Elysia from "elysia";

new Elysia() .get('/', () => "hi").listen({
    development: true
}, ({url}) => {
    console.log('%s', url)
})