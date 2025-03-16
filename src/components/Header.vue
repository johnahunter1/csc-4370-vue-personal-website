<template>
  <n-layout-header bordered class="nav-header">
    <n-space justify="space-between" class="header-container">
      <n-text class="logo" :depth="1" strong>{{ siteName }}</n-text>
      <n-space class="nav-link-container">
        <n-button
          v-for="sect in sections"
          :key="sect.id"
          text
          @click="goToLink(sect.id)"
          class="nav-button">
          {{ sect.name }}
        </n-button>
      </n-space>
    </n-space>
  </n-layout-header>
</template>
<script setup>

import { NButton, NSpace, NLayoutHeader, NText } from 'naive-ui';
import { useWebInfoStore } from '../stores/webInfo';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter()
const goToLink = (sect) => {
  router.push(sect);
};

const props = defineProps({
  sections: {
    type: Array,
    required: true
  },
  activeSection: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['nav-click']);

const webInfo = useWebInfoStore();

const { siteName } = storeToRefs(webInfo);

</script>

<style scoped>

.nav-header {
  position: sticky;
  top: 0;
  /* background-color: var(--n-color, #2c3e50); */
  background-color: rgb(164, 224, 236);
  z-index: 1000;
  padding: 0rem 2rem;
}

.logo {
  font-size: 1.5rem;
}

.nav-button {
  margin-left: 1.5rem;
}

.header-container {
  height: 64px;
}

.nav-link-container, .logo {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
