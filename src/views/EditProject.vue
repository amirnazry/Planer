<template  dir="rtl">
    <div class="madars">
        <!-- <h1>ویرایش پروژه</h1> -->
        <form @submit.prevent="handleSubmit">
        <label>موضوع:</label>
        <input  v-model="title" type="text" required>
        <label>جزئیات:</label>
        <textarea  v-model="details"></textarea>
        <select v-model="day">
            <option value="one">روز اول</option>
            <option value="two">روز دوم</option>
            <option value="three">روز سوم</option>
        </select>
        <button>بروزرسانی پروژه</button>
    </form>
    </div>
</template>

<script>
export default {
    props : ['id'],
    data(){
        return{
            title : '',
            details : '',
            day : '',
            uri : 'http://localhost:3000/projects/' + this.id
        }
    },
    mounted(){
    fetch(this.uri)
        .then(res => res.json())
        .then(data => {
            this.title = data.title
            this.details = data.details
            this.day = data.day
        }).catch(err => console.log(err.message))
    },
methods:{
    handleSubmit(){
        fetch(this.uri,{
            method : 'PATCH',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({title : this.title , details : this.details, day : this.day})
        })
        .catch(err => console.log(err.message))
        this.$router.push('/')
     },
}}

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
</style>