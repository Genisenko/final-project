<template>
  <div>
    <router-view />
  </div>
</template>



<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./stores/user.js";
import { ref } from "vue";
import {supabase} from "./supabase"
import store from "./stores/index"
import NavVue from "./components/Nav.vue";


const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

//Create data
const appReady = ref(null);

// //Check to see if user is already logged in
const users = supabase.auth.user();

// // If user does not exist, need to make app ready
 if (!users) {
  appReady.value = true;
 }

 // Runs when there is a auth state change
 // if user is logged in, this will fire
 supabase.auth.onAuthStateChange((_, session) => {
    console.log("User logged in")
    store.methods.setUser(session);
    appReady.value = true;
 })

// onMounted(async () => { //Pedir ayuda con esta función (58:22)
//   const appReady = ref(null);
//   try {
//     await userStore.fetchUser(); // here we call fetch user
//     if (!user.value) {
//       // redirect them to logout if the user is not there
//       appReady.value = true;
//       router.push({ path: "/auth/login" });
//     } else {
//       // continue to dashboard
//       // router.push({ path: "/" });
//     }
//   } catch (e) {
//     console.log(e);
//   }
// });
</script>



<style></style>
