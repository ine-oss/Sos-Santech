<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <!-- how box of footer need to look like p is padding  m is margin -->
  <footer class="bg-green-800 text-white px-8 py-10 mt-10 ">
  
    <div class=" flex flex-wrap justify-between gap-8">
        <!-- this is the footer things what to be icluded in the box of footer -->
<div>
  <h3 class="text-yellow-300 font-bold text-lg mb-3">  tembera u rwanda</h3>
   <p class="text-sm text-green-200">discover the beauty of the lanf of  rwanda</p>
</div>
<!-- we are going to define quicklinks -->
<div>
  <h3 class="text-yellow-300 font-bold text-lg mb-3">  QUICK links</h3>
  <!-- so here we are creating quicl kunks so router link it help in  navigating to the next page -->
      <ul class=" space- y-2 text-sm">
      <li> <RouterLink to="/" class="hover: text-white-300 hover:bg-yellow-300"> HOME</RouterLink>  </li>
          <li> <RouterLink to="/about" class="hover: text-white-300 hover:bg-yellow-300"> ABOUT</RouterLink>  </li>
             <li> <RouterLink to="/service" class="hover: text-white-300 hover:bg-yellow-300"> SERVICE</RouterLink>  </li>
               <li> <RouterLink to="/contact" class="hover: text-white-300 hover:bg-yellow-300"> CONTACT</RouterLink>  </li>
      </ul>
</div>
<!-- destination -->
 <div>
  <h3 class="text-yellow-300  font-bold  text-lg mb-3"> destinations</h3>
  <ul class=" space-y-2 text-sm"> 
<li>
  <RouterLink to="/northern" class="hover:bg-yellow-300">northern provience </RouterLink>
</li>

<li>
  <RouterLink to="/southern" class="hover:bg-yellow-300"> southern provience </RouterLink>
</li>
<li>
  <RouterLink to="/eastern" class="hover:bg-yellow-300">eastern  provience </RouterLink>
</li>
<li>
  <RouterLink to="/western" class="hover:bg-yellow-300">western provience </RouterLink>
</li>
<li>
  <RouterLink to="/kigali" class="hover:bg-yellow-300">kigali city </RouterLink>
</li>







  </ul>
 </div>
<div>
  <h3 class="text-yellow-300 font-bold text-ig mb-3"> contact us</h3>
  <ul class="space-y-2 text-green-300">
    <li>kundwalienyineza@gmail.com </li>
    <li> +078917844</li>
   <li> kagugu kigali Rwanda</li>
  </ul>
</div>
  </div>            <!-- if unga div box ta footer zose-->
    
<!-- copyright -->
 <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-300">
<p class=" text-center"> ©copy; 2023 visit Rwanda. All rights reserved.</p>
 </div>

 
    
    
  </footer>
</template>
<!-- footer ni igice kigaragaza information  components quick links,location -->