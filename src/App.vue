<script>
import CountdownEvent from './components/CountdownEvent.vue';
import SiteHeader from './components/SiteHeader.vue';
import SiteMain from './components/SiteMain.vue';
import SiteFooter from './components/SiteFooter.vue';

export default {
  data() {
    return {
      LoadingE: true
    }
  },
  components: {
    CountdownEvent,
    SiteHeader,
    SiteMain,
    SiteFooter
  },
  methods: {

    loadingPage() {
      setTimeout(() => {
        this.LoadingE = false
      }, 1500)
    }
  },
  mounted() {
    const anchorTags = document.querySelectorAll('a[href="#"]');
    anchorTags.forEach(a => {
      a.addEventListener('click', event => {
        event.preventDefault();
      });
    });

    this.loadingPage()
  }
}

</script>

<template>
  <div>
    <div v-if="LoadingE">
      <div class="logo_container">
        <img class="splash_page" src="./assets/img/images/dark-logo.png" alt="Main_logo">
      </div>
    </div>
    <div v-show="!LoadingE">
      <CountdownEvent />
      <SiteHeader />
      <SiteMain />
      <SiteFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo_container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .splash_page {
    opacity: 1;
    animation: wakeup 1.5s linear both;
  }

}

@keyframes wakeup {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
