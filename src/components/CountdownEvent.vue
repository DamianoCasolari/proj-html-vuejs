<script>
import { faClock } from '@fortawesome/free-regular-svg-icons';

export default {
    name: "CountdownEvent",
    data() {
        return {
            faClock
        }
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
                    00 : 00 : 00 : 00
                </span>
                <!-- <span>
                00 :
            </span>
            <span>
                00 :
            </span>
            <span>
                00
            </span> -->
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