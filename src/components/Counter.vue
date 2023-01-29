<template>
  <div v-if="time != null" class="counter flex flex-column flex-start flex-g-1">
    <h1 class="counter-title" v-html="title ? title : Rtime.title" />
    <div v-if="time > 0" class="counter-content-hero flex flex-g-2">
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
    <div v-else class="counter-content-hero">
      Sınav bitti. Tebrikler 🎉🎉
    </div>
    <div class="range">
      <span :style="'width:' + rangeWidth + '%' " />
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
      rangeWidth: null,
      interval: null
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
      this.rangeSettings();
    }
  },
  methods: {
    startCounter() {
      this.interval = setInterval(() => {
        console.log("working");
        if(this.time > 0){
          this.time--;
        }else{
          this.time = 0;
          clearInterval(this.interval);
          startConfetti();
        }
        this.secondsToDhms();
        this.rangeSettings();
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
      this.days = this.formatNumber(Math.floor(seconds / (3600 * 24)), true);
      this.hours = this.formatNumber(Math.floor((seconds % (3600 * 24)) / 3600));
      this.minutes = this.formatNumber(Math.floor((seconds % 3600) / 60));
      this.seconds = this.formatNumber(Math.floor(seconds % 60));
    },
    mktime(hour, minute, month, day, year) {
      return new Date(year, month - 1, day, hour, minute, 0).getTime() / 1000;
    },
    formatNumber(number, isDay = false){
      if(isDay){
        if(number <= 99){
          return (("00" + number).slice(-3));
        }else{
          return number;
        }
      }else{
        if(number <= 9){
          return (("0" + number).slice(-2));
        }else{
          return number;
        }
      }
    },
    rangeSettings(){
      this.rangeWidth = 100 - Math.round((Number(this.time)*100)/31556926);
    }
  },
};
</script>

<style>
.counter {
  width: 23.625rem;
}

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

.range{
  width: 100%;
  height: .5rem;
  background: #26292B;
  border-radius: .5rem;
  position: relative;
  overflow: hidden;
}

.range span{
  display: block;
  width: 0%;
  height: 100%;
  background:#B12028;
  transition: all .25s ease 0s;
}

.counter-content-hero {
  font-size: 1.5rem;
  font-weight: 600;
  color: #e5e5e5;
}
</style>
