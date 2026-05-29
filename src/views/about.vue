<script setup>
import { ref } from 'vue'

const locations = ref([
  {
    id: 1,
    name: 'Volcanoes National Park',
    description: 'Track the magnificent, rare Mountain Gorillas amidst a majestic backdrop of dramatic volcanic peaks and mist-covered bamboo forests.',
    highlight: 'Primate Trekking'
  },
  {
    id: 2,
    name: 'Nyungwe National Park',
    description: 'Embark on a canopy walkway adventure suspended 50 meters above one of Africa’s oldest primary rainforests, teeming with chimpanzees and rare primates.',
    highlight: 'Canopy Canopy Walk'
  },
  {
    id: 3,
    name: 'Akagera National Park',
    description: 'Experience a classic African safari where rolling savannah hills meet vast wetlands. Home to the Big Five, including majestic elephants and lions.',
    highlight: 'Savannah Safari'
  },
  {
    id: 4,
    name: 'Lake Kivu',
    description: 'Relax or kayak along the pristine, serene emerald shores of Gisenyi and Karongi, surrounded by the beautiful rolling terrain of western Rwanda.',
    highlight: 'Lakeside Escape'
  }
])
</script>

<template>
  <main class="bg-stone-50 min-h-screen py-20 px-4 md:px-8">
    
    <div class="max-w-4xl mx-auto text-center mb-20">
      <span class="text-emerald-600 font-bold tracking-widest uppercase text-xs bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/60">
        Tembera Rwanda
      </span>
      <h2 class="text-4xl font-extrabold text-stone-800 mt-4 mb-4 tracking-tight">About Our Initiative</h2>
      <div class="h-1 w-16 bg-emerald-500 mx-auto rounded-full mb-6"></div>
      <p class="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
        "Tembera Rwanda" encourages visitors to explore the breathtaking landscapes, rich culture, and diverse natural wonders of Rwanda. Every destination tells an unforgettable story.
      </p>
    </div>

    <section class="max-w-6xl mx-auto">
      <h3 class="text-2xl font-bold text-stone-800 mb-10 border-l-4 border-emerald-500 pl-4 tracking-tight">
        Featured Destinations &amp; Adventures
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="location in locations" 
          :key="location.id" 
          class="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-emerald-50/20 transition-all duration-300 border border-stone-100 flex flex-col justify-between min-h-[240px]"
        >
          <div>
            <span class="text-[10px] uppercase tracking-wider font-bold text-stone-400 group-hover:text-emerald-600 transition-colors duration-300">
              {{ location.highlight }}
            </span>
            
            <h4 class="text-2xl font-bold text-stone-800 mt-1 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
              {{ location.name }}
            </h4>
            
            <p class="text-stone-600 text-sm leading-relaxed group-hover:text-stone-700 transition-colors duration-300">
              {{ location.description }}
            </p>
          </div>
          
          <div class="mt-6 pt-4 border-t border-stone-50 group-hover:border-emerald-100/50 transition-colors duration-300">
            <button class="text-emerald-600 font-bold text-sm inline-flex items-center group-hover:text-emerald-500 transition-colors duration-300">
              Explore Guide 
              <svg 
                class="w-4 h-4 ml-1.5 transform transition-transform duration-300 ease-out group-hover:translate-x-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>