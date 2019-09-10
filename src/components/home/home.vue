<template lang="pug">
  //- Wrapper Container
  section.blk-main-content
    //- Main Hero Component
    hero-main.u-text-center
    //- Intro Content Block
    section.blk-intro
      .blk-main-wrapper.flex.flex-hor-between.flex-vert-start
        .blk-intro-image
          universal-image( source="heart-lamps.png" a11y="Make your events memorable!")
        .blk-intro-content
          h2.u-bold
            |Make your ticket holders happy
          p.spacing-large
            |A beautiful little sunset. Talent is a pursued interest. That is to say, anything you practice you can do. This is probably the greatest thing that's ever happened in my life. These things happen automatically. All you have to do is just let them happen.
          p.spacing-xl
            |Just let go - and fall like a little waterfall. Nothing's gonna make your husband or wife madder than coming home and having a snow-covered dinner. Just pretend you are a whisper floating across a mountain. Zip. That easy.
          a.blk-main-link.spacing-large(href="#" title="View our feature list.")
            |View full feature list

    //- Main Footer
    main-footer
</template>
<script>

//Local Component registration
import HeroMain           from './hero-main.vue';
// Import SEO From File
import { stagingBuild, template, social, general }       from '../../seo-meta.js';

export default{
  name: 'HomePage',
  // TODO - Edit meta Title

  data: function(){
    return {

    };
  },
  // Meta SEO Function
  metaInfo() {
    return {
      title: general.title,
      meta: [
        // SEO
        { vmid: 'desc', name: 'description', content: general.desc },
        { vmid: 'ogtitle', property: 'og:title', content: general.title + template.slugAddon },
        { vmid: 'ogimage', property: 'og:image', content: (stagingBuild ? template.stageUrl : template.liveUrl) + this.loadImage(social.ogimage) },
        { vmid: 'ogdesc', property: 'og:description', content: general.desc },
        { vmid: 'twtitle', name: 'twitter:title', content:  general.title + template.slugAddon },
        { vmid: 'twimage', name: 'twitter:image', content: (stagingBuild ? template.stageUrl : template.liveUrl) + this.loadImage(social.twimage) },
        { vmid: 'twdesc', name: 'twitter:description', content: general.desc }
      ]
    };
  },

  components: {
    'hero-main'         : HeroMain
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* HOME Component Styles
/--------------------------------------*/
.blk-intro {
  width: 100%;
  position: relative;
  padding: 95px 0;

  .blk-intro-image {
    width: 30%;
  }

  .blk-intro-content {
    width: 70%;
    padding-left: 30px;
  }
}
/*--------------------------------------*/

</style>
