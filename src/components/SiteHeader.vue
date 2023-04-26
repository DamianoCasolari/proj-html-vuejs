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
    <header class="d-flex justify-content-between align-items-center container-xl">
        <div class="logo_container">
            <img class="main_logo" src="../assets/img/images/dark-logo.png" alt="Main_logo">
        </div>
        <MainMenu />

        <div class="social_links">
            <font-awesome-icon :icon="['fab', 'twitter']" class="mx-2" />
            <font-awesome-icon :icon="['fab', 'facebook']" class="mx-2" />
            <font-awesome-icon :icon="['fab', 'instagram']" class="mx-2" />
            <font-awesome-icon :icon="['fab', 'linkedin']" class="mx-2" />
        </div>
    </header>
</template>


<style lang="scss" scoped></style>