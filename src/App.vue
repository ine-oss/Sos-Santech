<script setup lang="ts">
  import { RouterView } from 'vue-router';
     import Navbar from './components/Navbar.vue';
       import Footer from './components/footer.vue';
// CLEANED UP: All individual page imports (About, Contact, Service, Home) 
// have been removed from here because router/index.js handles them now!
     </script>
       <template>
         <div>
    <!-- we do this so we can be able to dispaly data which in not included in the router  -->
         <Navbar />
        <RouterView /> 
         <Footer/>
    <!-- so the data created can be visible iin the browser  -->
  </div>
</template>