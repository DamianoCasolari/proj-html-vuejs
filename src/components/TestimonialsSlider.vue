<script>
import { testimonialsArray } from "../data/testimonialsInfo"

export default {
    name: "TesimonialsSlider",
    data() {


        return {
            testimonialsArray,
            currentIndex: 0

        }
    },
    methods: {
        getImagePath: function (name) {
            return new URL(`/src/assets/img/images/${name}`, import.meta.url).href
        },

        start_position_slider() {
            if (testimonialsArray) {
                const activeE = document.querySelector(".testimonial_card.active")
                const testimonials = document.querySelectorAll(".testimonial_card");
                const lastE = testimonials[testimonials.length - 1];
                activeE.nextElementSibling.classList.add("right_card")
                lastE.classList.add("left_card");

            }
        },

        turnRight() {
            const testimonials = document.querySelectorAll(".testimonial_card");
            const activeE = document.querySelector(".testimonial_card.active");
            if (this.currentIndex != 0) {
                const prevE = activeE.previousElementSibling
                prevE.classList.remove("left_card")

            } else {
                const prevE = testimonials[testimonials.length - 1];
                console.log(prevE);
                prevE.classList.remove("left_card")
            }

            const nextE = activeE.nextElementSibling || testimonials[0];
            const secondNextE = nextE.nextElementSibling || testimonials[0];

            activeE.classList.replace("active", "left_card")


            activeE.classList.replace("right_card", "active")

            secondNextE.classList.add("right_card");

            this.currentIndex = (this.currentIndex + 1) % testimonialsArray.length;
        }
    },

    mounted() {
        this.start_position_slider()
    }
}
</script>


<template>
    <section>
        <div class="testimonials_slider d-flex flex-column align-items-center p-5 position-relative">

            <!-- add button carousel  -->
            <button class="btn_carousel btn_left border-0 bg-transparent start-0 position-absolute z_index5"
                @click="previousGame">
                <font-awesome-icon icon="chevron-left" />
            </button>
            <button class="btn_carousel btn_right border-0 bg-transparent end-0 position-absolute z_index5"
                @click="turnRight">
                <font-awesome-icon icon="chevron-right" />
                <!-- <font-awesome-icon icon="circle" /> -->
            </button>

            <div class="d-flex align-items-center flex-column px-5">

                <!-- title  -->
                <div class="f_fasthand heavenly fs-1 z_index5">Testimonials </div>
                <h5 class="main_title text-center z_index5">Why do people love me? </h5>

                <!-- Carousell  FROM LG CONTAINER-->

                <div class="slider d-flex position-relative text-start container-lg w-100">


                    <div class="testimonial_card p-3 mt-4 flex-column align-items-center"
                        v-for="(testimonial, index) in testimonialsArray" :class="{ 'active': currentIndex == index }">

                        <h6 class="title fw-bold">{{ testimonial.title }}</h6>
                        <p class="opinion">{{ testimonial.opinion }}</p>

                        <div class="testimonial_info d-flex">
                            <div class="img_container">
                                <img :src="getImagePath(testimonial.img)" alt="testimonial pictures">
                            </div>
                            <div class="info ms-4">
                                <div class="name">{{ testimonial.name }}</div>
                                <div class="job">{{ "/ " + testimonial.job }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>
</template>


<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/utility_selectors.scss" as *;

.testimonials_slider {

    background-color: $clr_lovesection_background;
    min-height: 500px;
    max-width: 100%;

    .btn_carousel {
        top: 50%;
        font-size: 30px;
        margin: 0 50px;
        color: $clr_dusty_gray;
    }


    .testimonial_card {

        background-color: $clr_primary_light;
        position: absolute;
        display: none;

        .testimonial_info {
            transition-duration: 1.5s;


            .name {
                font-weight: 700;
            }

            img {
                width: 50px;
                border-radius: 50%;
            }
        }

        &.active {
            display: flex !important;
        }

        &.left_card {
            left: -115%;
            width: 90%;
            opacity: 0.5;
            display: flex !important;
        }

        &.right_card {
            left: 115%;
            width: 90%;
            opacity: 0.5;
            display: flex !important;
        }

    }

}
</style>