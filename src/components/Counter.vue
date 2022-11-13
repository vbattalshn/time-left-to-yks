<template>
  <div v-if="time" class="counter flex flex-column flex-start flex-g-1">
    <h1 class="counter-title" v-html="title ? title : Rtime.title" />
    <div class="counter-content-hero flex flex-g-2">
      <span class="counter-content flex flex-column flex-start">
        <span class="counter-int" v-text="days" />
        <span class="counter-type">Gün</span>
      </span>
      <span class="counter-content flex flex-column flex-start">
        <span class="counter-int" v-text="hours" />
        <span class="counter-type">Saat</span>
      </span>
      <span class="counter-content flex flex-column flex-start">
        <span class="counter-int" v-text="minutes" />
        <span class="counter-type">Dakika</span>
      </span>
      <span class="counter-content flex flex-column flex-start">
        <span class="counter-int" v-text="seconds" />
        <span class="counter-type">Saniye</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: { title: null, name },
  data() {
    return {
      time: null,
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
    };
  },
  computed: {
    Rtime() {
      return this.$store.state[this.name];
    },
  },
  mounted() {
    if(!this.Rtime){
      this.$router.push("/404");
    }else{
      this.calcTime();
      this.secondsToDhms();
      this.startCounter();
    }
  },
  methods: {
    startCounter() {
      setInterval(() => {
        this.time--;
        this.secondsToDhms();
      }, 1000);
    },
    calcTime() {
      this.time =
        this.mktime(
          this.Rtime.hour,
          this.Rtime.minute,
          this.Rtime.month,
          this.Rtime.day,
          this.Rtime.year
        ) - Math.round(new Date().getTime() / 1000);
    },
    secondsToDhms() {
      var seconds = Number(this.time);
      this.days = this.formatNumber(Math.floor(seconds / (3600 * 24)));
      this.hours = this.formatNumber(Math.floor((seconds % (3600 * 24)) / 3600));
      this.minutes = this.formatNumber(Math.floor((seconds % 3600) / 60));
      this.seconds = this.formatNumber(Math.floor(seconds % 60));
    },
    mktime(hour, minute, month, day, year) {
      return new Date(year, month - 1, day, hour, minute, 0).getTime() / 1000;
    },
    formatNumber(number){
      if(number <= 9){
        return (("0" + number).slice(-2));
      }else{
        return number;
      }
    },
  },
};
</script>

<style>
.counter-title {
  font-size: 1.25rem;
  font-weight: 400;
  color: #ccc;
}

.counter-int {
  font-size: 3rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: #e5e5e5;
}

.counter-type {
  font-weight: 300;
  font-size: 1rem;
  color: #ccc;
}

@media screen and (max-width: 300px) {
  .counter-content-hero {
    flex-direction: column;
  }
  .counters {
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
  }
  .counter-content-hero {
    align-items: flex-start;
  }
}
</style>
