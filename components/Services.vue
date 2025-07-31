<template>
  <div class="services">
    <SectionTitle title="Services" />
    <v-container>
      <v-row justify="center">
        <v-col cols="12" v-for="(service, index) in services" :key="index">
          <v-card
            :color="(index + 1) % 2 === 0 ? 'secondary' : 'primary'"
            :class="[
              index % 2 === 0
                ? 'py-10 px-5 mx-sm-10 service-card'
                : 'py-10 px-5 ml-sm-16 service-card',
            ]"
          >
            <v-card-title class="font-weight-bold"
              ><SlideSentence :text="service.title"
            /></v-card-title>
            <v-list :class="[index % 2 === 0 ? 'bg-primary' : 'bg-secondary']">
              <v-list-item
                v-for="(avService, idx) in service.avServices"
                :key="idx"
                ><SlideSentence :text="avService"
              /></v-list-item>
            </v-list>
            <v-card-subtitle class="font-weight-bold"
              ><SlideSentence :text="service.usage"
            /></v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
const services = [
  {
    title: "Custom Branding & Private Labeling: Offer clients the ability to",
    avServices: [
      "Add their logo or brand colors to bulk chair orders.",
      "Choose from custom finishes, textures, or patterns.",
      "Create exclusive product lines for retailers or event organizers.",
    ],
    usage:
      "Ideal for: hotels, schools, event companies, and resellers who want chairs that match their brand identity.",
  },
  {
    title: "On-Demand Delivery & Assembly Services",
    avServices: [
      "Scheduled delivery with real-time tracking",
      "Optional on-site assembly or setup for large venues",
      "Bulk logistics support for trade shows, weddings, or conferences",
    ],
    usage:
      "Ideal for: clients who need chairs deployed quickly and professionally without handling logistics themselves.",
  },
  {
    title: "Introduce a sustainability-focused service:",
    avServices: [
      "Collect old or damaged plastic chairs",
      "Offer discounts or credits toward new purchases",
      "Promote eco-friendly disposal and recycling",
    ],
    usage:
      "Ideal for: institutions upgrading furniture, and environmentally conscious buyers.",
  },
];
</script>
