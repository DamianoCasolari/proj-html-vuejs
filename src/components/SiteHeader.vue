<script>
import { navbarHeaderInfo } from "../data/navbarHeaderInfo.js"
import MainMenu from './MainMenu.vue';
import MainMenuPhone from './MainMenuPhone.vue';
export default {


    name: "SiteHeader",
    data() {
        return {
            navbarHeaderInfo,
            headerScroll: true,
            lastPosition: 0,
            shadow_on: false,
        }
    },
    components: {
        MainMenu,
        MainMenuPhone

    },
    methods: {
        scrollFunction() {
            this.shadow_on = false
            const currentPosition = window.pageYOffset;
            if (currentPosition > 145.56) {
                this.shadow_on = true
                if (currentPosition > this.lastPosition) {
                    this.headerScroll = false;
                } else {
                    this.headerScroll = true;
                }
                this.lastPosition = currentPosition;
            }
        }
    },

    mounted() {
        window.addEventListener('scroll', this.scrollFunction);
    }
}

</script>
<template>
    <header class="d-flex justify-content-between align-items-center container-lg"
        :class="headerScroll ? 'header_on' : 'header_off', shadow_on ? ' header_shadow' : ''">
        <div class="logo_container">
            <img class="main_logo" src="../assets/img/images/dark-logo.png" alt="Main_logo">
        </div>
        <MainMenu :menu="navbarHeaderInfo" />
        <div class="right_side align-items-center d-flex">
            <div class="social_links d-none d-sm-flex">
                <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" class="mx-2" /></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'facebook']" class="mx-2" /></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" class="mx-2" /></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" class="mx-2" /></a>
            </div>

            <MainMenuPhone :menu="navbarHeaderInfo" />
        </div>
    </header>
</template>


<style lang="scss" scoped>
.header_on {
    animation: on 0.3s linear forwards;

}

.header_off {
    animation: off 0.3s linear forwards;
}

.header_shadow {
    filter: drop-shadow(3px 3px 4px rgb(77, 77, 77));
}


@keyframes on {

    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes off {

    from {
        opacity: 1;

    }

    to {
        opacity: 0;


    }
}
</style>