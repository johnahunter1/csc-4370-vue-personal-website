<template>
  <div class="projects-page">
    <n-card class="projects-card">
      <template #header>
      <h2 class="card-title">My Projects ({{ projectCount }})</h2>
      </template>
      <n-list v-if="projectsStore.projects.length > 0">
        <n-list-item v-for="project in projectsStore.projects" :key="project.id">
          <n-space vertical align-items="center">
            <strong>{{ project.name }}</strong>
            <n-button @click="toggleDescription(project.id)" type="info">
              {{ showDescriptions[project.id] ? "Hide" : "Show" }} Description
            </n-button>
            <p v-show="showDescriptions[project.id]" class="project-description">
              {{ project.description }}
            </p>
            <n-button tag="a" :href="project.link" target="_blank" type="primary">Project Link</n-button>
          </n-space>
        </n-list-item>
      </n-list>
      <p v-else>No projects available.</p> <!-- show message if no projects in the store-->
    </n-card>
  </div>
</template>

<script setup>
import { useProjectsStore } from "../stores/projects";
import { NCard, NList, NListItem, NButton, NSpace } from 'naive-ui';
import { ref, computed } from "vue";

const projectsStore = useProjectsStore(); // Use Pinia store for project data

const showDescriptions = ref({}); // Track visibility of descriptions

const toggleDescription = (projectId) => {
  showDescriptions.value[projectId] = !showDescriptions.value[projectId];
}; // Toggle description visibility when button is clicked

// Compute number of projects
const projectCount = computed(() => projectsStore.projects.length)
</script>


<style scoped>
/* Main container ensures centering without affecting the header */
.projects-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1; /* This makes sure it fills available space without forcing full height */
  width: 100%;
  padding: 0rem 0; /* Adds spacing from the header */
}

.projects-card {
  max-width: 600px;
  width: 100%;
  text-align: center;
}

/* Centers text inside each project */
.project-description {
  text-align: center;
  margin-top: 0.5rem;
}

.card-title {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.2;
}

strong {
  font-size: 1.15rem;
}
</style>