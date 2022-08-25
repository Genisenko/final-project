<template>
  <div class="max-w-screen-md mx-auto px-4 py-10 ">

    <!-- Create -->
    <div 
    class="p-8 flex item-start bg-light-grey rounded-md shadow-lg bg-slate-200"> 
    <!-- Form -->
      <form 
        class="flex flex-col gap-y-5 w-full">
        <h1 class="text-2xl"> Add a new Task </h1>

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
        type="button" @click="newTask"
        class="mt-6 py-2 px-6 rounded-sm self-start text-sm
        text-white bg-[#03543F] duration-200 border-solid
        border-2 border-transparent hover:border-[#03543F] hover:bg-white
        hover:text-[#03543F]">Add Task</button>
        </div> 
      </form>
    </div>
  </div>

</template>

<script setup>
import { ref } from "vue";
// constant to save a variable that define the custom event that will be emitted to the homeView
const emit = defineEmits(['newTask']);
// constant to save a variable that holds the value of the title input field of the new task
const newTaskTitle = ref("");
// // constant to save a variable that holds the value of the description input field of the new task
const newTaskDescription = ref("");
// // constant to save a variable that holds an initial false boolean value for the errorMessage 
const errorMsgContainer = ref(false);
// // container that is conditionally displayed depending if the input field is empty

// // const constant to save a variable that holds the value of the error message
const errorMsg = ref("");                                                                                                                                                                                             
// arrow function to call the form holding the task title and task description that uses 
//a conditional to first checks if the task title is empty, if true the error message is displayed 
// through the errorMessage container and sets a timeOut method that hides the error after some time. 
// Else, its emmits a custom event to the home view with the task title and task description; clears 
// the task title and task description input fields.
//  const newTask = async () => {
//   console.log('newTask function working')
//   if (newTaskTitle.value) {
//     emit("newTask", newTaskTitle.value, newTaskDescription.value);
//     newTaskTitle.value = "";
//     newTaskDescription.value = "";
//   }
//   else {
//     errorMsg.value = 'Error: You must to add a Title!'
//     errorMsgContainer.value = true;
//     setTimeout(() => {
//       errorMsg.value = null;
//       errorMsgContainer.value = false;
//     }, 5000);
//   }
//  };

const newTask = () => {
  if (newTaskTitle.value === "") {
    errorMsg.value = 'Error: You must to add a Title!'
    errorMsgContainer.value = true;
    setTimeout(() => {
      errorMsg.value = null;
      errorMsgContainer.value = false;
    }, 5000);
  }
  else {
    errorMsgContainer.value = false;
    emit("newTask", newTaskTitle.value, newTaskDescription.value);
    newTaskTitle.value = "";
    newTaskDescription.value = "";
  }
};

</script>

<style></style>
