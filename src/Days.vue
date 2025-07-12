<template>
  <div class="days">
        <button @click="updatefilter('one')" :class="{active : days === 'one'}">روز اول</button>
        <button @click="updatefilter('two')" :class="{active : days === 'two'}">روز دوم</button>
        <button @click="updatefilter('three')" :class="{active : days === 'three'}">روز سوم</button>
        <!-- <button @click="updatefilter('four')" :class="{active : days === 'four'}">سه شنبه</button>
        <button @click="updatefilter('five')" :class="{active : days === 'five'}">چهار شنبه</button>
        <button @click="updatefilter('six')" :class="{active : days === 'six'}">پنجشنبه</button>
        <button @click="updatefilter('seven')" :class="{active : days === 'seven'}">جمعه</button> -->
  </div>
</template>

<script>
export default {
    props : ['days'],
    methods:{
        updatefilter(by){
                this.$emit('filterchage', by)
        }
    }
}
</script>

<style>
.days {
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 120px;
}

.days button {
  display: block;
  background: none;
  border: none;
  color: #657C6A;
  font-family: 'vazir';
  margin: 5px;
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;
}

.days button.active {
  background: #B0DB9C;
}

@media (max-width: 768px) {
  .days {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
  }
}

</style>