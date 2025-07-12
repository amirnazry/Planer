<template>
  <div class="madar">
    <FilterNav @filterchage="current = $event" :current = "current"/>
  
    <div v-if="projects.length" class="container">

  <Days @filterchage="days = $event" :days = "days"/>
  
  <div class="project-list">
<div v-for="project in filteredProjects" :key="project.id">
      <SingelProject :project="project" @delete="handleDelete" @complete="handleComplete"/>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import SingelProject from '@/components/SingelProject.vue';
import AddProject from './AddProject.vue';
import FilterNav from '@/components/FilterNav.vue';
import Days from '@/components/Days.vue';

export default{
  name : 'Home',
  components:{SingelProject,AddProject,FilterNav,Days},
  data(){
    return{
    projects :[],
    current : 'all',
    days : 'one'
    }
  },
    mounted(){
        fetch('http://localhost:3000/projects')
        .then(res => res.json())
        .then(data => this.projects = data)
        .catch(err => console.log(err.message))
    },
    methods:{
      handleDelete(id){
      this.projects = this.projects.filter(item =>{
        return item.id !==id
      })},
      handleComplete(id){ 
        let p = this.projects.find(item => {
          return item.id === id
        })
        p.complete = !p.complete
      }
    },
    computed:{
      filteredProjects() {
  return this.projects
    .filter(project => {
      if (this.current === 'completed') return project.complete;
      if (this.current === 'ongiong') return !project.complete;
      return true; // برای current = all
    })
    .filter(project => project.day === this.days);
}


    }
}
</script>

<style>
.container {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.project-list {
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
}

</style>