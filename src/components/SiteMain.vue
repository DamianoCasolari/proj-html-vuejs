<script>
import SiteJumbotron from './SiteJumbotron.vue';
import ArtistCoaching from './ArtistCoaching.vue';
import MartinGarrix from './MartinGarrix.vue';
import VideoSection from './VideoSection.vue';
import TestimonialsSlider from './TestimonialsSlider.vue';
import LatestCourses from './LatestCourses.vue';
import LatestFromTheBlog from './LatestFromTheBlog.vue';
import LetsWorkTogheter from './LetsWorkTogheter.vue';

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
        TestimonialsSlider,
        LatestCourses,
        LatestFromTheBlog,
        LetsWorkTogheter
    }
}
</script>


<template>
    <SiteJumbotron /> <!-- BANNER-->
    <ArtistCoaching /> <!-- SECTION1-->
    <MartinGarrix /> <!-- SECTION2-->
    <VideoSection /> <!-- SECTION3-->
    <TestimonialsSlider /> <!-- SECTION4-->
    <LatestCourses /> <!-- SECTION5-->
    <LatestFromTheBlog /> <!-- SECTION6-->
    <LetsWorkTogheter /> <!-- SECTION7-->
</template>


<style lang="scss" scoped></style>