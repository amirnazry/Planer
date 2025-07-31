<template>
    <div class="madars">
    <form @submit.prevent="handleSubmit">
        <label>موضوع:</label>
        <input  v-model="title" type="text" required>
        <label>جزئیات:</label>
        <textarea  v-model="details"></textarea>
        <label>انتخاب روز:</label>
        <select v-model="day">
            <option value="one">روز اول</option>
            <option value="two">روز دوم</option>
            <option value="three">روز سوم</option>
        </select>
        <button>اضافه کردن پروژه</button>
    </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title : '',
            details : '',
            day : 'one',

        }
    },
    methods:{
        handleSubmit(){
             let project ={
                title : this.title,
                details : this.details,
                day : this.day,
                complete : false
             }
            fetch('http://localhost:3000/projects/',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(project)
            }).then(() => 
            this.$router.push('/'))

        }
    }  

}
</script>

<style>
.madars {
  display: flex;
  justify-content: center;
  padding: 20px;
}

form {
  background: #B0DB9C;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  margin: 0 auto;
}

label {
  display: block;
  color: #555;
  font-weight: bold;
  font-size: 14px;
  margin: 20px 0 10px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

input,
textarea,
select {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
  background: #DDF6D2;
}

textarea {
  height: 130px;
}

select {
  width: 4.5rem;
  text-align: center;
}

textarea {
  height: 150px;
  resize: vertical;
}

select {
  width: auto;
  min-width: 120px;
}
.madars button{
  display: block;
  background: #4CAF50;
  padding: 10px;
  border-radius: 10px;
  border: none;
  color: white;
  cursor: pointer;
  width: 70%;
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
}
.madars button:hover{
  background: #4c8f4e;
  transform: scale(1.1);
}
</style>
