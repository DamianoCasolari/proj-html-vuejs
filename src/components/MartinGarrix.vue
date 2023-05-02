<script>
import { appearWithScroll } from '../assets/js/utility_functions.js';

export default {
    name: "MartinGarrix",
    data() {


        return {
            appearWithScroll
        }
    },
    methods: {
        scrollFunction() {
            const section = document.querySelector(".martin_garrix")
            appearWithScroll(section)
        }
    },
    mounted() {
        this.scrollFunction()

    }
}
</script>


<template>
    <section class="martin_garrix td_1s p-3 d-flex justify-content-center align-items-center">
        <div class="about_Martin container-lg d-flex justify-content-between align-items-start h-100 py-5 px-4 flex-wrap">
            <div class="left_side col-12 col-md-6 text-center position-relative">
                <div class="quote img_container">
                    <img src="../assets/img/images/artist-quote-icon.png" alt="quotes">
                </div>
                <h3 class="main_title z_index5 px-5"> I coach and mentor visual artist, like you, to Create Like
                    You
                    Mean it
                </h3>
                <div class="f_fasthand heavenly fs-1 z_index5 mt-4">Martin Garrix</div>
            </div>
            <div class="right_side col-12 col-md-6">

                <p class="description mt-5  mt-md-0"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                    eaque neque
                    aliquam nulla sequi asperiores amet qui, ab expedita vero odit provident nam eius! Explicabo quis
                    corrupti velit ipsum pariatur animi, aspernatur accusantium accusamus fugiat provident rem, possimus
                    debitis similique.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa placeat mollitia ratione sed laudantium
                    magni iste in ab nemo nostrum?
                </p>
                <button class="gray_button">Get Started Today</button>
            </div>
        </div>

    </section>
</template>


<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/utility_selectors.scss" as *;

.martin_garrix {
    min-height: 500px;

    .quote {
        position: absolute;
        top: -60px;
        left: 50%;
        transform: translate(-50%, 0);
    }
}

@media screen and (min-width: 768px) {
    .left_side {
        margin-left: -48px;
    }
}
</style>