<script>
import { testimonialsArray } from "../data/testimonialsInfo"
import { appearWithScroll } from '../assets/js/utility_functions.js';


export default {
    name: "TesimonialsSlider",
    data() {
        return {
            testimonialsArray,
            currentIndex: 0,
            buttonRight: false,
            buttonLeft: false,
            autoplayElement: "",
            appearWithScroll

        }
    },
    methods: {
        getImagePath: function (name) {
            return new URL(`/src/assets/img/images/${name}`, import.meta.url).href
        },

        getCardClasses(index) {
            const activeIndex = this.currentIndex;
            const firstIndex = (activeIndex === 0) ? (this.testimonialsArray.length - 2) : ((activeIndex === 1) ? (this.testimonialsArray.length - 1) : (activeIndex - 2));
            const prevIndex = activeIndex === 0 ? this.testimonialsArray.length - 1 : activeIndex - 1;
            const nextIndex = (activeIndex + 1) % this.testimonialsArray.length;
            const lastIndex = (activeIndex + 2) % this.testimonialsArray.length;

            const classes = {
                'active': index === activeIndex,
                'left_card': index === prevIndex,
                'right_card': index === nextIndex,
                //slide if you click right button
                'slideToTheCentral': index === activeIndex && this.buttonRight == true,
                'slideLeft': index === prevIndex && this.buttonRight == true,
                'slideRight': index === nextIndex && this.buttonRight == true,
                'slideOut': index === firstIndex && this.buttonRight == true,
                //slide if you click left button
                'slideToTheCentral2': index === activeIndex && this.buttonLeft == true,
                'slideLeft2': index === prevIndex && this.buttonLeft == true,
                'slideRight2': index === nextIndex && this.buttonLeft == true,
                'slideOut2': index === lastIndex && this.buttonLeft == true,
            };

            return classes;

        }, turnRight() {
            const numTestimonials = this.testimonialsArray.length;
            const nextIndex = (this.currentIndex + 1) % numTestimonials;
            this.currentIndex = nextIndex;
            this.buttonLeft = false;
            this.buttonRight = true;
        },
        turnLeft() {
            const nextIndex = this.currentIndex == 0 ? this.testimonialsArray.length - 1 : this.currentIndex - 1;
            this.currentIndex = nextIndex;
            this.buttonLeft = true;
            this.buttonRight = false;

        },
        autoPlay() {
            this.autoplayElement = setInterval(() => this.turnRight(), 5000)
            document.querySelector(".active").classList.remove("central_card_shadow")
        },
        stopPlay() {
            clearInterval(this.autoplayElement)
            document.querySelector(".active").classList.add("central_card_shadow")
        },
        scrollFunction() {
            const section = document.querySelector(".testimonials_slider")
            appearWithScroll(section)
        }

    },
    mounted() {
        this.autoPlay()
        this.scrollFunction()

    }
}

</script>


<template>
    <section class="carouselle_section">
        <div class="testimonials_slider d-flex flex-column align-items-center py-5 position-relative container-lg td_1s">

            <!-- add button carousel  -->

            <button class="btn_carousel btn_left border-0 bg-transparent start-0 position-absolute z_index5"
                @click="turnLeft" @mouseover="stopPlay()" @mouseleave="autoPlay()">
                <font-awesome-icon icon="chevron-left" />
            </button>
            <button class="btn_carousel btn_right border-0 bg-transparent end-0 position-absolute z_index5"
                @click="turnRight" @mouseover="stopPlay()" @mouseleave="autoPlay()">
                <font-awesome-icon icon="chevron-right" />
            </button>

            <div class="d-flex align-items-center flex-column px-5">

                <!-- title  -->
                <div class="f_fasthand heavenly fs-1 z_index5">Testimonials </div>
                <h5 class="main_title text-center z_index5">Why do people love me? </h5>

                <!-- Carousell-->

                <div class="slider d-flex position-relative text-start container-lg w-100">

                    <div class="testimonial_card p-3 mt-4 flex-column align-items-center" @mouseover="stopPlay()"
                        @mouseleave="autoPlay()" v-for="(testimonial, index) in testimonialsArray"
                        :class="getCardClasses(index)">

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


<style lang="scss" scoped></style>


