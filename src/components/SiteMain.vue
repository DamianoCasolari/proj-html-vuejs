<script>
import SiteJumbotron from './SiteJumbotron.vue';
import ArtistCoaching from './ArtistCoaching.vue';
import MartinGarrix from './MartinGarrix.vue';
import VideoSection from './VideoSection.vue';
import TestimonialsSlider from './TestimonialsSlider.vue';

export default {
    name: "SiteMain",
    data() {


        return {}
    },
    components: {
        SiteJumbotron,
        ArtistCoaching,
        MartinGarrix,
        VideoSection,
        TestimonialsSlider
    }
}
</script>


<template>
    <SiteJumbotron /> <!-- BANNER-->
    <ArtistCoaching /> <!-- SECTION1-->
    <MartinGarrix /> <!-- SECTION2-->
    <VideoSection /> <!-- SECTION3-->
    <TestimonialsSlider /> <!-- SECTION4-->
</template>


<style lang="scss" scoped></style>