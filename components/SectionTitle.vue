<template>
  <div>
    <slide-word
      :text="title"
      class="title text-primary my-16 ml-8 position-relative text-h4 font-weight-bold"
    ></slide-word>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>
<style>
.title::before {
  content: "";
  position: absolute;
  display: block;
  width: 3px;
  height: 100%;
  left: -10px;
  background-color: #ffb300;
}
</style>
