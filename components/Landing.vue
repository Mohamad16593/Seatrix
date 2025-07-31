<template>
  <div class="landing position-relative">
    <div>
      <v-img src="/bg-3.jpg" class="back" cover></v-img>
    </div>
    <div class="content position-absolute mb-10">
      <SlideWord
        text="Stylish Plastic Chairs For Every Space"
        class="text-primary text-h4 font-weight-bold d-block"
      />
      <SlideWord
        text='"Discover the best chairs tailored to your needs."'
        class="text-secondary font-italic text-h5 font-weight-bold d-block mt-5"
      />
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
.landing {
  width: 100%;
  background-color: #000;
}
.back {
  filter: opacity(0.06);
  height: 100vh;
  width: 100%;
}
.content {
  top: 35%;
  left: 7%;
}
.content h1 {
  font-size: 40px;
}
.content p {
  font-size: 25px;
  font-weight: bold;
}
</style>
