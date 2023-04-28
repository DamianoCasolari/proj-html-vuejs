<script>


export default {
    name: "NewsletterSection",
    data() {
        return {

        }
    }
}
</script>


<template>
    <div class="news_letter d-flex justify-content-center align-items-center">
        <div class="input_container container-lg d-flex justify-content-between flex-wrap">
            <div class="fs-5 pe-5 col-12 col-sm-6 text-white ">Newsletter to get in touch</div>
            <form class="email_form col-12 col-sm-6 d-flex justify-content-between ">
                <input type="email" placeholder="Your e.mail" class="bg-transparent border-0">
                <input type="submit" value="&rarr;" class="bg-transparent border-0">
            </form>
        </div>
    </div>
</template>




<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/utility_selectors.scss" as *;


.news_letter {
    height: 200px;
    background-color: $clr_newsletter_section;
    background-image: url("../assets/img/images/artist-shape-color-paint-bottom-right-300x153.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom right;

    .input_container:first-child {
        text-shadow: 1px 2px 3px $clr_total_dark;
    }



    .email_form {
        color: $clr_primary_light;
        border-bottom: 2px solid $clr_primary_light;
        filter: drop-shadow(1px 2px 3px $clr_total_dark);

        input::placeholder {
            color: $clr_primary_light;
        }

        input[type$="email"] {
            color: $clr_primary_light;
            outline: none;


        }

        input[type$="submit"] {
            color: $clr_primary_light;
            font-size: 20px;
            outline: none;
        }

    }
}




@media screen and (min-width: 576px) {

    .news_letter {
        height: 200px;
        background-color: $clr_newsletter_section;
        background-image: url("../assets/img/images/artist-shape-color-paint-top-left.png"), url("../assets/img/images/artist-shape-color-paint-bottom-right-300x153.png");
        background-size: contain, contain;
        background-repeat: no-repeat, no-repeat;
        background-position: left, bottom right;
    }
}
</style>