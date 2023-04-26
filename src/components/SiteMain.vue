<script>
import SiteJumbotron from './SiteJumbotron.vue';

export default {
    name: "SiteMain",
    data() {


        return {}
    },
    components: {
        SiteJumbotron
    }
}
</script>


<template>
    <SiteJumbotron />
    <div class="po">

    </div>
</template>


<style lang="scss" scoped>
.po {
    height: 600px;
    // background-color: black;
    background-image: url("../img/images/artist-shape-02-768x415.png"), url("../img/images/artist-shape-01-600x577.png");
    background-position: top left, bottom right;
    padding: 30px 0;
}
</style>