import { defineStore } from 'pinia';

export const useWebInfoStore = defineStore('webInfo', {
  state: () => ({
    siteName: 'Jack Hunter',
    footerText: '© 2025 Jack Hunter',
  }),
  persist: true
});