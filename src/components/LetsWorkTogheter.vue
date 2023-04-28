<script>
import { upcomingEventsArray } from "../data/upcomingEventsInfo"

export default {
    name: "LatestCourses",
    data() {


        return {
            upcomingEventsArray
        }
    },
    methods: {
        getImagePath: function (name) {
            return new URL(`../assets/img/images/${name}`, import.meta.url).href
        },
    }
}
</script>


<template>
    <section class="upcoming_event p-3">
        <div class="container-lg d-flex justify-content-center align-items-center flex-column h-100 p-3">

            <div class="f_fasthand heavenly fs-1 z_index5">Upcoming Events</div>
            <h5 class="main_title mt-0 text-center z_index5"> Lets Work Together</h5>

            <div class="about_events row row-cols-1 row row-cols-sm-2 row w-100 text-center py-5">
                <div class="single_event col p-3 d-flex align-items-center" v-for="course in upcomingEventsArray">
                    <div class="img_container">
                        <img :src="getImagePath(course.img)" alt="abstract_pictures">
                    </div>

                    <div class="details text-start px-4 ">
                        <h6 class="my-2 date">{{ course.date }}</h6>
                        <h6 class="my-2">{{ course.title }}</h6>
                        <div class="position ">
                            <font-awesome-icon icon="location-dot" class="mx-2" /><span>{{ course.position }}</span>
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


.upcoming_event {
    // height: 600px;
    background-color: $clr_primary_light;
    background-image: url("../assets/img/images/artist-shape-02-600x324\ -\ Copia.png");
    background-position: top right;
    background-repeat: no-repeat;


    &>div {

        background-image: url("../assets/img/images/artist-shape-01-300x288\ -\ Copia.png");
        background-position: bottom left;
        background-repeat: no-repeat;



        h5 {
            margin: 20px 0;
            font-weight: 700;
        }

        // CARDS EVENTS

        .single_event {
            cursor: pointer;
        }

        .single_event:nth-of-type(3) .img_container,
        .single_event:nth-of-type(4) .img_container {
            order: 1;
        }

        .single_event:hover {
            border: 1px solid $clr_street;
        }

        .single_event:hover img {
            transform: scale(0.95);
            filter: grayscale(0);
        }

        img {
            max-width: 100%;
            transition-duration: 0.5s;
            filter: grayscale(1);

        }

        .date {
            color: $clr_brackets;
        }


        h6 {
            font-size: 14px;
        }

        .position {
            color: $clr_dusty_gray;
            font-size: 12px;
        }




    }


}
</style>