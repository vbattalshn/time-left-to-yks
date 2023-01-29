<template>
  <div class="heroPage flex flex-column flex-g-1 page404">
    <span class="title-404 glitch">404</span>
    <p>
      Page not found. Turn
      <router-link to="/">home</router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>

.glitch {
  color: #e5e5e5;
  font-weight: 800;
  position: relative;
  font-size: 6rem;
  padding: 30px;
}

.glitch::before,
.glitch::after {
  padding: 30px;
  color: #e5e5e5;
  content: "404";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #212325;
  overflow: hidden;
  top: 0;
}

.glitch::before {
  left: 3px;
  text-shadow: -2px 0 red;
  animation-name: glitch-animation-1;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: reverse-alternate;
}
.glitch::after {
  left: -3px;
  text-shadow: -2px 0 Blue;
  animation-name: glitch-animation-2;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: reverse-alternate;
}

@keyframes glitch-animation-1 {
  0% {
    clip: rect(74px, 350px, 96px, 30px);
  }
  10% {
    clip: rect(36px, 350px, 125px, 30px);
  }
  20% {
    clip: rect(141px, 350px, 113px, 30px);
  }
  30% {
    clip: rect(30px, 350px, 133px, 30px);
  }
  40% {
    clip: rect(105px, 350px, 5px, 30px);
  }
  50% {
    clip: rect(85px, 350px, 105px, 30px);
  }
  60% {
    clip: rect(60px, 350px, 106px, 30px);
  }
  70% {
    clip: rect(101px, 350px, 97px, 30px);
  }
  80% {
    clip: rect(71px, 350px, 71px, 30px);
  }
  90% {
    clip: rect(149px, 350px, 43px, 30px);
  }
  100% {
    clip: rect(128px, 350px, 149px, 30px);
  }
}

@keyframes glitch-animation-2 {
  0% {
    clip: rect(36px, 350px, 61px, 30px);
  }
  10% {
    clip: rect(46px, 350px, 29px, 30px);
  }
  20% {
    clip: rect(19px, 350px, 87px, 30px);
  }
  30% {
    clip: rect(125px, 350px, 55px, 30px);
  }
  40% {
    clip: rect(134px, 350px, 107px, 30px);
  }
  50% {
    clip: rect(118px, 350px, 39px, 30px);
  }
  60% {
    clip: rect(129px, 350px, 131px, 30px);
  }
  70% {
    clip: rect(74px, 350px, 141px, 30px);
  }
  80% {
    clip: rect(132px, 350px, 42px, 30px);
  }
  90% {
    clip: rect(93px, 350px, 98px, 30px);
  }
  100% {
    clip: rect(79px, 350px, 91px, 30px);
  }
}

</style>
