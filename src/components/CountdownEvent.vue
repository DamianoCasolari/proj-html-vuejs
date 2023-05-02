<script>
import { faClock } from '@fortawesome/free-regular-svg-icons';

export default {
    name: "CountdownEvent",
    data() {
        return {
            faClock,
            timeLeft: '',
            endDay: new Date(2023, 4, 5, 12, 0, 0),
        }
    },
    methods: {
        startCountdown() {
            setInterval(() => {
                const currentTime = new Date().getTime();
                const timeDiff = this.endDay - currentTime;
                const daysLeft = String(Math.floor(timeDiff / (1000 * 60 * 60 * 24))).padStart(2, '0')
                const hoursLeft = String(Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
                const minutesLeft = String(Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
                ).padStart(2, '0');
                const secondsLeft = String(Math.floor((timeDiff % (1000 * 60)) / 1000)).padStart(2, '0');
                this.timeLeft = `${daysLeft} : ${hoursLeft} : ${minutesLeft} : ${secondsLeft}`;
            }, 1000);
        },
    },
    mounted() {
        this.startCountdown();
    }
}
</script>


<template>
    <div id="top_page" class="countdown d-flex justify-content-center align-items-center flex-wrap">
        <div class="statement py-2">
            Start TOMORROW! Our biggest event of the year...
        </div>
        <div class="counter_container d-flex">
            <span>
                <font-awesome-icon :icon="faClock" class="mx-2 clock" />
            </span>
            <div class="counter">
                <span>
                    {{ timeLeft }}
                </span>
            </div>
        </div>
        <button class="juice_button">Get ticket</button>
    </div>
</template>


<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/utility_selectors.scss" as *;

.countdown {
    // height: 50px;
    background-color: $clr_countdown;
    font-size: calc(10px + 0.1vw);


    .clock {
        font-size: 18px;
        color: $clr_total_dark;
        vertical-align: middle;
    }

    .counter {
        font-size: 14px;
        font-weight: 700;
    }

    .juice_button {
        background-color: $clr_juice_button;
        color: $clr_primary_light;
        margin: 20px;
        padding: 3px 25px;
        font-weight: 600;
        font-size: calc(12px + 0.1vw);
        border-radius: 4px;
        border: none;
        transition-duration: 0.5s;

        &:hover {
            background-color: $clr_italic_heavenly;

        }

    }
}
</style>