<template>
  <div class="wwa">
    <SectionTitle title="Who We Are" />
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <div style="height: auto" class="wwa-content pa-3">
            <SlideSentence
              customClass="text-secondary text-h5 font-weight-bold"
              text="At Seatronix,"
            />
            <SlideSentence
              customClass="text-grey text-h10 text-sm-h11 font-italic text-item"
              text="we specialize in manufacturing high-quality plastic chairs tailored for every environment. Based in the heart of the industrial city, our mission is simple: to provide durable, stylish, and functional seating solutions for homes, offices, cafeterias, beaches, and anywhere else comfort and design matter. Whether it’s a cozy corner in a home office, the energy of a bustling café, or the breeze of an outdoor resort, our chairs are built to adapt—across categories, climates, and use cases. We combine advanced molding techniques with ergonomic designs to meet the everyday needs of modern life. From stackable essentials to vibrant lifestyle pieces, Seatronix offers a range that suits both aesthetic and utility, with a commitment to quality, accessibility, and market responsiveness."
            />
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="d-flex align-end justify-center">
          <img
            src="/bg2.jpg"
            style="width:300px; height:100% ;"
            class="wwa-img"
            cover
          ></img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup></script>
<style>
.wwa-img {
  border-radius: 0 50% 0 50%;
  /* border: 2px solid #ffb300; */
  filter: opacity(0.5);
}
.wwa-content {
  border: 1px solid #ffb300;
  /* transform: rotate(1deg); */
  border-radius: 15px;
}
</style>
