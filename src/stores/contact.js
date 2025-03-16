import { defineStore } from "pinia";
import { ref } from "vue";

export const useContactStore = defineStore('contact', () => {
    const contacts = ref([]); // store contact form submissions

    const addContact = (contact) => {
        contacts.value.push(contact);
        console.log("Contact Submission added to store:", contacts.value)
    };
    
    return { contacts, addContact };
}, {
    persist: {
        key: 'contact-store',
        storage: localStorage
    } // persist contact form submissions by saving to local storage
}
);