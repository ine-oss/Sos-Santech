<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  phone: '',
  message: ''

})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const handleContactSubmit = () => {
  isSubmitting.value = true
  
  // Simulated submission delay
  setTimeout(() => {
    isSubmitting.value = false
    submitSuccess.value = true
    
    // Reset form fields
    form.value = { name: '', email: '', subject: '', phone: '', message: '' }
    
    // Clear success message after 5 seconds
    setTimeout(() => { submitSuccess.value = false }, 5000)
  }, 1200)
}
</script>

<template class="bg-green1-100">
  <main class="bg-stone-950 min-h-screen text-stone-100 pb-24 bg-green-800">
    
    <header class="from-emerald-950/40 via-stone-900/40 pt-16 pb-10 px-6 bg-gradient-to-b border-b border-stone-900 text-center  bg-green-80  ">
      <div class="max-w-3xl mx-auto space-y-1">
        <h1 class="text-3xl font-black text-white uppercase tracking-wide">Contact Us</h1>
        <p class="text-stone-400 text-xs max-w-md mx-auto">
          Have questions about regional hotspots or directories? Reach out to our management team.
        </p>
      </div>
    </header>

    <section class="max-w-5xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start ">
      
      <div class="md:col-span-5 space-y-6">
        <div class="space-y-2">
          <h2 class="text-lg font-bold text-white tracking-tight">Get in Touch</h2>
          <p class="text-stone-400 text-xs leading-relaxed">
            We aim to respond to all directory updates and general inquiries within 24 business hours.
          </p>
        </div>

        <div class="space-y-4 pt-4 border-t border-stone-900">
          <div class="flex items-start space-x-3">
            <span class="text-emerald-400 text-sm mt-0.5">📍</span>
            <div>
              <h4 class="text-xs font-bold text-stone-300 uppercase tracking-wider">Main Hub Address</h4>
              <p class="text-stone-400 text-xs mt-0.5">KN 4 Ave, Nyarugenge District</p>
              <p class="text-stone-500 text-xs">Kigali, Rwanda</p>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <span class="text-emerald-400 text-sm mt-0.5">📞</span>
            <div>
              <h4 class="text-xs font-bold text-stone-300 uppercase tracking-wider">Phone Directory</h4>
              <p class="text-stone-200 text-xs font-mono mt-0.5">+250 788 000 000</p>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <span class="text-emerald-400 text-sm mt-0.5">✉️</span>
            <div>
              <h4 class="text-xs font-bold text-stone-300 uppercase tracking-wider">Electronic Mail</h4>
              <p class="text-emerald-400 text-xs font-mono mt-0.5">support@temberarwanda.rw</p>
            </div>
          </div>
        </div>
      </div>

      <div class="md:col-span-7 bg-stone-900 border border-stone-800 p-6 md:p-8 rounded-2xl">
        <form @submit.prevent="handleContactSubmit" class="space-y-4">
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1">
              <label class="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Your Name</label>
              <input 
                v-model="form.name" 
                type="text" 
                required
                class="w-full bg-stone-950 border border-stone-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-stone-100 outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div class="space-y-1">
              <label class="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Email Address</label>
              <input 
                v-model="form.email" 
                type="email" 
                required
                class="w-full bg-stone-950 border border-stone-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-stone-100 outline-none transition-colors"
                placeholder="name@example.com"
              />
            </div>
                  <div class="space-y-1">
                  <label class="text-[10px] font-bold text-stone-400 uppercase tracking-wider">your phone number</label>
                 <input 
                  v-model="form.phone" 
                type="your phone number" 
                required
                class="w-full bg-stone-950 border border-stone-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-stone-100 outline-none transition-colors"
                placeholder="+250"
              />
            </div>



          </div>

          <div class="space-y-1">
            <label class="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Subject</label>
            <input 
              v-model="form.subject" 
              type="text" 
              required
              class="w-full bg-stone-950 border border-stone-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-stone-100 outline-none transition-colors"
              placeholder="How can we help you?"
            />
          </div>

          <div class="space-y-1">
            <label class="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Message</label>
            <textarea 
              v-model="form.message" 
              rows="5" 
              required
              class="w-full bg-stone-950 border border-stone-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-stone-100 outline-none transition-colors resize-none"
              placeholder="Write your details here..."
            ></textarea>
          </div>

          <div v-if="submitSuccess" class="bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 p-3 rounded-xl text-xs text-center">
            Message sent successfully! Thank you for contacting us.
          </div>

          <button 
            type="submit" 
            :disabled="isSubmitting"
            class="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-stone-800 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors duration-200"
          >
            {{ isSubmitting ? 'Sending Message...' : 'Send Message' }}
          </button>

        </form>
      </div>

    </section>

  </main>
</template>