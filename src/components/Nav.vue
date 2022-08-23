
<template>
  <header class="flex flex-row mb-8 items-center gap-x-3">
    <nav class="flex flex-row">
      <div class="">
        <img class="" src="https://res.cloudinary.com/dnsnkrcru/image/upload/v1648481844/taskApp/imgs/logo-small_bh8xj2.svg" 
        alt="logo">
      </div>
      <div class="flex flex-row">
        <p>Welcome Back USER</p>
        <button @click="logout">Log Out</button>
      </div>
    </nav>
  </header>
</template>

<script setup >
import {supabase} from "../supabase"
import { useRouter } from "vue-router";

// Setup ref to router
const router = useRouter();

//constant to save a variable that will hold the use router method

// constant to save a variable that will get the user from store with a computed function imported from vue

// constant that calls user email from the useUSerStore

// constant that saves the user email and cleans out the @client from the user

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
const logout = async () => {
  console.log("User logged out")
  await supabase.auth.signOut();
  router.push({path: "auth/login"})
}
</script>
                                                                                                                                                                                                                          
<style>
</style>


