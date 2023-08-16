<template>
  <h1 class="app__title">My Portfolio</h1>

  <div class="router">
    <router-link class="router__link_about" to="/about">About Me</router-link>
    <router-link class="router__link_projects" to="/project">My Projects</router-link>
  </div>
  <router-view></router-view>
</template>
  
<script>

</script>



<style >
.app__title {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  margin: 20px;
}

.router {
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.router__link_about,
.router__link_projects {

  display: flex;
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background-color: #448fdb;
  color: #333;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s ease;
}

.router__link_about:hover,
.router__link_projects:hover {
  background-color: #1ce91c;
}
</style>
  
