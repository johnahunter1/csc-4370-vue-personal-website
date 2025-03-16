<template>
  <n-layout>
    <Header :sections="sections" :activeSection="activeSection"></Header>
    <n-layout-content>
      <router-view @submit-contact="handleContactSubmit"/>
    </n-layout-content>
  </n-layout>
</template>

<script setup>
import Header from "./components/Header.vue";
import { NLayout, NLayoutContent } from "naive-ui";
import { ref } from 'vue';
import { useContactStore } from "./stores/contact";

const contactStore = useContactStore();

const activeSection = ref('/');

const sections = [
  {id: '/', name: "Home"},
  {id: '/projects', name: "Projects"},
  {id: '/contact', name: "Contact"}
]

const handleContactSubmit = (formData) => {
  contactStore.addContact(formData); // add contact submission to Pinia store
}
</script>