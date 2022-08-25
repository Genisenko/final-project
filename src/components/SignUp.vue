<template>
    <div>
    <a href="/auth#">
      <img src="	https://res.cloudinary.com/dnsnkrcru/image/upload/v1648297523/taskApp/imgs/logo1_ryvwid.svg" alt="">
    </a>
    <h2>Sing Up to TaskApp</h2>
    <h3>Start Organizing your tasks todays!</h3>
  </div>
  <!-- Catch Error -->
  <div v-if="messageError"> <!--Priorizar error formato email-->
    <p>{{messageError}}</p>
  </div>

  <div>
    <form @submit.prevent="singUp" action="Submit">

      <label for="email">Email: </label>
      <input type="email" 
      name="email"
      v-model="email" 
      id="email" 
      placeholder="Enter your email">

      <br><br>

      <label for="password">Password: </label>
      <input type="password" 
      name="password"
      v-model="password" 
      id="password" 
      placeholder="Enter your password">

      <br><br>

      <label for="confirmPassword">Confirm Your Password: </label>
      <input type="password" 
      name="confirmPassword" 
      v-model="confirmPassword"
      id="confirmPassword" 
      placeholder="Enter your password">

      <br><br>

      <button type="button" @click="signUp">Sign Up</button> 

  <div>
    <h4>Already have an account?</h4>
    <PersonalRouter :route="route" :buttonText="buttonText" />
    <br><br>
    <router-link to="login">Sign In (Madu)</router-link>
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
const route = "/auth/login";
const buttonText = "Sign In (IronHack)";

// // Input Fields
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

// // Error Message
const messageError = ref("");

// Show hide password variable

// Show hide confrimPassword variable

// Router to push user once SignedUp to Log In
const router = useRouter();                                                                                                                                                                                              
// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
const signUp = async () => {
  if(password.value === confirmPassword.value){
    try{
      const {error} = await supabase.auth.signUp({
        email:email.value,
        password: password.value,
      });
      if (error) throw error;
      router.push({path: 'login' })
      } 
      catch(error) {
      messageError.value = error.message;
      setTimeout(() => {
    messageError.value = null;
  }, 5000);
    }
    alert("Go to your email to verify it")
    return;
  }  
  messageError.value = "Error: Passwords doesn't match"
  setTimeout(() => {
    messageError.value = null;
  }, 5000);
}; 
</script>

<style></style>
