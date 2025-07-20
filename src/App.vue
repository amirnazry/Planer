<template>
  <div id="app-container">
    <header class="app-header">
      <Date/>
      <div class="status-section">
        <h1 id="status">حال روز: {{ todayStatus }}</h1>
        <button id="submit" @click="check">ثبت حال روز</button>
      </div>
      <Navbar/>
    </header>
    <main>
      <router-view/>
    </main>
    <Modal :show="show" @close="check" @status-submitted="handleStatus"/>
  </div>
</template>

<script>
import Modal from './components/Modal.vue';
import Navbar from './components/Navbar.vue';
import Date from './components/Date.vue';
export default {
  components: { Navbar,Modal,Date},
  data(){
    return{
      show : false,
      todayStatus : 'newStatus'
    }
  },
  methods:{
    check(){
      this.show = !this.show
    },
    handleStatus(newStatus) {
      this.todayStatus = newStatus
      localStorage.setItem('todayStatus', newStatus)
      
    }
  },
  mounted() {
    this.check()
   const saved = localStorage.getItem('todayStatus')
   if (saved) {
     this.todayStatus = saved
   }
  }
}
</script>

<style>
*{
  font-family: 'vazir';
}
body{
  background: #DDF6D2;
}
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #CAE8BD;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
}

.status-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

#status {
  font-size: 1.2em;
  margin: 0;
}

#submit {
  padding: 8px 15px;
  font-size: 14px;
  color: #fff;
  background: #4CAF50;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .app-header {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
