<script>
import SiteJumbotron from './SiteJumbotron.vue';
import ArtistCoaching from './ArtistCoaching.vue';

export default {
    name: "SiteMain",
    data() {


        return {}
    },
    components: {
        SiteJumbotron,
        ArtistCoaching
    }
}
</script>


<template>
    <SiteJumbotron />
    <ArtistCoaching />
</template>


<style lang="scss" scoped></style>