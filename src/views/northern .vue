<script setup>
import { ref, computed } from 'vue'

// Active tab state
const currentTab = ref('restaurants')

// Category lists
const categories = ref([
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'bars', label: 'Bars & Lounges' },
  { id: 'schools', label: 'Schools & Academies' },
  { id: 'churches', label: 'Churches & Cathedrals' }
])

// Master Directory Data Array
const directoryData = ref([
  // --- RESTAURANTS ---
  { id: 1, name: 'Volcanoes Panorama Restaurant', category: 'restaurants', info: 'Local & International Cuisine', location: 'Musanze Town', phone: '+250 788 123 456', email: 'info@volcanopanorama.rw' },
  { id: 2, name: 'Huye Heritage Resto', category: 'restaurants', info: 'Traditional Rwandan Buffet', location: 'Huye District', phone: '+250 788 654 321', email: 'heritage@huye.rw' },
  { id: 3, name: 'The Gorilla Bite Cafe', category: 'restaurants', info: 'Fast Food & Bakery', location: 'Kinigi Centre', phone: '+250 783 456 789', email: 'orders@gorillabite.rw' },
  { id: 4, name: 'Nyanza Royal Diner', category: 'restaurants', info: 'Local Stews & Grilled Fish', location: 'Nyanza Town', phone: '+250 785 123 987', email: 'royaldiner@nyanza.com' },

  // --- BARS & LOUNGES ---
  { id: 5, name: 'Virunga Peaks Bar', category: 'bars', info: 'Cocktails & Live Music', location: 'Musanze Centre', phone: '+250 782 111 222', email: 'lounge@virungapeaks.com' },
  { id: 6, name: 'Lake Kivu Breeze Lounge', category: 'bars', info: 'Waterfront Bar & Brochettes', location: 'Rubavu Beach Area', phone: '+250 781 555 999', email: 'breeze@kivulounge.rw' },
  { id: 7, name: 'Highland Terrace Pub', category: 'bars', info: 'Local Beers & Sports Screening', location: 'Musanze High Street', phone: '+250 782 444 888', email: 'highland.pub@gmail.com' },
  { id: 8, name: 'Southern Echo Night Bar', category: 'bars', info: 'Late Night Dance & Drinks', location: 'Huye Main Road', phone: '+250 784 777 333', email: 'echo.south@outlook.com' },

  // --- SCHOOLS & ACADEMIES ---
  { id: 9, name: 'Musanze International School', category: 'schools', info: 'Primary & Secondary Education', location: 'Northern Suburbs', phone: '+250 786 222 444', email: 'admissions@mis.ac.rw' },
  { id: 10, name: 'University of Rwanda (Huye Campus)', category: 'schools', info: 'Higher Learning Institution', location: 'Huye District', phone: '+250 788 000 111', email: 'info@ur.ac.rw' },
  { id: 11, name: 'Volcanoes Tourism College', category: 'schools', info: 'Hospitality & Guiding Certificates', location: 'Musanze Town', phone: '+250 785 666 444', email: 'registrar@vtc.ac.rw' },
  { id: 12, name: 'Southern Science Academy', category: 'schools', info: 'Secondary Boarding School', location: 'Ruhango District', phone: '+250 783 999 555', email: 'admin@ssa.rw' },

  // --- CHURCHES & CATHEDRALS ---
  { id: 13, name: 'Ruhengeri Catholic Cathedral', category: 'churches', info: 'Sunday Mass & Community Services', location: 'Musanze City', phone: '+250 787 444 111', email: 'ruhengeri@cathedral.rw' },
  { id: 14, name: 'Huye Miracles Protestant Church', category: 'churches', info: 'Worship Services & Youth Choir', location: 'Huye Center', phone: '+250 781 333 888', email: 'contact@huyemiracles.org' },
  { id: 15, name: 'St. John Episcopal Church', category: 'churches', info: 'Anglican Communion Liturgy', location: 'Musanze District', phone: '+250 789 222 777', email: 'stjohn@anglican.rw' },
  { id: 16, name: 'Nyanza Restoration Center', category: 'churches', info: 'Evangelical Christian Fellowship', location: 'Nyanza District', phone: '+250 786 555 111', email: 'info@nyanzarestoration.org' }
])

// Filter items dynamically based on chosen tab selection
const filteredPlaces = computed(() => {
  return directoryData.value.filter(item => item.category === currentTab.value)
})
</script>

<template>
  <main class="bg-stone-950 min-h-screen text-stone-100 pb-24">
    
    <header class="from-emerald-950/40 via-stone-900/40 pt-16 pb-10 px-6 bg-gradient-to-b border-b border-stone-900 text-center">
      <div class="max-w-3xl mx-auto space-y-2">
        <h1 class="text-3xl font-black text-white uppercase tracking-wide">Regional Directory</h1>
        <p class="text-stone-400 text-xs max-w-md mx-auto">
          Classified lookups for essentials, local businesses, institutions, and community hubs.
        </p>
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