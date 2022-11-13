<template>
  <div v-if="false" class="comment">Test</div>
  <header>
    <div class="container">
      <router-link to="/" class="logo">
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
      </router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  position: sticky;
  top: 0;
  padding: 0.5rem;
}

.comment {
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  padding: .25rem .5rem;
  text-align: center;
}

.logo {
  width: 3rem;
  height: 3rem;
  display: block;
}

.logo svg {
  width: 100%;
  height: 100%;
}
</style>
