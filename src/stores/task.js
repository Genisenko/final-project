import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./user";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
      console.log("fetchTasks", this.tasks);
      return this.tasks;
    },
    // funcion para add task
    async newTask(title, description) {
      console.log(useUserStore().user);
      const { data, error } = await supabase.from("tasks").insert([
        {
          user_id: useUserStore().user.id,
          title: title,
          is_complete: false,
          description: description,
        },
      ]);
    },

    // función para borrar task
    async deleteTask(id) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: id });
    },

    //función para togglear booleano
    async toggleTask(boolean, id) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ is_complete: boolean })
        .match({ id: id });
    },

    //función para editar task

    async editTask(title, description, id) {
      const { data, error } = await supabase
        .from("tasks")
        .update({
          title: title,
          description: description,
        })
        .match({ id: id });
    },
  },
});
