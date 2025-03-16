<template>
    <div class="contact-container">
        <div class="contact-form">
            <h2>Contact Me</h2>
            
            <n-input class="input"
                v-model:value="formData.name"
                placeholder="Enter your name"
                type="text"
                clearable
            />

            <n-input class="input"
                v-model:value="formData.email"
                placeholder="Enter your email"
                type="email"
                clearable
            />

            <n-input class="input"
                v-model:value="formData.msg"
                type="textarea"
                placeholder="Enter your message"
                :autosize="{ minRows: 3, maxRows: 8}"
            />

            <n-button type="primary" @click="submitForm">
                Send Message
            </n-button>
        </div>
    </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import { NInput, NButton } from "naive-ui";

const emit = defineEmits(["submit-contact"]);

const formData = reactive({ // create reactive object
    name: "",
    email: "",
    msg: ""
});

watch(formData, (newData) => { // watcher to track changes to contact form
  console.log("Form Data Updated:", newData);
}, { deep: true });

const submitForm = () => {
    if (formData.name && formData.email && formData.msg) { // check if forms filled
        emit("submit-contact", { ...formData }); // emit form data to parent
        Object.keys(formData).forEach(key => formData[key] = ""); // reset form

    } else {
        alert("Fill out all fields.");
    }
};
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
}

.contact-form {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>