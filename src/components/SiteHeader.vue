<script>
import MainMenu from './MainMenu.vue';
export default {


    name: "SiteHeader",
    data() {


        return {}
    },
    components: {
        MainMenu
    }
}
</script>
<template>
    <header>
        <div class="logo_container">
            <img class="main_logo" src="" alt="">
        </div>
        <MainMenu />

        <div class="social_links">
            <font-awesome-icon :icon="['fab', 'twitter']" />
            <font-awesome-icon :icon="['fab', 'facebook']" />
            <font-awesome-icon :icon="['fab', 'instagram']" />
            <font-awesome-icon :icon="['fab', 'linkedin']" />
        </div>
    </header>
</template>


<style lang="scss" scoped></style>