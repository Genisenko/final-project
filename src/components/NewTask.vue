<template>
  <div class="max-w-screen-md mx-auto px-4 py-10 ">
    <!-- Status Message -->
    <div 
    v-if="statusMsg || errrorMsg" 
    class="mb-10 p-4 bg-light-grey rounded-md shadow-lg">
      <p class="text-at-light-green" >
      {{ statusMsg}}
      </p>
      <p class="text-red-500">{{errorMsg}}</p>
    </div>

    <!-- Create -->
    <div 
    class="p-8 flex item-start bg-light-grey rounded-md shadow-lg bg-slate-200"> 
    <!-- Form -->
      <form 
        class="flex flex-col gap-y-5 w-full">
        <h1 class="text-2xl text-at-light-green"> Add a new Task </h1>

        <!-- Task Title-->
        <div
        class="flex flex-col">
          <input type="text" required placeholder="Add a Task Title"
          class="p-2 text-gray-500 focus:outline-none" id="new-task-title"
          v-model="newTaskTitle"
          />
        </div>

        <!-- Task Description-->
        <div
        class="flex flex-col">
          <input type="text" required placeholder="Add a Task Description"
          class="p-2 text-gray-500 focus:outline-none" id="new-task-description"
          v-model="newTaskDescription"
          />
        </div>    
        
        <!-- Add Button -->
        <div
        class="flex flex-col">
        <button 
        type="button"
        class="mt-6 py-2 px-6 rounded-sm self-start text-sm
        text-white bg-green-600 duration-200 border-solid
        border-2 border-transparent hover:border-green-600 hover:bg-white
        hover:text-green-600">Add Task</button>
        </div> 
      </form>
    </div>
  </div>

</template>

<script setup>
import { ref } from "vue";
// constant to save a variable that define the custom event that will be emitted to the homeView
const newTask = ref("");
// constant to save a variable that holds the value of the title input field of the new task
const newTaskTitle = ref("");
// // constant to save a variable that holds the value of the description input field of the new task
const newTaskDescription = ref("");
// // constant to save a variable that holds an initial false boolean value for the errorMessage 
// // container that is conditionally displayed depending if the input field is empty
const remember = ref("");
// // const constant to save a variable that holds the value of the error message
const errorMsg = ref("");  
const statusMsg = ref(null);                                                                                                                                                                                             
// arrow function to call the form holding the task title and task description that uses 
// return {newTask, newTaskTitle, newTaskDescription, errorMsg, statusMsg}
//a conditional to first checks if the task title is empty, if true the error message is displayed 
// through the errorMessage container and sets a timeOut method that hides the error after some time. 
// Else, its emmits a custom event to the home view with the task title and task description; clears 
// the task title and task description input fields.

</script>

<style></style>
