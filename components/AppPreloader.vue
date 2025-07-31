<template>
  <v-container
    class="d-flex align-center justify-center w-100 bg-black"
    height="100vh"
    fluid
  >
    <div class="loading-text">Loading .. Please Wait</div>
  </v-container>
</template>
<style>
.loading-text {
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(90deg, #ff8a00, #e52e71, #9b00ff);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fade 2s ease-in-out infinite, shimmer 4s linear infinite;
}
@media (min-width: 768px) {
  .loading-text {
    font-size: 36px;
  }
}

@keyframes fade {
  0%,
  100% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
}

@keyframes shimmer {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
