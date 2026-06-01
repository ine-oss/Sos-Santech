  // this is a page where miracles start it help when u click on page u anvigate to that page automaticall and see its data
import { createRouter, createWebHistory } from "vue-router";// help in navigating process
import Home from '../views/home.vue';
import About from '../views/about.vue';
import Contact from '../views/contact.vue';
import Service from '../views/service.vue';
import Kigali from '../views/kigali.vue';
import Northern from '../views/northern .vue';
import Photos from '../views/photos.vue';
import Southern from '../views/southern.vue';
import Videos from '../views/videos.vue';
import Western from '../views/western.vue';
import Eastern from '../views/eastern.vue';
import Links from '../views/links.vue';
   // this router combine all the links is like a amother and links  are children  
   // on this page we speify the paths  of the links
const routes = [
  { 
    path: '/', 
    name: 'home', 
    component: Home 
  },
  { 
    path: '/about', 
    name: 'about', 
    component: About 
  }, // Added comma here 
  { 
    path: '/contact', 
    name: 'contact', 
    component: Contact 
  }, // Added comma here

   { 
    path: '/kigali', 
    name: 'kigali', 
    component: Kigali 
  },
   { 
    path: '/eastern', 
    name: 'eastern', 
    component: Eastern
  },
   { 
    path: '/northern', 
    name: 'northern', 
    component: Northern
  },
   { 
    path: '/western', 
    name: 'western', 
    component: Western
  },
   { 
    path: '/photos', 
    name: 'photos', 
    component: Photos 
  },

    { 
    path: '/videos', 
    name: 'videos', 
    component: Videos
  },

     { 
    path: '/Links', 
    name: 'Links', 
    component: Links
  },




  { 
    path: '/service', 
    name: 'service', 
    component: Service 
  } // Changed to lowercase '/service' to match your Navbar link!
];
// router ni value name  noneho   line 33 idufasha ku dispalying  niba hari   changes ihita iti dispalayinga
const router = createRouter({
  history: createWebHistory(),
  routes
});//

export default router;


// pascalcase:ni igihe                 
// 

