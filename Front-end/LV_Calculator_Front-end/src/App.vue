<script setup>
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "./components/MainHeader.vue";
import MainCalculatorBody from "./components/MainCalculatorBody.vue";
import MainPartnersBlock from "./components/MainPartnersBlock.vue";
import MainFooter from "./components/MainFooter.vue";
</script>

<template>
  <div class="main-wrapper">
    <MainHeader></MainHeader>
    <MainCalculatorBody></MainCalculatorBody>
    <MainPartnersBlock></MainPartnersBlock>
    <MainFooter></MainFooter>
  </div>

</template>
