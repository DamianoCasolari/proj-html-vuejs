<script>

export default {
    name: "ArtistCoaching",
    data() {


        return {

        }
    }
}
</script>


<template>
    <section class="artist_coaching p-3">
        <div class="container-lg d-flex justify-content-center align-items-center flex-column h-100 p-3">

            <div class="f_fasthand heavenly fs-1 z_index5">Artist Coaching</div>
            <h4 class="main_title text-center z_index5"> I understand what it takes to create.<br> I can help you with</h4>
            <div class="about_coures row row-cols-1 row row-cols-sm-2 row row-cols-md-4 w-100 text-center py-5">
                <div class="Online_coures col p-4">
                    <div class="img_container">
                        <img src="../assets/img/images/artist-box-image-01.png" alt="leaf">
                        <h5>Online coures</h5>
                        <div class="description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                            praesentium, quae iusto quis aliquid qui voluptatem excepturi totam nam? Dolor?</div>
                    </div>
                </div>
                <div class="One_to_one col p-4">
                    <div class="img_container">
                        <img src="../assets/img/images/artist-box-image-02.png" alt="rainbow">
                        <h5>One to One</h5>
                        <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                            magni
                            ad obcaecati esse pariatur sit, placeat voluptates odit? At, nemo.</div>
                    </div>
                </div>
                <div class="Anywhere col p-4">
                    <div class="img_container">
                        <img src="../assets/img/images/artist-box-image-03.png" alt="rain">
                        <h5>Anywhere</h5>
                        <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
                            voluptatibus culpa omnis nemo aperiam, voluptate sequi? Maxime voluptatum incidunt ex?</div>
                    </div>
                </div>
                <div class="On_time col p-4">
                    <div class="img_container">
                        <img src="../assets/img/images/artist-box-image-04.png" alt="eye">
                        <h5>on time</h5>
                        <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
                            dolore?
                            Repellendus qui amet nesciunt obcaecati debitis quaerat repudiandae ipsam odit?</div>
                    </div>
                </div>
            </div>

        </div>

    </section>
</template>


<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/utility_selectors.scss" as *;


.artist_coaching {
    // height: 600px;
    background-color: $clr_primary_light;
    background-image: url("../assets/img/images/maxcoach-shape-14-1536x343.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;


    &>div {

        background-image: url("../assets/img/images/artist-shape-01-300x288\ -\ Copia.png"), url("../assets/img/images/maxcoach-shape-13.png");
        background-position: top left, right;

        background-repeat: no-repeat;


        & h5 {
            margin: 20px 0;
            font-weight: 700;
        }


    }


}
</style>