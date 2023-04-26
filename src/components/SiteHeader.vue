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
    <header class="d-flex ">
        <div class="logo_container">
            <img class="main_logo" src="../assets/img/images/dark-logo.png" alt="Main_logo">
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