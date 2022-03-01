<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-3 bg-light"
    style="width: 280px"
  >
    <router-link
      to="/home"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
    >
      <svg class="bi me-2" width="40" height="32">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-4">LC Boutique</span>
    </router-link>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li>
        <router-link to="/dashboard" class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"></svg>
          Dashboard
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/cart" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"></svg>
          Cart
        </router-link>
      </li>

      <li>
        <router-link to="/orders" class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"></svg>
          Orders
        </router-link>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#grid"></use>
          </svg>
          Products
        </a>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <router-link
        to="/user"
        class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
        id="dropdownUser2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <p>Manicia Theron</p>
      </router-link>
      <ul
        class="dropdown-menu text-small shadow"
        aria-labelledby="dropdownUser2"
      >
        <li>
          <router-link class="dropdown-item" to="/settings"
            >Settings</router-link
          >
        </li>
        <li>
          <router-link class="dropdown-item" to="/profile">Profile</router-link>
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li>
          <router-link class="dropdown-item" :to="{ name: 'Login' }"
            >Sign in</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
element.style {
  width: 280px;
}
.bg-light {
  background-color: #f8f9fa !important;
}
.p-3 {
  padding: 1rem !important;
}
</style>
