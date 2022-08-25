<template>
<div>
  <div>
    <a href="/auth#" class="flex justify-center">
      
    </a>
    <h2 class="text-2xl font-bold py-4 flex justify-center">Log In to TaskApp</h2>
    <h3 class="text-lg text-[#758599] flex justify-center pb-4">Start Organizing your tasks todays!</h3>
  </div>
    <div v-if="errorMsg"> <!--Priorizar error formato email-->
    <p>{{errorMsg}}</p>
  </div>

  <div class="ml-10 mt-5">
    <form class="flex flex-col gap-y-2" @submit.prevent="singIn" action="Submit">
    <label for="email" class="font-medium text-[#758599]/80">Email: </label>
    <input
      class=" w-[60%] h-8 rounded-md shadow-lg bg-slate-100 mb-6"
      type="email"
      name="email"
      v-model="email"
      placeholder="Enter your email"
    />

    <label for="password" class="font-medium text-[#758599]/80">Password: </label>
    <input
      class=" w-[60%] h-8 rounded-md shadow-lg bg-slate-100 mb-6"
      type="password"
      name="password"
      v-model="password"
      id="password"
      placeholder="Enter your password"
    />

    <button 
    class="mt-6 py-2 px-6 rounded-sm self-start text-sm
    text-white bg-green-600 duration-200 border-solid
    border-2 border-transparent hover:border-green-600 hover:bg-white
    hover:text-green-600"
    type="button" @click="signIn">Sign In</button>

    <div>
      <h4 class="font-medium">Don't have an account yet?</h4>
      <PersonalRouter :route="route" :buttonText="buttonText" />
      <br /><br />
      <router-link to="sign-up">Sing Up (Madu)</router-link>
    </div>
  </form>
  </div>
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
    // const {error} = await supabase.auth.signIn({
    //   email: email.value, 
    //   password: password.value,
    // });
    // if (error) throw error;
    useUserStore().signIn(email.value, password.value)
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
