<template lang="pug">
  .blk-main-hero.u-parallax
    .blk-main-wrapper
      .blk-hero-content
        h1.u-bold
          |Make event management a breeze
        h2.u-light
          |ACME Events Inc. makes making beautiful event landing pages a DIY adventure.
        main-button(accessibility="Book A Demo" btnClass="blk-base-btn --pill --large --secondary-g" btnRoute="#")
          |Book A Demo
</template>



<script>

export default {
  name: 'MainHero',
  data: function() {
    return{
      heroBackground: 'hero-background.png'
    };
  }
};

</script>

<style lang="scss">

/*-------------------------------------*/
/* HERO MAIN Component Styles
/--------------------------------------*/
.blk-main-hero {
  background-image: url('../../assets/images/hero-background.png');
  padding: 85px 0;
}

.blk-hero-content {
  width: 80%;
  margin: 0 auto;

  @media #{$landscape} {
    width: 50%;
  }
}
/*--------------------------------------*/

</style>
