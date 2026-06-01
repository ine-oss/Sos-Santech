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
  { id: 1, name: 'Akagera Lodge Dining Room', category: 'restaurants', info: 'Savannah Game Lodge Buffet', location: 'Kayonza District', phone: '+250 788 456 111', email: 'dining@akageralodge.rw' },
  { id: 2, name: 'Muhazi Lake Resort Resto', category: 'restaurants', info: 'Grilled Whole Fish & Buffets', location: 'Rwamagana Hub', phone: '+250 785 147 852', email: 'muhaziresort@gmail.com' },
  { id: 3, name: 'Nyagatare Transit Eatery', category: 'restaurants', info: 'Traditional Steamed Beef & Tea', location: 'Nyagatare Town', phone: '+250 783 369 147', email: 'transit.nyagatare@yahoo.com' },

  // --- BARS & LOUNGES ---
  { id: 4, name: 'Rwamagana Central Pub', category: 'bars', info: 'Sports Broadcast & Local Skewers', location: 'Rwamagana Town', phone: '+250 782 741 852', email: 'centralpub@rwamagana.rw' },
  { id: 5, name: 'Savannah Nights Safari Bar', category: 'bars', info: 'Campfire Drinks & Open Air Lounge', location: 'Akagera Entry Gate', phone: '+250 781 963 852', email: 'safari.nights@outlook.com' },

  // --- SCHOOLS & ACADEMIES ---
  { id: 6, name: 'Rwamagana Lutheran Academy', category: 'schools', info: 'Secondary Science School', location: 'Rwamagana District', phone: '+250 786 852 963', email: 'admin@rla.ac.rw' },
  { id: 7, name: 'East African University Rwanda', category: 'schools', info: 'Higher Learning Campus', location: 'Nyagatare District', phone: '+250 789 159 486', email: 'nyagatare.campus@eaur.ac.rw' },

  // --- CHURCHES & CATHEDRALS ---
  { id: 8, name: 'Kibungo Catholic Diocese', category: 'churches', info: 'Sunday Mass Services', location: 'Ngoma District', phone: '+250 787 357 159', email: 'kibungo@diocese.rw' },
  { id: 9, name: 'Rwamagana Assemblies of God', category: 'churches', info: 'Evangelical Worship Center', location: 'Rwamagana Town', phone: '+250 784 951 264', email: 'contact@rag.org.rw' }
])

const filteredPlaces = computed(() => {
  return directoryData.value.filter(item => item.category === currentTab.value)
})
</script>

<template>
  <main class="bg-stone-950 min-h-screen text-stone-100 pb-24">
    <header class="from-emerald-950/40 via-stone-900/40 pt-16 pb-10 px-6 bg-gradient-to-b border-b border-stone-900 text-center">
      <div class="max-w-3xl mx-auto space-y-1">
        <h1 class="text-3xl font-black text-white uppercase tracking-wide">Eastern Province</h1>
        <p class="text-stone-400 text-xs uppercase tracking-wider text-emerald-400">Classified Regional Directory</p>
      </div>
    </header>

    <nav class="max-w-4xl mx-auto px-6 mt-12 flex flex-wrap justify-center gap-2">
      <button v-for="tab in categories" :key="tab.id" @click="currentTab = tab.id" :class="currentTab === tab.id ? 'bg-emerald-600 text-white' : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-white'" class="text-xs font-bold px-5 py-3 rounded-xl border transition-all duration-200 uppercase tracking-wider">
        {{ tab.label }}
      </button>
    </nav>

    <section class="max-w-6xl mx-auto px-6 mt-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div v-for="place in filteredPlaces" :key="place.id" class="bg-stone-900 border border-stone-800 p-5 rounded-xl space-y-4 hover:border-emerald-500/30 transition-colors duration-200 flex flex-col justify-between">
          <div>
            <h3 class="text-sm font-bold text-white tracking-tight line-clamp-1">{{ place.name }}</h3>
            <p class="text-[11px] text-stone-400 mt-1 line-clamp-1">{{ place.info }}</p>
            <span class="text-[9px] text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 px-2 py-0.5 rounded mt-3 inline-block">📍 {{ place.location }}</span>
          </div>
          <div class="space-y-1.5 pt-3 border-t border-stone-800 text-[11px] text-stone-400 font-mono">
            <div class="flex items-center space-x-2"><span class="text-stone-600 font-sans">Tel:</span><span class="text-stone-200">{{ place.phone }}</span></div>
            <div class="flex items-center space-x-2 overflow-hidden truncate"><span class="text-stone-600 font-sans">Mail:</span><span class="text-stone-300 truncate">{{ place.email }}</span></div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>