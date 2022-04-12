<template>
  <ul class="list-group">
    <li 
      class="list-group-item list-group-item-action"
      style="cursor:pointer;"
      v-for="(task,index) in tasks" 
      :key="index" 
      @click="this.$router.push(`/tasks/${task._id}`)"
    >
      {{index + 1}}.
      {{task.title}} - {{task.done}}
    </li>
  </ul>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { getTasks } from '@/api/TaskService'
import { Task } from '@/interfaces/Task'

export default defineComponent({
    data(){
      return{
	tasks:[] as Task[]
      }
    },
  mounted(){
    this.loadTask()
  },
  methods:{
    async loadTask(){
      const res = await getTasks()
      this.tasks = res.data
    }
  }
})
</script>

<style>

</style>
