<script>
import { faCircle, faCalendar, faEye } from '@fortawesome/free-regular-svg-icons';


export default {

    name: "LatestFromTheBlog",
    data() {


        return {
            faCircle,
            faCalendar,
            faEye
        }
    }
}
</script>


<template>
    <section class="blog_section p-3 d-flex justify-content-center align-items-center">
        <div class="box container-lg d-flex justify-content-center align-items-center flex-column">

            <!-- Title section  -->
            <div class="f_fasthand heavenly fs-1 z_index5">Articles and Tips</div>
            <h5 class="main_title mt-0 text-center z_index5"> Latest From The Blog</h5>
            <!-- Articles section -->
            <div class="links_to_articles d-flex justify-content-around flex-wrap">

                <!-- on the left -->
                <div class="main_article on_the_left col-12 col-md-3">
                    <div class="img_container">
                        <img src="../assets/img/images/artist-blog-01-480x356.jpg" alt="picture_cover_article">
                    </div>
                    <div class="details details_container text-secondary">
                        <div class="subtitle">ARTIST</div>
                        <h6 class="title ">Connection Between Self-Portraits and identity</h6>
                        <div class="description ">
                            <font-awesome-icon :icon="faCalendar" class="me-2" /><span class="me-2"> may, 15 20
                            </span>
                            <font-awesome-icon :icon="faEye" class="mx-2" /><span>600 views</span>
                        </div>
                    </div>

                </div>

                <!-- center -->
                <div class="main_article position-relative col-12 col-md-4 mx-3">
                    <div class="img_container">
                        <img src="../assets/img/images/artist-blog-02-500x680.jpg" alt="picture_cover_article">
                    </div>

                    <div class="details middle_card position-absolute">
                        <div class="subtitle">ARTIST</div>
                        <h3 class="title ">Connection Between Self-Portraits and identity</h3>
                        <div class="description ">
                            <font-awesome-icon :icon="faCalendar" class="me-2" /><span class="me-2"> may, 15 20
                            </span>
                            <font-awesome-icon :icon="faEye" class="mx-2" /><span>600 views</span>
                        </div>
                    </div>
                </div>

                <!-- on the right -->
                <div class="main_article on_the_right col-12 col-md-3">
                    <div class="img_container ">
                        <img src="../assets/img/images/artist-blog-03-480x356.jpeg" alt="picture_cover_article">
                    </div>

                    <div class="details details_container text-secondary">
                        <div class="subtitle">ARTIST</div>
                        <h6 class="title ">Connection Between Self-Portraits and identity</h6>
                        <div class="description ">
                            <font-awesome-icon :icon="faCalendar" class="me-2" /><span class="me-2"> may, 15 20
                            </span>
                            <font-awesome-icon :icon="faEye" class="mx-2" /><span>600 views</span>
                        </div>
                    </div>
                </div>

            </div>
            <!-- Shapes Background -->
            <div class="shapes_container">
                <img class="shape_abstract"
                    src="../assets/img/images/vecteezy_abstract-colorful-blob-shapes-element-design_14273448_100.png"
                    alt="shape_abstract">
                <img class="shape_dotted" src="../assets/img/images/maxcoach-shape-05-150x150.png" alt="shape_feather">
                <img class="shape_big_dotted" src="../assets/img/images/maxcoach-shape-12-150x150.png" alt="heavenly_shape">
                <font-awesome-icon :icon="faCircle" class="shape_circle mx-2" />
            </div>

        </div>
    </section>
</template>


<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/utility_selectors.scss" as *;


.blog_section {
    background-color: $clr_blog_section;
    background-image: url("../assets/img/images/maxcoach-shape-14-1536x343.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    .box {
        position: relative;
        display: flex;
        justify-content: center;
        min-height: 500px;

        .links_to_articles {
            height: 100%;

            .on_the_left {
                margin-top: 10%;

            }

            .main_article {

                z-index: 5;
                filter: drop-shadow(1px 2px 4px black);
                height: 100%;
                margin-bottom: 20px;


                .img_container {
                    width: 100%;
                    height: 100%;


                    img {
                        filter: brightness(80%);
                        object-fit: cover;
                        width: 100%;
                        max-height: 100%;
                    }

                }


                .details {
                    bottom: 20px;
                    left: 20px;
                    color: $clr_primary_light;

                    .title {
                        word-wrap: break-word;
                    }

                    &.middle_card * {
                        text-shadow: 1px 1px 1px $clr_total_dark;
                    }

                }

                .details_container {
                    padding: 10px;
                    background-color: $clr_primary_light;
                }
            }
        }

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
                top: 89%;
                right: -10%;
                width: 190px;
                transform: rotate(90deg);
            }

            .shape_dotted {
                top: 10%;
                right: 84%;
                width: 100px;
            }

            .shape_big_dotted {
                bottom: 51%;
                right: -25%;
                width: 120px;
            }

            .shape_circle {
                z-index: 6;
                color: $clr_juice_button;
                bottom: 77%;
                right: 145%;
                font-size: 60px;
                font-weight: bold;
                position: absolute;
            }
        }
    }
}
</style>