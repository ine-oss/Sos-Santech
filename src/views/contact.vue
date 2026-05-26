<template>
	<div class="max-w-xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
		<h2 class="text-3xl font-bold mb-6 text-center text-red-600">Contact Us</h2>
		<form class="space-y-5">
			<div>
				<label class="block text-gray-700 font-semibold mb-1" for="name">Name</label>
				<input id="name" type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Your Name" />
			</div>
			<div>
				<label class="block text-gray-700 font-semibold mb-1" for="email">Email</label>
				<input id="email" type="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="you@email.com" />
			</div>
			<div>
				<label class="block text-gray-700 font-semibold mb-1" for="message">Message</label>
				<textarea id="message" rows="4" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Type your message..."></textarea>
			</div>
			<button type="submit" class="w-full bg-red-600 text-white font-bold py-2 rounded-lg hover:bg-red-700 transition">Send Message</button>
		</form>
	</div>
</template>

<script setup>
// No logic yet, just a static form
</script>
