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
  { id: 1, name: 'The Heaven Restaurant', category: 'restaurants', info: 'Fine Dining & African-European Fusion', location: 'Nyarugenge District', phone: '+250 788 486 581', email: 'info@heavenrwanda.com' },
  { id: 2, name: 'Repub Lounge Kigali', category: 'restaurants', info: 'Traditional Brochettes & Misuzu Buffet', location: 'Kimihurura Suburb', phone: '+250 785 258 369', email: 'republounge@kigali.rw' },
  { id: 3, name: 'Bourbon Coffee Centre', category: 'restaurants', info: 'Espresso Bar, Pastries & Salads', location: 'UTC Town Center', phone: '+250 783 147 258', email: 'orders@bourbon.rw' },

  // --- BARS & LOUNGES ---
  { id: 4, name: 'Choma’d Bar & Grill', category: 'bars', info: 'Gourmet Barbecue & Cocktail Deck', location: 'Nyharutarama Hill', phone: '+250 782 369 147', email: 'chomad@kigalilife.com' },
  { id: 5, name: 'Pili Pili Rooftop Lounge', category: 'bars', info: 'Outdoor Poolside Sports Bar', location: 'Kibagabaga Sector', phone: '+250 781 753 159', email: 'pilipili.lounge@gmail.com' },

  // --- SCHOOLS & ACADEMIES ---
  { id: 6, name: 'Green Hills Academy', category: 'schools', info: 'International Primary & High School', location: 'Nyandungu District', phone: '+250 786 951 753', email: 'info@greenhills.ec.rw' },
  { id: 7, name: 'African Leadership University', category: 'schools', info: 'Undergraduate Computing & Business Degree', location: 'Kigali Innovation City', phone: '+250 789 357 951', email: 'admissions@aluedu.com' },

  // --- CHURCHES & CATHEDRALS ---
  { id: 8, name: 'Sainte-Famille Catholic Church', category: 'churches', info: 'Historical Central Urban Parish', location: 'Nyarugenge District', phone: '+250 787 159 357', email: 'saintefamille@kigalidiocese.rw' },
  { id: 9, name: 'Christian Life Assembly (CLA)', category: 'churches', info: 'Modern Evangelical Fellowship Worship', location: 'Nyharutarama Hub', phone: '+250 784 369 852', email: 'info@clarwanda.org' }
])

const filteredPlaces = computed(() => {
  return directoryData.value.filter(item => item.category === currentTab.value)
})
</script>

<template>
  <main class="bg-stone-950 min-h-screen text-stone-100 pb-24">
    <header class="from-emerald-950/40 via-stone-900/40 pt-16 pb-10 px-6 bg-gradient-to-b border-b border-stone-900 text-center">
      <div class="max-w-3xl mx-auto space-y-1">
        <h1 class="text-3xl font-black text-white uppercase tracking-wide">Kigali City</h1>
        <p class="text-stone-400 text-xs uppercase tracking-wider text-emerald-400">Classified Capital Directory</p>
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