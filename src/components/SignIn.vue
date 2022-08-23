<template>
  <div>
    <a href="/auth#">
      <img
        src="	https://res.cloudinary.com/dnsnkrcru/image/upload/v1648297523/taskApp/imgs/logo1_ryvwid.svg"
        alt=""
      />
    </a>
    <h2>Log In to TaskApp</h2>
    <h3>Start Organizing your tasks todays!</h3>
  </div>
    <div v-if="errorMsg"> <!--Priorizar error formato email-->
    <p>{{errorMsg}}</p>
  </div>

  <div>
    <form @submit.prevent="singIn" action="Submit">
    <label for="email">Email: </label>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="Enter your email"
    />
    <br /><br />

    <label for="password">Password: </label>
    <input
      type="password"
      name="password"
      v-model="password"
      id="password"
      placeholder="Enter your password"
    />
    <br /><br />

    <button 
    class="mt-6 py-2 px-6 rounded-sm self-start text-sm
    text-white bg-green-600 duration-200 border-solid
    border-2 border-transparent hover:border-green-600 hover:bg-white
    hover:text-green-600"
    type="button" @click="signIn">Sign In</button>

    <div>
      <h4>Don't have an account yet?</h4>
      <PersonalRouter :route="route" :buttonText="buttonText" />
      <br /><br />
      <router-link to="sign-up">Sing Up (Madu)</router-link>
    </div>
  </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";


// Route Variables
const route = "/auth/sign-up";
const buttonText = "Sign Up (IronHack)";

// Input Fields
const email = ref("");
const password = ref("");

// Error Message
const errorMsg = ref("");

//Show hide password variables
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
const hidePassword = ref(true);

// Router to push user once SignedIn to the HomeView
const redirect = useRouter();

// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
// calls the user store and send the users info to backend to logIn
    const {error} = await supabase.auth.signIn({
      email: email.value, 
      password: password.value,
    });
    if (error) throw error;
    // redirects user to the homeView
    redirect.push({ path: "/" });
  } catch (error) {
    // displays error message
    errorMsg.value = `Error: ${error.message}`;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style>
.wu-text {
  color: black;
}

.form {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}
.input {
  color: black;
  margin-bottom: 1rem;
}
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
