<template>
  <form @submit.prevent="login" class="form neu-border">
    <h2 class="form-heading">Login</h2>
    <input
      class="form-input neu-border-inset"
      type="email"
      v-model="email"
      placeholder="Email"
    />
    <input
      class="form-input neu-border-inset"
      type="password"
      v-model="password"
      placeholder="Password"
    />
    <button type="submit" class="form-btn neu-border">Sign in</button>
    <!-- <div class="form-social-login">
      <button class="form-btn neu-border form-social-btn">
        <i class="fab fa-google"></i>
      </button>
      <button class="form-btn neu-border form-social-btn">
        <i class="fab fa-facebook-f"></i>
      </button>
    </div> -->

    <p>
      Not a member?
      <router-link :to="{ name: 'Register' }">Create an account</router-link>
    </p>
  </form>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      fetch("https://mmpos-group-api.herokuapp.com/users", {
        method: "PATCH",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          localStorage.setItem("jwt", json.jwt);
          alert("User logged in");
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style>
body {
  background-color: #ffd3ba;
}
.neu-border {
  border-radius: 30px;
  /* background: transparent !important; */
  /* box-shadow: 8px 8px 15px #e4e4e4, -8px -8px 15px #ffffff; */
}
.neu-border-inset {
  border-radius: 30px;
  /* background: transparent !important; */
  /* box-shadow: inset 8px 8px 15px #e4e4e4, inset -8px -8px 15px #ffffff; */
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 20px;
  width: 100%;
  margin-inline: auto;
  max-width: 600px;
  margin-top: 200px;
  /* background: transparent !important; */
}

.form-heading {
  text-align: center;
  text-transform: uppercase;
}

.form-input,
.form-btn {
  border: none;
  outline: none;
  padding: 20px;
}

.form-btn {
  cursor: pointer;
  transition: all 0.1s linear;
}

.form-btn:hover {
  transform: scale(1.05);
}

.form-social-login {
  display: flex;
  justify-content: space-between;
}

.form-social-btn {
  width: 45%;
  color: #333;
}
</style>
