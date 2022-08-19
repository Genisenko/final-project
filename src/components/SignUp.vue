<template>
    <div>
    <a href="/auth#">
      <img src="	https://res.cloudinary.com/dnsnkrcru/image/upload/v1648297523/taskApp/imgs/logo1_ryvwid.svg" alt="">
    </a>
    <h2>Sing Up to TaskApp</h2>
    <h3>Start Organizing your tasks todays!</h3>
  </div>

  <div>
    <form action="Submit">

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

      <label for="password">Confirm Your Password: </label>
      <input type="password" 
      name="password2" 
      id="password2" 
      placeholder="Enter your password">

      <br><br>

      <button>Sign In</button> 

  <div>
    <h4>Already have an account?</h4>
    <PersonalRouter :route="route" :buttonText="buttonText" />
    <br><br>
    <router-link to="login">Sign In (Madu)</router-link>
  </div>
    </form>
    
  </div>
  <p>Good Music, Patience and a lot effort</p>
  <p>Keep calm and code on!</p>
</template>

<script setup>
import PersonalRouter from "./PersonalRouter.vue";

// Route Variables
const route = "/auth/login";
const buttonText = "Sign In (IronHack)";

// Input Fields

// Error Message

// Show hide password variable

// Show hide confrimPassword variable

// Router to push user once SignedUp to Log In
                                                                                                                                                                                                    
// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
</script>

<style></style>
