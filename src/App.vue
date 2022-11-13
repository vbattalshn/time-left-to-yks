<template>
  <Loading v-if="!isLoading" :classes="classes" />
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import "./style.css";

export default {
  components: { Footer, Header, Loading },
  data(){
    return{
      isLoading: false,
      classes: null
    }
  },
  mounted(){
    window.addEventListener("load", () => {
      this.classes = "close"
      setTimeout(() => {      
        this.isLoading = true
      }, 250);
    })
  }
};
</script>
