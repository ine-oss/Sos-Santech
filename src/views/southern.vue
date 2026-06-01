<script setup>
import { ref, computed } from 'vue'

const currentTab = ref('restaurants')

const categories = ref([
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'bars', label: 'Bars & Lounges' },
  { id: 'schools', label: 'Schools & Academies' },
  { id: 'churches', label: 'Churches & Cathedrals' }
])

const directoryData = ref([
  // --- RESTAURANTS ---
  { id: 1, name: 'Huye Heritage Resto', category: 'restaurants', info: 'Traditional Rwandan Buffet & Local Stews', location: 'Huye District', phone: '+250 788 654 321', email: 'heritage@huye.rw' },
  { id: 2, name: 'Nyanza Royal Diner', category: 'restaurants', info: 'Grilled Tilapia & Local African Food', location: 'Nyanza Town', phone: '+250 785 123 987', email: 'royaldiner@nyanza.com' },
  { id: 3, name: 'Credo Dining Room', category: 'restaurants', info: 'Continental Menu & Fine Grills', location: 'Huye Center', phone: '+250 789 444 111', email: 'dining@credolodge.rw' },

  // --- BARS & LOUNGES ---
  { id: 4, name: 'Southern Echo Bar', category: 'bars', info: 'Cocktails, Cold Beer & Evening Music', location: 'Huye Main Road', phone: '+250 784 777 333', email: 'echo.south@outlook.com' },
  { id: 5, name: 'Nyanza Hub Lounge', category: 'bars', info: 'Local Brochettes & Sports Screening', location: 'Nyanza District', phone: '+250 783 555 888', email: 'hublounge@nyanza.rw' },

  // --- SCHOOLS & ACADEMIES ---
  { id: 6, name: 'University of Rwanda (Huye Campus)', category: 'schools', info: 'Public Higher Learning Institution', location: 'Huye District', phone: '+250 788 000 111', email: 'info@ur.ac.rw' },
  { id: 7, name: 'Southern Science Academy', category: 'schools', info: 'Secondary Boarding School', location: 'Ruhango District', phone: '+250 783 999 555', email: 'admin@ssa.rw' },

  // --- CHURCHES & CATHEDRALS ---
  { id: 8, name: 'Huye Miracles Protestant Church', category: 'churches', info: 'Worship Services & Community Fellowship', location: 'Huye Center', phone: '+250 781 333 888', email: 'contact@acmr.org' },
  { id: 9, name: 'Nyanza Cathedral Parish', category: 'churches', info: 'Sunday Mass Services', location: 'Nyanza District', phone: '+250 786 555 111', email: 'nyanza@diocese.rw' }
])

const filteredPlaces = computed(() => {
  return directoryData.value.filter(item => item.category === currentTab.value)
})
</script>

<template>
  <main class="bg-stone-950 min-h-screen text-stone-100 pb-24">
    
    <header class="from-emerald-950/40 via-stone-900/40 pt-16 pb-10 px-6 bg-gradient-to-b border-b border-stone-900 text-center">
      <div class="max-w-3xl mx-auto space-y-1">
        <h1 class="text-3xl font-black text-white uppercase tracking-wide">Southern Province</h1>
        <p class="text-stone-400 text-xs uppercase tracking-wider text-emerald-400">Classified Regional Directory</p>
      </div>
    </header>

    <nav class="max-w-4xl mx-auto px-6 mt-12 flex flex-wrap justify-center gap-2">
      <button 
        v-for="tab in categories" 
        :key="tab.id" 
        @click="currentTab = tab.id" 
        :class="currentTab === tab.id ? 'bg-emerald-600 text-white border-transparent' : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-white'" 
        class="text-xs font-bold px-5 py-3 rounded-xl border transition-all duration-200 uppercase tracking-wider"
      >
        {{ tab.label }}
      </button>
    </nav>

    <section class="max-w-6xl mx-auto px-6 mt-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        
        <div 
          v-for="place in filteredPlaces" 
          :key="place.id" 
          class="bg-stone-900 border border-stone-800 p-5 rounded-xl space-y-4 hover:border-emerald-500/30 transition-colors duration-200 flex flex-col justify-between"
        >
          <div>
            <h3 class="text-sm font-bold text-white tracking-tight line-clamp-1">{{ place.name }}</h3>
            <p class="text-[11px] text-stone-400 mt-1 line-clamp-1">{{ place.info }}</p>
            <span class="text-[9px] text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 px-2 py-0.5 rounded mt-3 inline-block">
              📍 {{ place.location }}
            </span>
          </div>
          
          <div class="space-y-1.5 pt-3 border-t border-stone-800 text-[11px] text-stone-400 font-mono">
            <div class="flex items-center space-x-2">
              <span class="text-stone-600 font-sans">Tel:</span>
              <span class="text-stone-200">{{ place.phone }}</span>
            </div>
            <div class="flex items-center space-x-2 overflow-hidden truncate">
              <span class="text-stone-600 font-sans">Mail:</span>
              <span class="text-stone-300 truncate">{{ place.email }}</span>
            </div>
          </div>
        </div>

      </div>
    </section>

  </main>
</template>