<template>
  <div class="project" :class="{complete : project.complete}">
    <div class="actions">
        <h3 @click="this.showdetails = !this.showdetails">{{ project.title }}</h3>
        <div class="icons">
            
            <!-- <span class="material-symbols-outlined" @click="changeComplete" title="check">check</span> -->
            <img src="../assets/icons8-check-48 (1).png" width="30px" @click="changeComplete" title="check">

            <!-- <span class="material-symbols-outlined" @click="remove()" title="delete">delete</span> -->
            <img src="../assets/icons8-delete-32.png" width="25px" @click="remove()" title="delete">

            <router-link :to="{name : 'EditProject', params :{id: project.id}}">
            <!-- <span class="material-symbols-outlined" title="edit">edit</span> -->
            <img src="../assets/icons8-edit-50.png" width="20px" title="edit">
            </router-link>

        </div>
    </div>
    <div class="details" v-if="showdetails">
        <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>

export default {
props :["project"],
data(){
    return{
    showdetails : false,
    uri : 'http://localhost:3000/projects/' + this.project.id
    }
},
methods:{
     remove(){
        fetch(this.uri, {method : 'DELETE'})
        .then(() => this.$emit('delete', this.project.id))
        .catch(err => console.log(err.message))
     },
     changeComplete(){
        fetch(this.uri,{
            method : 'PATCH',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({complete : !this.project.complete})
        })
        .then(() => this.$emit('complete', this.project.id))
        .catch(err => console.log(err.message))
     }
     
}}
</script>

<style>
.project {
  margin: 10px auto;
  background: rgb(225, 255, 225);
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  border-left: 4px solid #DA6C6C;
  min-width: 250px;
  max-width: 500px;
  transition: all 0.3s ease;
}

.project.complete {
  border-left-color: #B0DB9C;
}

.project h3 {
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icons img {
  margin-left: 15px;
  transition: transform 0.2s ease;
}

.icons img:hover {
  cursor: pointer;
  transform: scale(1.2);
}

.icons img:active {
  transform: scale(0.95);
}

</style>
