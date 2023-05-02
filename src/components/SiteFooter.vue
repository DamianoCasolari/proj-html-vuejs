<script>
import { linksFooterExplore, linksFooterInformation, IstragramInfo } from "../data/linksFooterInfo"

export default {
    name: "SiteFooter",
    data() {
        return {
            linksFooterExplore,
            linksFooterInformation,
            IstragramInfo
        }
    },
    methods: {
        getImagePath: function (name) {
            return new URL(`/src/assets/img/images/${name}`, import.meta.url).href
        }
    }
}
</script>


<template>
    <footer>
        <div class="container-lg d-flex flex-wrap py-4">
            <div class="info_left col-12 col-md-8 d-flex justify-content-between pe-4 flex-wrap">
                <div class="adresses order-1 order-sm-0 col-12 col-sm-6 pe-3">
                    <h5 class="title">Adress</h5>
                    <div class="address fs_12">342 Ne 191dt # 87394, miami, Fl 3453-324 <br> +1(2131)231-2132-631654 (9am -
                        5pm
                        EST, monday-Friday)</div>
                    <div class="email fs_12">support@maxcoach.com</div>
                    <div class="social_links">
                        <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" class="me-2" /></a>
                        <a href="#"><font-awesome-icon :icon="['fab', 'facebook']" class="mx-2" /></a>
                        <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" class="mx-2" /></a>
                        <a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" class="mx-2" /></a>
                    </div>

                </div>
                <div class="other_information d-flex justify-content-between col-6 mb-4">
                    <div class="explore pe-5">
                        <h5 class="title">Explore</h5>
                        <a href="#" v-for="link in linksFooterExplore">
                            <div class="fs_12">{{ link }}</div>
                        </a>
                    </div>
                    <div class="information pe-4">
                        <h5 class="title">Information</h5>
                        <a href="#" v-for="link in linksFooterInformation">
                            <div class="fs_12">{{ link }}</div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="info_right col-12 col-md-4" v-for="info in IstragramInfo">
                <h5 class="title d-inline-block">{{ info.title }} </h5><span class="ms-2"> {{ info.tag }}</span>
                <div class="img_container d-flex d-flex gap-3 flex-wrap">
                    <a href="#" v-for="image in info.img"><img :src="getImagePath(image)" alt="istragram_photo"></a>
                </div>
            </div>
        </div>

        <!-- COPYRIGHT  -->
        <div class="bottom text-center my-3 position-relative"><i class="fa fa-copyright me-2" aria-hidden="true"></i>
            <span>Damiano Casolari</span>
            <a href="#top_page">
                <div class="arrow-container"><i class="fa-solid fa-arrow-up text-white"></i></div>
            </a>
        </div>
    </footer>
</template>

<style lang="scss" scoped></style>