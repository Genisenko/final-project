
<template>
  <header>
    <nav class="nav">
      <div class="div1">
        <img src="https://res.cloudinary.com/dnsnkrcru/image/upload/v1648481844/taskApp/imgs/logo-small_bh8xj2.svg" 
        alt="logo">
        <h1>TaskApp</h1>
      </div>
      <div class="div2">
        <p>Welcome Back USER</p>
        <button>Log Out</button>
      </div>
    </nav>
  </header>
</template>

<script setup >

//constant to save a variable that will hold the use router method

// constant to save a variable that will get the user from store with a computed function imported from vue

// constant that calls user email from the useUSerStore

// constant that saves the user email and cleans out the @client from the user

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.

</script>
                                                                                                                                                                                                                          
<style>
.div1{
  display: flex;
  flex-direction: row;
}

.div2{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.nav {
  display: flex;
  flex-direction: row;
  gap: 100px;
}
</style>


