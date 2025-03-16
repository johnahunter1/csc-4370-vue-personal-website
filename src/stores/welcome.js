import { defineStore } from "pinia";

export const useWelcomeStore = defineStore("welcomeStore", {
    state: () => ({
        // load initial welcome message state from local storage if it already exists
        hasSeenWelcome: localStorage.getItem("hasSeenWelcome") === "true"
    }),

    actions: {
        markWelcomeSeen() { // mark welcome message as seen
            this.hasSeenWelcome = true; // update state
            localStorage.setItem("hasSeenWelcome", "true"); // persist state to local storage
        }
    }
});