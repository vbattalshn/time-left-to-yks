<template>
  <div class="counter flex flex-column flex-start flex-g-1">
    <h1 class="counter-title" v-text="title ? title : null" />
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
  props: ["title", "name"],
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
    Rtime(){
        return this.$store.state[this.name]
    }
  },
  mounted() {
    console.log(this.mktime(this.Rtime.hour, this.Rtime.minute, this.Rtime.month, this.Rtime.day, this.Rtime.year));
    this.time = this.mktime(this.Rtime.hour, this.Rtime.minute, this.Rtime.month, this.Rtime.day, this.Rtime.year) - Math.round((new Date()).getTime()/1000);
    this.secondsToDhms();
    setInterval(() => {
        this.time--;
        this.secondsToDhms();
    }, 1000);

  },
  methods: {
    secondsToDhms() {
      var seconds = Number(this.time);
      this.days = Math.floor(seconds / (3600 * 24));
      this.hours = Math.floor((seconds % (3600 * 24)) / 3600);
      this.minutes = Math.floor((seconds % 3600) / 60);
      this.seconds = Math.floor(seconds % 60);
    },
    mktime(hour, minute, month, day, year) {
        return new Date(year, month - 1, day, hour, minute, 0).getTime() / 1000;
    },
  },
};
</script>

<style></style>
