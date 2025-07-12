<template>
  <div class="main-nav">
    <router-link :to="{name : 'Home'}">پروژه ها</router-link>
    <router-link :to="{name : 'AddProject'}">اضافه کردن پروژه</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.main-nav {
  text-align: center;
  margin: 0;
}

.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #657C6A;
  font-size: 18px;
}

a.router-link-active {
  border-bottom: 2px solid #B0DB9C;
  padding-bottom: 4px;
}

</style>