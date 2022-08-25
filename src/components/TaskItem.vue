<template>
  <div
    class="mx-4 my-5 p-8 flex item-start flex-col bg-light-grey rounded-md shadow-lg bg-slate-200"
  >
    <h1 class="text-2xl">{{ task.title }}</h1>
    <p>{{ task.description }}</p>

    <div v-if="editDialoge">
      <h1>Hola Diego editador</h1>
      <input type="text" v-model="newTitle" />
      <input type="text" v-model="newDescription" />
      <button @click.prevent="editTask">save</button>
    </div>

    <button
      @click="deleteTask"
      class="mt-4 mr-4 py-2 px-2 rounded-sm self-start text-sm text-white bg-red-600 duration-200 border-solid border-2 border-transparent hover:border-red-600 hover:bg-white hover:text-red-600"
    >
      Delete Task
    </button>

    <button
      v-if="!task.is_complete"
      @click="toggleTask"
      class="mt-4 mr-4 py-2 px-2 rounded-sm self-start text-sm text-white bg-yellow-600 duration-200 border-solid border-2 border-transparent hover:border-yellow-600 hover:bg-white hover:text-yellow-600"
    >
      ❌ Unfinished Task
    </button>

    <button
      v-if="task.is_complete"
      @click="toggleTask"
      class="mt-4 mr-4 py-2 px-2 rounded-sm self-start text-sm text-white bg-blue-600 duration-200 border-solid border-2 border-transparent hover:border-blue-600 hover:bg-white hover:text-blue-600"
    >
      ☑️ Completed Task
    </button>

    <button
      @click="toggleDialog"
      class="mt-4 mr-4 py-2 px-2 rounded-sm self-start text-sm text-white bg-green-600 duration-200 border-solid border-2 border-transparent hover:border-green-600 hover:bg-white hover:text-green-600"
    >
      Edit Task
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits([
  "deleteTaskChild",
  "toggleTaskChild",
  "editTaskChild",
]);

const editDialoge = ref(false);
const newTitle = ref("");
const newDescription = ref("");
// const errorMsg //declarar errorMSg

const props = defineProps(["task"]);

const deleteTask = () => {
  emit("deleteTaskChild", props.task);
};

const toggleTask = () => {
  emit("toggleTaskChild", props.task);
};

const toggleDialog = () => {
  editDialoge.value = !editDialoge.value;
  newTitle.value = props.task.title;
  newDescription.value = props.task.description;
};

const editTask = () => {
  const newInfo = {
    taskId: props.task,
    newTitle: newTitle.value,
    newDescription: newDescription.value,
  };
  emit("editTaskChild", newInfo);
  newTitle.value = ""
  newDescription.value = ""
  editDialoge.value = false;
};
</script>

<style></style>

<!-- 
**Hints**
1. ref() or reactive() can be used here to store the following, think if you want to store them 
either individually or like an object, up to you.

2. Data properties need here are the following: a boolean to store a false**Important variable, 
a string to store an error, a string to store the value of the task that the user can edit, 
an initial false boolean to hide the inputFIeld used to edit the new task detail or 
details[this is in reference of the task title and the task description].

3. Store the custom emit events that will be used to call the functions of the homeView for editing, 
deleting and toggling the status[completed, not complted] of the taskItem.

4. Function to handle the error with the data properties used to control the error and the the 
boolean controlling the boolean empty variable.

5. Function to handle the edit dialogue where the inputField is displayed and the string used to 
store the value of the inputField will be used here to save the value as a prop on this function.

6. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event 
and the value that will be send via the prop to the parent component. This function can control 
the toggle completion of the task on the homeview.

7. Function to edit the task information that you decided that the user can edit. 
This function's body takes in a conditional that first checks if the value of the task 
[either title and description or just title] is empty which if true it runs the function used to handle 
the error on hint4. Else, the conditional sets the first mentioned boolean data property on hint2 back to 
its inital boolean value to hide the error message and repeat the same for the data property mentioned 4th 
on hint2; a constant that stores an object that holds the oldValue from the prop item and the value of the 
task coming from the data property mentioned 3rd on hint2; a custom event emit() that takes 2 parameters a 
name for the custom event and the value from the object used on this part of the conditional and lastly this 
part of the conditional sets the value of input field to an empty string to clear it from the ui. 
                                                                                                                                                                                                                
8. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and 
the value that will be send via the prop to the parent component. This function can control the removal 
of  the task on the homeview.
-->
