<script>

export default {
    name: "SiteJumbotron",
    data() {


        return {
        }
    }
}
</script>


<template>
    <section>
        <div class="jumbotron d-flex justify-content-between flex-column flex-md-row">
            <div class="left_side col-4 d-none d-xl-flex">
                <div class="shapes_container">
                    <img class="shape_profile" src="../assets/img/images/artist-hero-image-03-204x300.png"
                        alt="shape_profile">
                    <img class="shape_heavenly"
                        src="../assets/img/images/vecteezy_abstract-colorful-blob-shapes-element-design_14273448_100.png"
                        alt="heavenly_shape">
                    <img class="shape_dotted" src="../assets/img/images/artist-shape-03-201x300.png" alt="shape_dotted">
                    <img class="shape_abstract" src="../assets/img/images/artist-hero-image-02.jpg" alt="shape_abstract">
                    <img class="shape_space_kong" src="../assets/img/images/artist-hero-image-01.jpg"
                        alt="shape_space_kong">
                </div>
            </div>

            <div
                class="middle_side col-12 col-md-8 col-xl-4 d-flex justify-content-center flex-column align-items-center px-5">
                <div class="f_fasthand heavenly fs-1 z_index5">Hello, Im Martin </div>
                <h3 class="main_title text-center z_index5">Artist Coaching And Mentoring Might Be for You. </h3>
                <button class="started_today z_index5">Get started today</button>

            </div>
            <div class="right_side col-12 col-md-4">
                <div class="shapes_container">
                    <img class="shape_abstract" src="../assets/img/images/artist-shape-05-300x198.png" alt="shape_abstract">
                    <img class="shape_feather" src="../assets/img/images/artist-shape-04-127x300.png" alt="shape_feather">
                    <img class="shape_photo" src="../assets/img/images/artist-hero-image-04-235x300.jpg"
                        alt="heavenly_shape">
                </div>
            </div>
        </div>

    </section>
</template>


<style lang="scss" scoped></style>