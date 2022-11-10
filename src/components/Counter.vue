<template>
  <div class="counter flex flex-column flex-start flex-g-1">
    <h1 class="counter-title" v-text="title ? title : null"/>
    <div class="counter-content-hero flex flex-g-2">
      <span class="counter-content flex flex-column flex-start">
        <span class="counter-int" v-text="days"/>
        <span class="counter-type">Gün</span>
      </span>
      <span class="counter-content flex flex-column flex-start">
        <span class="counter-int" v-text="hours"/>
        <span class="counter-type">Saat</span>
      </span>
      <span class="counter-content flex flex-column flex-start">
        <span class="counter-int" v-text="minutes"/>
        <span class="counter-type">Dakika</span>
      </span>
      <span class="counter-content flex flex-column flex-start">
        <span class="counter-int" v-text="seconds"/>
        <span class="counter-type">Saniye</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
    props: ['title', 'name'],
    data(){
        return{
            time : null,
            days: null,
            hours: null,
            minutes: null,
            seconds: null
        }
    },
    mounted() {

        var data = {
        "session-id": localStorage.getItem("session"),
        };

        this.axios
        .post(this.$store.state.api + "?action=get-" + this.name + "-remaining-time", JSON.stringify(data))
        .then((response) => {
            this.time = response.data.remaining_time;
            this.secondsToDhms();
            setInterval(() => {
                this.time--;
                this.secondsToDhms();
            }, 1000);
        })
        .catch((e) => {
            console.log(e);
        });
    },
    methods: {
        secondsToDhms() {
            var seconds = Number(this.time);
            this.days = Math.floor(seconds / (3600*24));
            this.hours = Math.floor(seconds % (3600*24) / 3600);
            this.minutes = Math.floor(seconds % 3600 / 60);
            this.seconds = Math.floor(seconds % 60);
        }
    }
}
</script>

<style>

</style>