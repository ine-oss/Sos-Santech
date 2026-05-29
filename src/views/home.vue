<script setup>
import { ref } from 'vue'

// Quick interactive stats to engage users
const quickStats = ref([
  { id: 1, value: '1,000+', label: 'Hills to Explore' },
  { id: 2, value: '5', label: 'Big Five Safari' },
  { id: 3, value: '100%', label: 'Warm Welcome' }
])
</script>

<template>
  <section class="relative min-h-screen bg-stone-950 text-white flex flex-col justify-between overflow-hidden">
    
    <div class="absolute inset-0 z-0">
      <img 
        src="/src/assets/kigali.jpg" 
        alt="Rwanda Landscape" 
        class="w-full h-full object-cover opacity-60000000000 scale-105 animate-[pulse_8s_infinite_alternate] transition-transform duration-[4000ms]"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
    </div>

    <header class="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <span class="h-3 w-3 bg-emerald-500 rounded-full animate-ping"></span>
        <span class="font-black tracking-widest text-lg uppercase text-emerald-400">Tembera Rwanda</span>
      </div>
    </header>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-12">
      
      <div class="lg:col-span-7 space-y-6 text-left">
        <div class="inline-flex items-center space-x-2 bg-emerald-950/60 border border-emerald-800/50 px-4 py-1.5 rounded-full backdrop-blur-md">
          <span class="text-xs font-bold uppercase tracking-widest text-emerald-400">Discover East Africa</span>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-black tracking-tight text-white leading-none">
          Experience <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-500">
            Remarkable
          </span> <br />
          Rwanda
        </h1>
        
        <p class="text-stone-300 text-lg md:text-xl max-w-xl leading-relaxed font-light">
          Immerse yourself in magnificent mist-covered rainforests, vibrant local cultural traditions, and breathtaking volcanic landscapes. Your journey into the heart of Africa begins here.
        </p>

        <div class="flex flex-wrap gap-4 pt-4">
          <a 
            href="#explore" 
            class="group relative inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl shadow-emerald-900/30 overflow-hidden"
          >
            <span class="relative z-10 flex items-center gap-2 tracking-wide uppercase text-sm">
              Explore Destinations
              <svg class="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </a>
          
          <a 
            href="#about" 
            class="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 active:scale-95 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-md border border-white/10 text-sm tracking-wide"
          >
            Learn More
          </a>
        </div>
      </div>

      <div class="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 w-full">
        <div 
          v-for="stat in quickStats" 
          :key="stat.id"
          class="group bg-stone-900/60 border border-stone-800/80 p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40 hover:bg-stone-900/90 hover:-translate-y-1"
        >
          <div class="text-3xl font-black text-emerald-400 group-hover:text-emerald-300 transition-colors">
            {{ stat.value }}
          </div>
          <div class="text-xs uppercase tracking-widest text-stone-400 mt-1 font-semibold">
            {{ stat.label }}
          </div>
        </div>
      </div>

    </div>

    <div class="relative z-10 w-full bg-gradient-to-r from-emerald-500 via-green-400 to-amber-400 h-1.5"></div>
    
  </section>
</template>