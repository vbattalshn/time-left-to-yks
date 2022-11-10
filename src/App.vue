<template>
  <router-view />
  <Footer />
</template>

<script>
import Footer from "./components/Footer"

export default {
    components: {Footer}
};

</script>


<style>
@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap);

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-family: Rubik, sans-serif;
}

*,
:after,
:before {
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  html {
    font-size: 15px;
  }
}

@media screen and (max-width: 465px) {
  html {
    font-size: 14px;
  }
}

body {
  min-width: 100%;
  min-height: 100vh;
  background-color: #212325;
}

.counters {
  width: 100%;
  height: 100vh;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.flex-g-1 {
  gap: 1rem;
}

.flex-g-2 {
  gap: 2rem;
}

.flex-start {
  align-items: flex-start;
}

.counter-title {
  font-size: 1.25rem;
  font-weight: 400;
  color: #ccc;
}

.counter-int {
  font-size: 3rem;
  font-weight: 600;
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
