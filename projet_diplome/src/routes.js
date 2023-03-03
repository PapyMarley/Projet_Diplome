const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about</p>' }

const routes = {
    '/homepage' : Home,
    '/about' : About,
}

new vueConfig({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent () {
            return routes[this.currentRoute] || NotFound
        }
    },
    render (h) {return h(this.ViewComponent) }
})