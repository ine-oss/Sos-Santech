<script setup>
import { ref, computed } from 'vue'

const currentCategory = ref('all')

const categories = ref([  
  { id: 'all', label: 'All Videos' },
  { id: 'vlogs', label: 'Travel Vlogs' },
  { id: 'nature', label: 'Nature & Wildlife' },
  { id: 'guides', label: 'Travel Guides' }
])

const videos = ref([
  // --- TRAVEL VLOGS ---
  { id: 1, title: 'Exploring Kigali: A Week in the Capital', category: 'vlogs', duration: '12:45', src: '/src/assets/images/vlog-kigali.jpg' },
  { id: 2, title: 'Road Trip to Lake Kivu: Gisenyi Vlog', category: 'vlogs', duration: '15:20', src: '/src/assets/s.jpg' },


  // --- NATURE & WILDLIFE ---
  { id: 5, title: 'Cinematic Mountain Gorillas Trekking', category: 'nature', duration: '05:30', src: '/src/assets/images/nature-gorilla.jpg' },
  { id: 6, title: 'Akagera National Park: Full Safari Drive', category: 'nature', duration: '18:40', src: '/src/assets/images/nature-safari.jpg' },


  // --- TRAVEL GUIDES ---
 

  { id: 11, title: 'Kigali City Tour: Hidden Gems of Rwanda', category: 'vlogs', duration: '13:10', src: '/src/assets/kigali.jpg' },
  { id: 12, title: 'Rwanda Culture & Festivals: A Local Travel Story', category: 'guides', duration: '11:45', src: '/src/assets/rwanda.png' },
  { id: 13, title: 'Volcanoes National Park Gorilla Trekking Guide', category: 'nature', duration: '16:20', src: '/src/assets/gorilla.jpg' },
  { id: 14, title: 'Road Trip Across Rwanda: Lakes, Hills, and Heritage', category: 'vlogs', duration: '18:00', src: '/src/assets/volcano.jpg' },
])

const filteredVideos = computed(() => {
  if (currentCategory.value === 'all') return videos.value
  return videos.value.filter(v => v.category === currentCategory.value)
})
</script>

<template>
  <main class="bg-stone-950 min-h-screen py-16 px-4 md:px-8 text-stone-100">
    
    <div class="max-w-3xl mx-auto text-center mb-12 space-y-2">
      <h2 class="text-3xl font-black text-white uppercase tracking-wide">
        Video Gallery
      </h2>
      <p class="text-stone-400 text-xs">
        Watch vlogs, nature documentaries, and practical travel guides about Rwanda.
      </p>
    </div>

    <div class="flex flex-wrap justify-center gap-2 mb-12">
      <button 
        v-for="cat in categories" 
        :key="cat.id"
        @click="currentCategory = cat.id"
        :class="currentCategory === cat.id ? 'bg-emerald-600 text-white' : 'bg-stone-900 text-stone-400 hover:text-white'"
        class="text-xs font-bold px-4 py-2 rounded-lg transition-colors uppercase tracking-wider"
      >
        {{ cat.label }}
      </button>
    </div>

    <section class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div 
          v-for="video in filteredVideos" 
          :key="video.id" 
          class="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden group hover:border-emerald-500/40 transition-colors duration-300"
        >
          <div class="h-48 bg-stone-950 relative overflow-hidden flex items-center justify-center">
            <img 
              :src="video.src" 
              :alt="video.title" 
              class="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-transform duration-300"
              loading="lazy"
            />
            
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
              <div class="h-12 w-12 bg-emerald-600 group-hover:bg-emerald-500 text-white rounded-full flex items-center justify-center pl-1 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
            </div>

            <span class="absolute bottom-2 right-2 bg-stone-950/80 text-[10px] font-mono px-2 py-0.5 rounded text-stone-300">
              {{ video.duration }}
            </span>
          </div>

          <div class="p-4 bg-stone-900/40">
            <span class="text-[9px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">
              {{ video.category }}
            </span>
            <h3 class="text-sm font-bold text-stone-200 line-clamp-2 min-h-[40px] group-hover:text-white transition-colors">
              {{ video.title }}
            </h3>
          </div>
          
        </div>

      </div>
    </section>

  </main>
</template>