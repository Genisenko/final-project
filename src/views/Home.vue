<template>
<div class="bg-[url('https://st.depositphotos.com/1637056/2958/i/450/depositphotos_29589345-stock-photo-open-blank-notebook-on-grunge.jpg')] bg-center bg-fixed bg-no-repeat bg-cover min-h-screen">
  <div>
    <Nav />
  </div>
  <div>
    <NewTask @newTask="newTask" />
  </div>

    <TaskItem 
    v-for="task in tasks" 
    :key="task.id"
    :task="task"
    @deleteTaskChild="deleteTaskParent"
    @toggleTaskChild="toggleTaskParent"
    @editTaskChild="editTaskParent"
    />

  <div>
    <Footer />
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useTaskStore } from "../stores/task.js";
import Nav from "../components/Nav.vue";
import NewTask from "../components/NewTask.vue";
import Footer from "../components/Footer.vue";
import TaskItem from "../components/TaskItem.vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

// useUserStore().fetchUser() // Con esta función mantenemos la sesión iniciada aún refrescando la página
// console.log(useUserStore().user)

// const redirect = useRouter()

// const checkLogin = async () => {
//   const user = await useUserStore().fetchUser() 
//   if(user === null){
//     redirect.push({path: "/auth/login"})
//   }
// }


const errorMsg = ref(null);
const tasks = ref([]);

//Guardamos el useTaskStore dentro de una constante para poder usarlo dentro del archivo SFC (Single File Component)
const taskStore = useTaskStore();

//Usamos el hook de vida "onMounted" para acceder a las tareas de supabase antes de que se pinten los componentes
// onMounted(() => {
//   taskStore.fetchTasks();
// });
 
 const refresh = async () => {
  tasks.value = await taskStore.fetchTasks();
  tasks.value.forEach((task) => console.log(task)
  )
 };
 refresh();
 

//Función que se encarga de borrar la tarea de supabase
const deleteTaskParent = async (task) => {
  await taskStore.deleteTask(task.id);
  refresh();
};

//Función que se encarga de togglear el boobleano de is complete
const toggleTaskParent = async (task) => {
  const toggled = !task.is_complete
  const toggleId = task.id
  await taskStore.toggleTask(toggled, toggleId)
  taskStore.fetchTasks();
  refresh();
};

//Función que se encarga de editar la tarea de supabase
const editTaskParent = async (task) => {
  const newTitle = task.newTitle;
  const newDescription = task.newDescription;
  const taskId = task.taskId.id;
  await taskStore.editTask(newTitle, newDescription, taskId);
  refresh();
};



const newTask = async (newTaskTitle, newTaskDescription) => {
  await taskStore.newTask(newTaskTitle, newTaskDescription)
  refresh();
};
</script>

<style></style>

<!-- 
**Hints**
1. ref() is used here!
2. (NewTask, TaskItem, Footer, Nav) components are used here! 
3. Tasks are going to be contained in an array here!
4. An async function is needed to get all of the tasks stored within the supabase database, this async function's body will contain the tasks value which be use to store the fetchTasks method which lives inside the userTaskStore. This function needs to be called within the setUp script in order to run within the first instance of this component lifecycle.
5. NewTask component will receive a customEvent on this instance of the homeView that will fire the add-to-do function
6. add-to-do function will receive 2 params/arguments that will tak a taskTitle and a taskDescription and the body of this async function will call the taskStore that calls the addTask function from the store that pushes the info of the task to the backEnd. This is possible by passing the 2 param/arguments that will be passed by the user from the inputs within the NewTask Component. 
7. TaskItem component will loop through the tasks-array that will print an individual instance of an individual TaskItem component. TaskItem will receive 3 customEvents on this instance of the homeView. 1 customEvent for toggling the task to show either a text or an icon to display if the task is completed or not completed. 1 customEevent for removing/deleting the task out of the array. 1 customEvent for editing the task title and description. This function needs to call the function mentioned on hint4.
7.1-customEvent will fire an async function that will take in 1 param/argument. On the body of this function the param/argument will be used to define 2 constants. 1 of this constants will take care of setting the boolean value to the opposite of the value that checks wether this task is_complete. 1 of this constants will take of calling the id of this specific task in order to call the right id. 
7.2-customEvent will fire an asynf function that will take in 1 param/argument. This async function's body will be used to call the deleteTaskmethod which will take the param/argument's id in order to delete the task. This function needs to call the function mentioned on hint4. 
7.3-customEvent will fire an async function that will take in 1 param/argument. this async function's body will be used to take in 2 constants. 1 constant will take in the param/argument newValue. 1 constant will be used to get the param/argument oldValue id. These 2 constants will be sent to the backend via the useTaskStore which holds an editTask method. This function needs to call the function mentioned on hint4.
-->
