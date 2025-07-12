<template>
  <div class="date">
    امروز: {{ today }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      today: ''
    }
  },
  mounted() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour :'numeric',minute :'numeric',second : 'numeric' };
    this.today = now.toLocaleDateString('fa-IR', options); // تقویم شمسی
  }
}
</script>

<style>
.date {
  font-weight: bold;
  text-align: center;
  margin: 0;
  color: #4CAF50;
}


</style>