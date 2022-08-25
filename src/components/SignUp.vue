<template>
  <div class="bg-green-200 h-screen">
    <div>
    <a href="/auth#" class="flex justify-center">
      <!-- <img
      class="pt-10" 
      src="	https://res.cloudinary.com/dnsnkrcru/image/upload/v1648297523/taskApp/imgs/logo1_ryvwid.svg" 
      alt=""> -->
    </a>
    <h2 class="text-2xl font-bold py-4 flex justify-center">Sing Up to TaskApp</h2>
    <h3 class="text-lg text-[#758599] flex justify-center pb-4">Start Organizing your tasks todays!</h3>
  </div>
  <!-- Catch Error -->
  <div v-if="messageError"> <!--Priorizar error formato email-->
    <p>{{messageError}}</p>
  </div>

  <div class="ml-10 mt-5">
    <form class="flex flex-col gap-y-2" @submit.prevent="singUp" action="Submit">

      <label for="email" class="font-medium text-[#758599]/80">Email: </label>
      <input 
      class=" w-[60%] h-8 rounded-md shadow-lg bg-slate-100 mb-4"
      type="email" 
      name="email"
      v-model="email" 
      id="email" 
      placeholder="Enter your email">

      <label for="password" class="font-medium text-[#758599]/80">Password: </label>
      <input 
      class="w-[60%] h-8 rounded-md shadow-lg bg-slate-100 mb-4"
      type="password" 
      name="password"
      v-model="password" 
      id="password" 
      placeholder="Enter your password">

      <label class="font-medium text-[#758599]/80" for="confirmPassword">Confirm Your Password: </label>
      <input class=" w-[60%] h-8 rounded-md shadow-lg bg-slate-100 mb-4"
      type="password" 
      name="confirmPassword" 
      v-model="confirmPassword"
      id="confirmPassword" 
      placeholder="Enter your password">

      <button class="mt-4 py-2 px-6 rounded-sm self-start text-sm
    text-white bg-green-600 duration-200 border-solid
    border-2 border-transparent hover:border-green-600 hover:bg-white
    hover:text-green-600"
       type="button" @click="signUp">Sign Up</button> 

  <div>
    <h4 class="font-medium mt-6 mb-1 ">Already have an account?</h4>
    <PersonalRouter class="font-medium pd-8" :route="route" :buttonText="buttonText" />
    <br>
    <!-- <router-link to="login">Sign In (Madu)</router-link> -->
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
