<template>
  <div>
    <NavBar />
    <Sidebar />
    <TaskList />
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue';
import Sidebar from '@/components/SideBar.vue';
import TaskList from '@/components/TaskList.vue';

export default {
  name: 'TasksPage',
  components: {
    NavBar,
    Sidebar,
    TaskList,
  },
};
</script>

<style scoped>
</style>
