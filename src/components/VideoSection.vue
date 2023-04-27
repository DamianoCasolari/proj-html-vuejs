<script>
import { faCircle } from '@fortawesome/free-regular-svg-icons';

export default {

    name: "VideoSection",
    data() {


        return {
            faCircle
        }
    }
}
</script>


<template>
    <section class="video_section p-3 d-flex justify-content-center align-items-center">
        <div class="box">
            <div class="shapes_container">
                <img class="shape_abstract"
                    src="../assets/img/images/vecteezy_abstract-colorful-blob-shapes-element-design_14273448_100.png"
                    alt="shape_abstract">
                <img class="shape_dotted" src="../assets/img/images/maxcoach-shape-05-150x150.png" alt="shape_feather">
                <img class="shape_big_dotted" src="../assets/img/images/maxcoach-shape-12-150x150.png" alt="heavenly_shape">
                <font-awesome-icon :icon="faCircle" class="shape_circle mx-2" />
            </div>
            <iframe class="z_index5" width="560" height="315" src="https://www.youtube.com/embed/d8jFMKNy9EI?controls=0"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/utility_selectors.scss" as *;

.box {
    position: relative;
    display: flex;
    justify-content: center;
    min-height: 500px;


    .shapes_container {
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0;
        max-width: 600px;

        img {
            width: 100%;
            position: absolute;
        }

        .shape_abstract {
            top: -4%;
            right: 90%;
            width: 150px;
        }

        .shape_dotted {
            top: -5%;
            right: 90%;
            width: 100px;
        }

        .shape_big_dotted {
            bottom: 30%;
            right: -10%;
            width: 120px;
        }

        .shape_circle {
            z-index: 6;
            color: $clr_silver;
            bottom: 77%;
            right: -7%;
            font-size: 50px;
            position: absolute;
        }
    }
}
</style>