<template>
    <div class="filter-nav">
        <button @click="updatefilter('all')" :class="{active : current === 'all'}">دیدن همه</button>
        <button @click="updatefilter('completed')" :class="{active : current === 'completed'}">تکمیل شده ها</button>
        <button @click="updatefilter('ongiong')" :class="{active : current === 'ongiong'}">تکمیل نشده ها</button>
        
    </div>
</template>

<script>
export default {
    props : ['current'],
    methods:{
        updatefilter(by){
                this.$emit('filterchage', by)
        }
    }
}
</script>

<style>
.filter-nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filter-nav button {
  background: none;
  border: none;
  color: #657C6A;
  font-family: 'vazir';
  margin: 0 5px;
  cursor: pointer;
  padding: 7px 12px;
  border-radius: 10px;
}

.filter-nav button.active {
  background: #B0DB9C;
}

</style>