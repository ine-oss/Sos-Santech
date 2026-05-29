 <!-- this page help in display what is supposede to be dispalyed in the page -->
 <template>
  <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow">
    <img src="../assets/visit.jpg" alt="logo image" class="h-10">
    <!-- so here is designing the word to be included in the nav  bar phase -->

    <ul class="flex gap-8 text-sm font-medium w-full justify-end  items-center">
      <li>
        <router-link to="/" class="hover:text-yellow-300">HOME</router-link>
      </li>
      
      <li>
        <router-link to="/about" class="hover:text-yellow-300">ABOUT</router-link>
      </li>
      
      <li>
        <router-link to="/service" class="hover:text-yellow-300">SERVICES</router-link>
      </li>
      <!-- so here rero in galler u know we do in option ku buryo nu clica gallelly  u seeoptio  -->

      <li class="relative group"> 
        <a href="#" class="hover:text-yellow-300">GALLERY <span>v</span></a>
        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
          <li><a href="photos" class="block px-4 py-2 hover:bg-green-200 text-green-900">photos</a></li>
          <li><a href="videos" class="block px-4 py-2 hover:bg-green-200 text-green-900">videos</a></li>
        </ul>
      </li>
      
      <li class="relative group"> 
        <a href="#" class="hover:text-yellow-300">DESTINATION <span>v</span></a>
        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
          <li><a href="northern" class="block px-4 py-2 hover:bg-green-200 text-green-900">northern province</a></li>
          <li><a href="eastern" class="block px-4 py-2 hover:bg-green-200 text-green-900">eastern province</a></li>
          <li><a href=" western" class="block px-4 py-2 hover:bg-green-200 text-green-900">western province</a></li>
          <li><a href="southern" class="block px-4 py-2 hover:bg-green-200 text-green-900">southern province</a></li>
          <li><a href="kigali" class="block px-4 py-2 hover:bg-green-200 text-green-900">kigali city</a></li>
        </ul>
      </li>

      <li>
        <router-link to="/contact" class="hover:text-yellow-300">CONTACT</router-link>
      </li>
    </ul>
  </nav>
</template>