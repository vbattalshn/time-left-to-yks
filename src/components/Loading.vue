<template>
  <div class="loading flex" :class="classes">
    <span class="loading-logo">
      <svg
        width="250"
        height="250"
        viewBox="0 0 250 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M145.25 62.5H104.75C81.2502 62.5 79.4377 83.625 92.1252 95.125L157.875 154.875C170.562 166.375 168.75 187.5 145.25 187.5H104.75C81.2502 187.5 79.4377 166.375 92.1252 154.875L157.875 95.125C170.562 83.625 168.75 62.5 145.25 62.5Z"
          stroke="currentColor"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
    props: ['classes']
};
</script>

<style>
.loading {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    background: #212325;
    z-index: 900;
    transition: all .25s ease 0s;
}

.loading-logo{
    width: 6rem;
    height: 6rem;
    display: block;
    animation: LoadingAnim 2s infinite, LoadingOpac 1s infinite;
    opacity: 0.25;
}

@keyframes LoadingOpac {
    0%, 100%{
        opacity: 1;
    }
    50%{
        opacity: 0.25;
    }
}

@keyframes LoadingAnim {
    0%{
        opacity: 1;
        transform: rotate(0deg);
    }
    50%{
        opacity: 0.25;
        transform: rotate(180deg);
    }
    100%{
        opacity: 1;
        transform: rotate(360deg);
    }
}

.loading-logo svg{
    width: 100%;
    height: 100%;
}

.close{
  opacity: 0;
}
</style>