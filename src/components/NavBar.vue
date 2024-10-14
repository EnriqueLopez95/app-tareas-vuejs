<template>
  <nav class="navbar">
    <div class="container">
      <h1 class="title">Mi Aplicación de Tareas</h1>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/tasks" class="nav-link">Tareas</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.navbar {
  background-color: #1e3a8a; /* Color de fondo azul oscuro */
  padding: 1rem; /* Espaciado interno */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra para un efecto elevado */
}

.container {
  max-width: 1200px; /* Ancho máximo para la barra */
  margin: 0 auto; /* Centra la barra en la pantalla */
  display: flex; /* Usar flexbox para el contenido */
  justify-content: space-between; /* Espaciado entre los elementos */
  align-items: center; /* Centrar verticalmente */
}

.title {
  color: white; /* Color del texto */
  font-size: 1.5rem; /* Tamaño de la fuente */
  font-weight: bold; /* Hacer el texto más grueso */
}

.nav-links {
  display: flex; /* Coloca los enlaces en línea */
}

.nav-link {
  color: white; /* Color de texto para los enlaces */
  margin-left: 1rem; /* Espaciado a la izquierda */
  text-decoration: none; /* Quitar subrayado */
  transition: color 0.3s; /* Transición suave para el cambio de color */
}

.nav-link:hover {
  text-decoration: underline; /* Subrayar al pasar el mouse */
  color: #f3f4f6; /* Color claro al pasar el mouse */
}
</style>
