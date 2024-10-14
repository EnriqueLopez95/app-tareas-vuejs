<template>
  <div class="flex-1 ml-64 p-4">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-semibold">Mis Tareas</h2>
      <button @click="openAddTaskModal" class="btn btn-primary">Agregar</button>
    </div>
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th>Título</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.title }}</td>
          <td>{{ task.description }}</td>
          <td>
            <button @click="openEditTaskModal(task)" class="btn btn-edit">Editar</button>
            <button @click="deleteTask(task.id)" class="btn btn-delete">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <TaskModal
      v-if="isModalOpen"
      :task="currentTask"
      :is-editing="isEditing"
      @save-task="handleSaveTask"
      @close="closeModal"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { db } from "../utils/firebase";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import TaskModal from "./TaskModal.vue";

export default defineComponent({
  components: { TaskModal },
  name: "TaskList",
  setup() {
    const tasks = ref([]);
    const isModalOpen = ref(false);
    const isEditing = ref(false);
    const currentTask = ref({ title: "", description: "" });

    // Obtener tareas de Firebase
    const fetchTasks = async () => {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      tasks.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    };

    // Abrir modal para agregar tarea
    const openAddTaskModal = () => {
      currentTask.value = { title: "", description: "" };
      isEditing.value = false;
      isModalOpen.value = true;
    };

    // Abrir modal para editar tarea
    const openEditTaskModal = (task) => {
      currentTask.value = { ...task };
      isEditing.value = true;
      isModalOpen.value = true;
    };

    // Guardar nueva tarea o actualizar tarea existente
    const handleSaveTask = async (task) => {
      if (isEditing.value) {
        const taskRef = doc(db, "tasks", task.id);
        await updateDoc(taskRef, {
          title: task.title,
          description: task.description,
        });
      } else {
        await addDoc(collection(db, "tasks"), task);
      }
      isModalOpen.value = false;
      fetchTasks();
    };

    // Eliminar tarea
    const deleteTask = async (id) => {
      await deleteDoc(doc(db, "tasks", id));
      fetchTasks();
    };

    // Cerrar modal
    const closeModal = () => {
      isModalOpen.value = false;
    };

    onMounted(fetchTasks);

    return {
      tasks,
      isModalOpen,
      isEditing,
      currentTask,
      openAddTaskModal,
      openEditTaskModal,
      handleSaveTask,
      deleteTask,
      closeModal,
    };
  },
});
</script>

<style scoped>
.table-auto {
  width: 100%;
  border-collapse: collapse;
}

.table-auto th,
.table-auto td {
  border: 1px solid #ddd;
  padding: 8px;
}

.btn {
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-edit {
  background-color: #ffc107;
  color: white;
}

.btn-delete {
  background-color: #dc3545;
  color: white;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
}

.close {
  cursor: pointer;
  float: right;
  font-size: 20px;
}
</style>
