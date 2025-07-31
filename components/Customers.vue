<template>
  <slide-section>
  <div class="customers mb-16 sec">
    <SectionTitle title="Testimonals" />
    <v-container fluid>
      <v-row>
        <v-col cols="12"  md="4"  class="testi" v-for="(testi , index) in testies" :key="index">
          <v-card class="pa-5 shadow " rounded="xl">
            <v-card-text >
              <SlideSentence :text="testi.say" />
            </v-card-text>
            <v-card-subtitle>
              <div class="d-flex align-center justify-start ga-5">
                <img
                  :src="testi.img"
                 style="width:50px;height:50px;border-radius: 50%;"
                  
                  
                  cover
                ></img>
                <SlideWord :text="testi.name" customClass="text-subtitle text-grey-lighten" />
              </div>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
    </slide-section>
</template>
<script setup>
const testies = [
  {
    "say" : "I bought a set of your stackable chairs for our backyard patio,and they’ve completely transformed the space. They’re lightweight, easy to clean, and surprisingly comfortable even during long family gatherings. Plus, the color hasn’t faded at all despite months of sun exposure. Highly recommend for anyone looking to upgrade their outdoor setup!",
    "name" : "Lina M., Damascus, \"Homeowner\"",
    "img" : "/lina.jpg",
  },
  {
    "say" : "We ordered 60 chairs for our café’s outdoor seating area, and they’ve held up beautifully through daily use and unpredictable weather. The sleek design fits our brand perfectly, and the customer service was top-notch. Delivery was fast, and the chairs arrived in perfect condition. We’ll definitely be ordering again as we expand.",
    "name" : "Khaled A., Aleppo, \"Business Owner\"",
    "img" : "/khaled.jpg",
  },
  {
    "say" : "As an event planner, I need chairs that are easy to transport, quick to set up, and durable enough for repeated use. These chairs tick all the boxes. They’re sturdy, stack well, and look professional in any setting—from weddings to conferences. Clients love them, and so do we!",
    "name" : "Rania S., Homs, \"Event Organizer\"",
    "img" : "/rania.jpg",
  }
]


</script>
<style scoped>
.shadow {
  box-shadow: 0px 4px 12px #ffb300;
}
@media (min-width:960px){
.testi:nth-of-type(2){
  margin-top:50px !important;
}
}

.v-card-subtitle {
  font-size: 10px !important;
}
.v-card-text {
  font-style: italic !important;
  color: rgb(82, 82, 82) !important ;
}

</style>
