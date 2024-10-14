<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="$emit('close')">&times;</span>
      <h2 class="modal-title">{{ isEditing ? 'Editar Tarea' : 'Agregar Nueva Tarea' }}</h2>
      <input type="text" v-model="localTask.title" placeholder="Título" class="input-title" />
      <textarea v-model="localTask.description" placeholder="Descripción" class="input-description"></textarea>
      <button @click="saveTask" class="btn-save">{{ isEditing ? 'Actualizar' : 'Guardar' }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "TaskModal",
  props: {
    isEditing: {
      type: Boolean,
      required: true,
    },
    task: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const localTask = ref({ ...props.task });

    // Sincronizar cuando cambia la tarea
    watch(
      () => props.task,
      (newTask) => {
        localTask.value = { ...newTask };
      },
      { immediate: true }
    );

    const saveTask = () => {
      emit("save-task", { ...localTask.value });
    };

    return {
      localTask,
      saveTask,
    };
  },
});
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 50; /* Asegúrate de que el modal esté por encima de otros elementos */
}

.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  width: 400px; /* Ancho ajustado */
  position: relative; /* Para posicionar el botón de cerrar */
}

.close {
  cursor: pointer;
  position: absolute; /* Para colocar el botón en la esquina superior derecha */
  top: 10px;
  right: 15px;
  font-size: 24px;
  color: #888;
  transition: color 0.3s;
}

.close:hover {
  color: #d9534f; /* Color al pasar el mouse sobre el botón de cerrar */
}

.modal-title {
  font-size: 20px;
  font-weight: bold;
  color: #333; /* Color del título */
  margin-bottom: 20px; /* Espaciado debajo del título */
  text-align: center; /* Centrar el texto */
}

.input-title,
.input-description {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border 0.3s;
}

.input-title:focus,
.input-description:focus {
  border-color: #007bff; /* Cambia el color del borde al enfocar */
  outline: none; /* Elimina el contorno por defecto */
}

.btn-save {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-save:hover {
  background-color: #0056b3; /* Color al pasar el mouse sobre el botón */
}
</style>
