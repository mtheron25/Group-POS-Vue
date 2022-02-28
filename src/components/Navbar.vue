<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-5-strong">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Hello!</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script scoped>
export default {};
</script>

<style>
.navbar {
  padding: 5px;
  background-color: rgb(255, 255, 255);
  /* background: transparent !important; */
}

nav {
  justify-content: center;
}

/* .nav-link {
  color: white;
} */

.nav-item {
  font-weight: bolder;
  color: #6b8f71;
  padding: 2px;
  font-size: 20px;
  justify-content: flex-end;
}
</style>
