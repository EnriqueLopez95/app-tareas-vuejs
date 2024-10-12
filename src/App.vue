<template>
  <div class="flex items-center justify-center h-screen bg-gray-200">
    <div class="text-center p-6 bg-white shadow-lg rounded-lg">
      <h1 class="text-4xl font-bold text-blue-600">¡Tailwind CSS está funcionando!</h1>
      <p class="mt-4 text-gray-700">Esto es una prueba para verificar la configuración de Tailwind.</p>
      <button class="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Haz clic aquí
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<style scoped>
/* Aplicar la fuente Roboto */
body {
  font-family: 'Roboto', sans-serif; /* Aplicar Roboto a todo el cuerpo */
}

/* Puedes añadir estilos adicionales si lo necesitas */
</style>
