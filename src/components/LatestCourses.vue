<script>
import { faUser, faFile } from '@fortawesome/free-regular-svg-icons';
import { coursesArray } from "../data/coursesInfo"

export default {
    name: "LatestCourses",
    data() {


        return {
            faUser,
            faFile,
            coursesArray
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
    <section class="latest_courses p-3">
        <div class="container-lg d-flex justify-content-center align-items-center flex-column h-100 p-3">

            <div class="f_fasthand heavenly fs-1 z_index5">Artist Coaching</div>
            <h5 class="main_title mt-0 text-center z_index5"> Latest Online Courses</h5>
            <div class="about_coures row row-cols-1 row row-cols-sm-2 row row-cols-md-4 w-100 text-center py-5">
                <div class="Online_coures col p-3" v-for="course in coursesArray">
                    <div class="img_container">
                        <img :src="getImagePath(course.img)" alt="abstract_pictures">

                        <div class="details text-start ps-4 pt-4">
                            <h6 class="my-2 price">{{ course.price }}</h6>
                            <h6 class="my-2">{{ course.title }}</h6>
                            <div class="description ">
                                <font-awesome-icon icon="file" class="me-2" /><span class="me-2">{{ course.lessons +
                                    "lessons" }}</span> <br>
                                <font-awesome-icon icon="user" class="mx-2" /><span>{{ course.students + " students"
                                }}</span>
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


.latest_courses {
    // height: 600px;
    background-color: $clr_primary_light;
    background-image: url("../assets/img/images/maxcoach-shape-14-1536x343.png");
    background-position: cover;
    background-repeat: no-repeat;





    &>div {

        background-image: url("../assets/img/images/artist-shape-01-300x288\ -\ Copia.png"), url("../assets/img/images/maxcoach-shape-13.png");
        background-position: top left, right;
        background-repeat: no-repeat;


        h5 {
            margin: 20px 0;
            font-weight: 700;
        }


        // CARDS COURSES 

        img {
            max-width: 100%;
        }


        .price {
            color: $clr_brackets;
        }


        h6 {
            font-size: 14px;
        }

        .description {
            color: $clr_dusty_gray;
            font-size: 12px;
        }




    }


}
</style>