<template>
  <div class="flex flex-col min-h-screen">
    
    <header class="bg-white border-b border-slate-200">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <div class="flex items-center space-x-2">
          <img src="./assets/sos.jpg" alt="SOS Logo" class="w-8 h-8 object-contain" />
          <h1 class="text-xl font-bold tracking-tight text-slate-900 text-color-blue text-center">SOS TECHINICAL SCHOOL BLOG</h1>
        </div>

        <nav class="flex items-center space-x-6 text-sm font-medium text-color-blue divide-x divide-slate-300">
          <router-link to="/" class="text-slate-600 hover:text-slate-900 text-color-blue">Home</router-link>
          <router-link to="/leaders" class="text-slate-600 hover:text-slate-900 text-color-blue">Leaders</router-link>
          <router-link to="/login" class="text-slate-600 hover:text-slate-900 text-color-blue font-semibold">Login</router-link>
        </nav>

      </div>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8 max-w-4xl">
      <router-view />
    </main>

    <footer class="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
      <p>&copy; 2026 SOS Technical High School Kigali.</p>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>