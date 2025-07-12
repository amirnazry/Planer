<template>
    <div class="bacdrop" v-if="show" @click.self="closeModal"  >
        <div class="modal">
            <div class="status">
                
            <label>حال روز:</label>
            <select v-model="status" >
                <option value="😍">😍</option>
                <option value="😑">😑</option>
                <option value="😢">😢</option>
            </select>
            <h1>{{ status }}</h1>
            <button @click="closeModal">ثبت</button>
        </div>          
    </div>
    
</div>
</template>


<script>
export default {
    props : [ "show"],
    emits: ["close",'status-submitted'],
    data(){
        return{
            status : '😍'
        }
    },
    async mounted(){
        const response = await fetch('http://localhost:3000/status')
        const data = await response.json()
        this.status = data.status
        // this.date = data.date 
    }
    ,methods:{ 
    closeModal(){
        fetch('http://localhost:3000/status',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({status : this.status})})
            .then(() => {
                this.$emit('close' )
                this.$emit('status-submitted', this.status)})
                

            .catch(err => {
                console.error('خطا در ذخیره حال روز:', err.message);
                alert('ثبت حال روز با خطا مواجه شد!');
                    });
    }
    
}
}
</script>


<style>
.bacdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 400px;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.status {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

select {
  background: #f0f4f8;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  width: 120px;
}

.modal button {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.modal button:hover {
  background: #45a049;
}

</style>