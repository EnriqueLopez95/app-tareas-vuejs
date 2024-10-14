// Componente para cada tarea individual

<template>
  <div class="bg-white p-4 rounded shadow hover:shadow-lg transition duration-300">
    <h3 class="font-semibold text-lg">{{ task.title }}</h3> <!-- Usando 'task' aquí -->
    <p class="text-gray-600">{{ task.description }}</p> <!-- Usando 'task' aquí -->
    <div class="mt-2">
      <button @click="$emit('edit', task)" class="btn btn-secondary">Editar</button>
      <button @click="$emit('delete', task.id)" class="btn btn-danger">Eliminar</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TaskItem',
  props: {
    task: { 
      type: Object, 
      required: true  // Asegúrate de que la propiedad es requerida
    },
  },
};
</script>

<style scoped>
</style>
