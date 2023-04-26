<script>
import CountdownEvent from './components/CountdownEvent.vue';
import SiteHeader from './components/SiteHeader.vue';
import SiteMain from './components/SiteMain.vue';
import SiteFooter from './components/SiteFooter.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    CountdownEvent,
    SiteHeader,
    SiteMain,
    SiteFooter
  },
  mounted() {
    const anchorTags = document.querySelectorAll('a[href="#"]');
    anchorTags.forEach(a => {
      a.addEventListener('click', event => {
        event.preventDefault();
      });
    });
  }

}


</script>

<template>
  <CountdownEvent />
  <SiteHeader />
  <SiteMain />
  <SiteFooter />
</template>

<style lang="scss" scoped></style>
