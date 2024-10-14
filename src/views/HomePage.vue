<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 text-white">
    <!-- Encabezado -->
    <header class="text-center mb-10">
      <h1 class="text-5xl font-bold tracking-tight">¡Bienvenido a Mi Aplicación!</h1>
      <p class="mt-2 text-lg">Organiza tus tareas de manera fácil y rápida.</p>
    </header>

    <!-- Tarjeta Principal -->
    <div class="bg-white bg-opacity-0 backdrop-blur-md shadow-lg rounded-lg p-8 w-96 text-center">
      <h2 class="text-3xl font-semibold">Tu espacio de trabajo</h2>
      <p class="mt-4 text-gray-200">Empieza a gestionar tus tareas y mejorar tu productividad.</p>
      <div class="mt-6">
        <button class="bg-blue-600 text-white font-semibold rounded-lg py-2 px-4 transition duration-300 transform hover:scale-105 hover:bg-blue-700 w-full" @click="goToTasks">
          Comenzar
        </button>
      </div>
    </div>

    <!-- Pie de Página -->
    <footer class="absolute bottom-4 text-sm text-gray-200 mt-10">
      <p>© 2024. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const router = useRouter();
    
    const goToTasks = () => {
      router.push('/tasks');
    };

    return { goToTasks };
  }
});
</script>

<style scoped>
@import '@/assets/home.css'; /* Asegúrate de que esta ruta sea correcta */
html, body {
  height: 100%;
  margin: 0;
  background-color: transparent; /* O el color que desees */
}
</style>
