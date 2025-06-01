<template>
  <section id="contact" class="py-12 bg-white rounded-lg shadow-sm p-6">
    <h2 class="text-3xl font-bold text-dark mb-8">Get In Touch</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-xl font-semibold text-dark mb-4">
          Contact Information
        </h3>
        <ul class="space-y-3">
          <li class="flex items-center">
            <span class="text-primary mr-3">✉️</span>
            <a href="mailto:nelakasnji@gmail.com">nelakasnji@gmail.com</a>
          </li>
          <li class="flex items-center">
            <span class="text-primary mr-3">📱</span>
            <a href="tel:+94714694244">+94 714 694 244</a>
          </li>
          <li class="flex items-center">
            <span class="text-primary mr-3">🔗</span>
            <a
              href="https://linkedin.com/in/nelaka-withanage"
              target="_blank"
              class="hover:underline"
              >LinkedIn Profile</a
            >
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-dark mb-4">Send a Message</h3>
        <form class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Name</label
            >
            <input
              type="text"
              id="name"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <input
              type="email"
              id="email"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700"
              >Message</label
            >
            <textarea
              id="message"
              rows="4"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            ></textarea>
          </div>
          <button
            type="submit"
            class="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup></script>
