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
  <main class="bg-stone-50 min-h-screen py-20 px-4 md:px-8">
    
    <div class="max-w-4xl mx-auto text-center mb-16">
      <span class="text-emerald-600 font-bold tracking-widest uppercase text-xs bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/60">
        Media Hub
      </span>
      <h2 class="text-4xl font-extrabold text-stone-800 mt-4 mb-4 tracking-tight">
        Video Gallery
      </h2>
      <div class="h-1 w-16 bg-emerald-500 mx-auto rounded-full mb-6"></div>
      <p class="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
        Watch vlogs, nature documentaries, and practical travel guides about Rwanda.
      </p>
    </div>

    <div class="flex flex-wrap justify-center gap-2 mb-12">
      <button 
        v-for="cat in categories" 
        :key="cat.id"
        @click="currentCategory = cat.id"
        :class="currentCategory === cat.id 
          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10' 
          : 'bg-white text-stone-600 hover:text-emerald-600 hover:bg-emerald-50/40 border border-stone-200/60'"
        class="text-xs font-bold px-5 py-2.5 rounded-xl transition-all duration-300 uppercase tracking-wider"
      >
        {{ cat.label }}
      </button>
    </div>

    <section class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div 
          v-for="video in filteredVideos" 
          :key="video.id" 
          class="group bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
          <div class="h-52 bg-stone-100 relative overflow-hidden flex items-center justify-center">
            <img 
              :src="video.src" 
              :alt="video.title" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            
            <div class="absolute inset-0 flex items-center justify-center bg-stone-900/10 group-hover:bg-stone-900/30 transition-colors duration-300">
              <div class="h-14 w-14 bg-emerald-600 group-hover:bg-emerald-500 text-white rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
            </div>

            <span class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur-sm text-[10px] font-mono px-2 py-0.5 rounded-md text-stone-100 tracking-wider">
              {{ video.duration }}
            </span>
          </div>

          <div class="p-6 flex-grow flex flex-col justify-center">
            <span class="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block mb-1.5">
              {{ video.category }}
            </span>
            <h3 class="text-base font-bold text-stone-800 line-clamp-2 min-h-[48px] leading-snug group-hover:text-emerald-700 transition-colors duration-300">
              {{ video.title }}
            </h3>
          </div>
          
        </div>

      </div>
    </section>

  </main>
</template>