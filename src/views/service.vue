<script setup>
import { ref } from 'vue'

const services = ref([
  { id: 1, title: 'Gorilla Trekking Permits', desc: 'Booking and reservation management for Volcanoes National Park tracking.' },
  { id: 2, title: 'Volcano Hiking Guides', desc: 'Experienced local guides for Bisoke, Kalisimbi, and Muhabura climbs.' },
  { id: 3, title: 'Akagera Safari Vehicles', desc: '4x4 safari car rentals equipped for game drives and wildlife viewing.' },
  { id: 4, title: 'Nyungwe Canopy Walk', desc: 'Reservations for the suspension bridge walkway in the rainforest.' },
  { id: 5, title: 'Lake Kivu Boat Trips', desc: 'Boat rentals and island tours from Rubavu and Karongi shores.' },
  { id: 6, title: 'Kigali City Tours', desc: 'Guided visits to the Kigali Genocide Memorial, markets, and museums.' },
  { id: 7, title: 'Traditional Dance Workshops', desc: 'Booking local cultural troupes for live Intore dance sessions.' },
  { id: 8, title: 'Local Farm Visits', desc: 'Educational tours to community agriculture and terraced farming fields.' },
  { id: 9, title: 'Cultural Village Stays', desc: 'Overnight accommodation bookings in traditional community villages.' },
  { id: 10, title: 'Birdwatching Guides', desc: 'Specialized birding guides for Nyungwe and Akagera wetlands.' },
  { id: 11, title: 'Mountain Bike Rentals', desc: 'Bike hires tailored for the Congo Nile Trail routes.' },
  { id: 12, title: 'Sustainable Eco-Lodges', desc: 'Hotel and lodge reservations with certified eco-friendly ratings.' },
  { id: 13, title: 'Photography Workshops', desc: 'Permit coordination and routing for landscape and nature photographers.' },
  { id: 14, title: 'Language Translation', desc: 'Hiring local translators fluent in Kinyarwanda, English, and French.' },
  { id: 15, title: 'Airport Transfer Booking', desc: 'Private airport pickups and drop-offs at Kigali International Airport.' },
  { id: 16, title: 'Multi-Day Itinerary Planning', desc: 'Custom scheduling and logistics mapping for multi-week vacations.' },
  { id: 17, title: 'Custom Adventure Packs', desc: 'Equipment hire for camping, hiking, and outdoor activities.' },
  { id: 18, title: 'Nature Trail Mapping', desc: 'Providing coordinates and physical maps for hiking trails.' },
  { id: 19, title: 'Wildlife Photography Safaris', desc: 'Special vehicle booking and guide sourcing for wildlife filming.' },
  { id: 20, title: 'Tea Plantation Visits', desc: 'Tour arrangements for Sorwathe and Pfunda crop harvesting experiences.' },
  { id: 21, title: 'Coffee Farm Experiences', desc: 'Crop-to-cup processing tours at Lake Kivu coffee washing stations.' },
  { id: 22, title: 'Rwandan Cuisine Classes', desc: 'Cooking demonstrations focused on traditional dishes like Isombe and Akabanga.' },
  { id: 23, title: 'Handicraft Market Visits', desc: 'Guided shopping trips to Caplaki craft village and local cooperatives.' },
  { id: 24, title: 'Relaxation & Spa Booking', desc: 'Resort spa reservations near Gisenyi hot springs and mountain retreats.' }
])
</script>

<template>
  <main class="bg-stone-950 min-h-screen py-16 px-6 text-stone-100">
    
    <div class="max-w-3xl mx-auto text-center mb-16 space-y-2">
      <h2 class="text-3xl font-black text-white uppercase tracking-wide">
        Our Services
      </h2>
      <p class="text-stone-400 text-sm">
        List of tourism, logistics, and hospitality options available in the project.
      </p>
    </div>

    <section class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        <div 
          v-for="item in services" 
          :key="item.id" 
          class="bg-stone-900/40 border border-stone-800 p-6 rounded-xl flex flex-col justify-between hover:border-emerald-500/50 transition-colors duration-300"
        >
          <div class="space-y-3">
            <h3 class="text-lg font-bold text-white">
              {{ item.title }}
            </h3>
            
            <p class="text-stone-400 text-xs leading-relaxed">
              {{ item.desc }}
            </p>
          </div>

          <div class="pt-6">
            <button class="w-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-4 rounded-lg transition-colors">
              Explore
            </button>
          </div>
        </div>

      </div>
    </section>

  </main>
</template>