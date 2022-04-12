<template>
  <div class="col-md-4 offset-md-4">
    <form @submit.prevent="handleUpdate()" class="card card-body">
      <h1 class="text-center h3 mb-3">Task detail</h1>
      <input 
	type='text' 
	v-model="currentTask.title"
	class="form-control mb-3"
      />
      <textarea 
	rows="3" 
	v-model="currentTask.description"
	class="form-control mb-3"
      />
      <button class="btn btn-info">Update!</button>
    </form>
    <div class="text-center">
      <button @click="handleDelete()" class="btn btn-danger">Delete</button>
    </div>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
import {getTask} from '@/api/TaskService'
import {updateTask} from '@/api/TaskService'
import {deleteTask} from '@/api/TaskService'
import { Task } from '@/interfaces/Task'

export default defineComponent({
  data(){
    return{
      currentTask :{} as Task
    }
  },
  mounted(){
    if(typeof this.$route.params.id === 'string'){
      this.loadTask(this.$route.params.id)
    }
  },
  methods:{
    async loadTask(id: string){
      const res = await getTask(id)
      this.currentTask = res.data
    },
    async handleUpdate(){
      if(typeof this.$route.params.id === 'string'){
	await updateTask(this.$route.params.id,this.currentTask)
	this.$router.push({name: 'tasks'})
      }
    },
    async handleDelete(){
      if(typeof this.$route.params.id === 'string'){
	await deleteTask(this.$route.params.id)
	this.$router.push({name: 'tasks'})
      }
    }
  }
 })
</script>

<style>

</style>
