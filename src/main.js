import { createApp } from 'vue'
import App from './App.vue'    //import app stuff so that they can be  visible on the browser
import './style.css'//import tailwind css
import router from './router/index.js' //import all the routes like home and about
createApp(App).use(router).mount('#app') //so we can be able to use the router