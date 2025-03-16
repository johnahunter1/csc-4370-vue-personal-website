import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 1,
        name: 'This Website!',
        description: 'I made this website as a project for my Web Programming class. I am using Vite, Vue, Pinia, and NaiveUI.',
        link: 'https://notarealsite.com'
      },
      {
        id: 2,
        name: 'Time Machine',
        description: 'I invented a real time machine which I used to prevent the Yankees from winning the World Series.',
        link: 'https://google.com'
      },
      {
        id: 3,
        name: 'Evil Water',
        description: 'I created an evil form of water that makes you thirsty. You still get hydrated though, it is just unpleasant.',
        link: 'https://www.nestle.com/brands/water'
      }
    ]
  }),
  persist: true
});