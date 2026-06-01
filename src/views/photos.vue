<script setup>
import { ref, computed } from 'vue'

const currentFilter = ref('all')

const categories = ref([
  { id: 'all', label: 'All Photos' },
  { id: 'wildlife', label: 'Wildlife' },
  { id: 'landscapes', label: 'Landscapes' },
  { id: 'culture', label: 'Culture & Cities' },
  { id: 'adventure', label: 'Adventure' }
])

const photos = ref([
  // --- WILDLIFE ---
  { id: 1, title: 'Silverback Mountain Gorilla', category: 'wildlife', src: '/src/assets/animal.jpg' },
  { id: 2, title: 'Golden Monkey in Bamboo Forest', category: 'wildlife', src: '/src/assets/zebra.jpg' },
  { id: 3, title: 'Savannah Elephants at Muhazi', category: 'wildlife', src: '/src/assets/lion.jpg' },

  // --- LANDSCAPES ---
  { id: 14, title: 'Nyungwe Forest Ridge Line', category: 'landscapes', src: '/src/assets/bigogweee.jpg' },
  { id: 15, title: 'Akagera River Wetlands', category: 'landscapes', src: '/src/assets/mountains.jpg' },
  { id: 16, title: 'Rubavu Palm-Lined Shores', category: 'landscapes', src: '/src/assets/mount.jpg' },

  // --- CULTURE & CITIES ---
  { id: 21, title: 'Kimironko Market Colors', category: 'culture', src: '/src/assets/' },
  { id: 22, title: 'Imigongo Art Studio', category: 'culture', src: '/src/assets/images/' },
  { id: 23, title: 'Kigali Convention Centre Lights', category: 'culture', src: '/src/assets/volcano.jpg' },
  { id: 24, title: 'Nyanza Historical Museum', category: 'culture', src: '/src/assets/kigali.jpg' },

  // --- ADVENTURE ---
  { id: 30, title: 'Gisenyi Windsurfing', category: 'adventure', src: '/src/assets/s.jpg' },
  { id: 31, title: 'Nyungwe Waterfall Trail Trek', category: 'adventure', src: '/src/asset/KIGALI.jpg' },
  { id: 32, title: 'Hot Air Balloon over Akagera', category: 'adventure', src: '/src/assets/CheckOut Africa.jpg' }
])

const filteredPhotos = computed(() => {
  if (currentFilter.value === 'all') return photos.value
  return photos.value.filter(p => p.category === currentFilter.value)
})
</script>

<template>
  <main class="bg-stone-50 min-h-screen py-20 px-4 md:px-8">
    
    <div class="max-w-4xl mx-auto text-center mb-16">
      <span class="text-emerald-600 font-bold tracking-widest uppercase text-xs bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/60">
        Discover
      </span>
      <h2 class="text-4xl font-extrabold text-stone-800 mt-4 mb-4 tracking-tight">
        Project Gallery
      </h2>
      <div class="h-1 w-16 bg-emerald-500 mx-auto rounded-full mb-6"></div>
      <p class="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
        A structured catalog of visual assets across major regions and project sectors.
      </p>
    </div>

    <div class="flex flex-wrap justify-center gap-2 mb-12">
      <button 
        v-for="cat in categories" 
        :key="cat.id"
        @click="currentFilter = cat.id"
        :class="currentFilter === cat.id 
          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10' 
          : 'bg-white text-stone-600 hover:text-emerald-600 hover:bg-emerald-50/40 border border-stone-200/60'"
        class="text-xs font-bold px-5 py-2.5 rounded-xl transition-all duration-300 uppercase tracking-wider"
      >
        {{ cat.label }}
      </button>
    </div>

    <section class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        <div 
          v-for="photo in filteredPhotos" 
          :key="photo.id" 
          class="group bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
          <div class="h-56 bg-stone-100 overflow-hidden relative">
            <img 
              :src="photo.src" 
              :alt="photo.title" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <div class="p-5 flex-grow flex flex-col justify-center">
            <span class="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block mb-1">
              {{ photo.category }}
            </span>
            <h3 class="text-sm font-bold text-stone-800 line-clamp-2 leading-snug group-hover:text-emerald-700 transition-colors duration-300">
              {{ photo.title }}
            </h3>
          </div>
          
        </div>

      </div>
    </section>

  </main>
</template>