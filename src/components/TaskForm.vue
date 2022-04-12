<template>
  <div class="col-md-4 offset-md-4">
    <form @submit.prevent="saveTask()" class="card card-body">
      <h1 class="text-center h3 mb-3">Create Task</h1>
      <input 
	type='text' 
	placeholder="Write a title" 
	v-model="task.title"
	class="form-control mb-3"
	autofocus
      />
      <textarea 
	id='' 
	rows="3" 
	placeholder="write a description" 
	v-model="task.description"
	class="form-control mb-3"
      />
      <button class="btn btn-primary" :disabled="!task.title || !task.description">Save</button>
    </form>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import {Task} from '@/interfaces/Task'
  import {createTask} from '@/api/TaskService'
  export default defineComponent({
    data(){
      return{
	task:{} as Task
      }
    },
    methods:{
      async saveTask(){
	await createTask(this.task)
	this.$router.push({name: 'tasks'})
      }
    }
  })
</script>
