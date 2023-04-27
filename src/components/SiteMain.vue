<script>
import SiteJumbotron from './SiteJumbotron.vue';
import ArtistCoaching from './ArtistCoaching.vue';
import MartinGarrix from './MartinGarrix.vue';
import VideoSection from './VideoSection.vue';

export default {
    name: "SiteMain",
    data() {


        return {}
    },
    components: {
        SiteJumbotron,
        ArtistCoaching,
        MartinGarrix,
        VideoSection
    }
}
</script>


<template>
    <SiteJumbotron /> <!-- BANNER-->
    <ArtistCoaching /> <!-- SECTION1-->
    <MartinGarrix /> <!-- SECTION2-->
    <VideoSection /> <!-- SECTION3-->
</template>


<style lang="scss" scoped></style>