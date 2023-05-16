<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MY PROFILE | Nova Siska Nurfadilah</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div class="mx-auto"></div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><router-link to="/" style="color: black;">Home</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><router-link to="/about" style="color: black;">About</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><router-link to="/portofolio" style="color: black;">Portofolio</router-link></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>


  <router-view />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>

.navbar{
  background: dodgerblue;
}
.navbar-brand{
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 20px;
  text-decoration: none;
  color: black;
}

</style>
