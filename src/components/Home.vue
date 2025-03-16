<template>
    <div class="home">

        <!-- overlay for welcome message, only visible if showWelcome is true-->
        <div v-if="showWelcome" class="welcome-overlay">
            <div class="welcome-box">
                <h2>Welcome to My Website!</h2>
                <p>Thank you for visiting, I hope you like what you see.</p>
                <!-- button to close welcome message and save its state as seen in Pinia -->
                <n-button @click="closeWelcome" type="error">Close</n-button>
            </div>
        </div>

        <h2>Here's a little about me!</h2>
        <p class="about-body"> 
            Hello! My name is Jack, and this is my third(ish) year studing Computer 
            Science. In my free time I like to learn about different topics in STEM, participate in politics, and spend as much time as I can outdoors. My favorite hobby is learning about
            Mechanical Engineering, and I like to use that knowledge to work on cars, motorcycles, 3D Printers,
            and machine tools. I spent a year studying at UGA, where I was one of the lead fabricators for the
            UGA Motorsports ChampCar team within the College of Engineering. We were the first in the club's 
            history to finish the ChampCar endurance race at Road Atlanta last school year. Outside of my 
            nerdy hobbies, I enjoy hiking, fishing, kayaking, and listening to music. Some of my most favorite artists are OutKast, Parliament, Rick James, James Brown, and 
            Kendrick Lamar. I am looking forward to learning lots this semester, and I hope to become 
            proficient in Web Programming by the time this class is over! 
        </p>

        <!-- manually show welcome message after it has already been seen -->
        <n-button class="welcome-button" size="small" type="primary"
        v-if="welcomeStore.hasSeenWelcome" @click="showWelcome = true">
            Show Welcome Message
        </n-button>

        <n-button class="counter-button" size="small" type="primary"
        @click="incrementCounter">{{ count }}</n-button>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useWelcomeStore } from "../stores/welcome"
import { NButton } from "naive-ui";

const welcomeStore = useWelcomeStore(); // initialize Pinia store for welcome state

const showWelcome = ref(false); // reactive variable to control visibility of welcome message

const count = ref(0); // reactive variable to count number of button clicks

onMounted(() => { // lifecycle hook that runs when component is mounted
    if (!welcomeStore.hasSeenWelcome) { // check is welcome message has already been seen
        showWelcome.value = true; // if not yet seen, show it
    }
});

const closeWelcome = () => {
    showWelcome.value = false; // hide message
    welcomeStore.markWelcomeSeen(); // update Pinia store to persist state in local storage
}

const incrementCounter = () => { // executed when counter button clicked
    count.value = count.value + 1 // add 1 to counter
}
</script>

<style scoped>
.home {
    text-align: center; 
}

.welcome-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5); /* semi transparent */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* ensure welcome message is shown above other components */
}

.welcome-box {
    background: white;
    color:black;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3); /* soft shadow because looks cool */
    text-align: center;
    width: 80%;
    max-width: 400px;
}

.welcome-button, .counter-button {
    margin: 0.3rem;
}

.about-body {
    max-width: 600px;
    margin: 0 auto;
}
</style>