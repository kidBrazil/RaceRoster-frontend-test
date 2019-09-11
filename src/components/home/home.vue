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
    //- Youtube Embed
    section.blk-dark-Background.u-text-center
      youtube(video-id="m_KBvP0_8Tc")
    //- PreFooter
    pre-footer(
      :sections="prefooterData.sections"
      :contact="prefooterData.contactInfo"
      :map="prefooterData.mapInfo"
      :mapData="mapData")
    //- Main Footer
    main-footer
</template>

<script>
//Local Component registration
import HeroMain           from './hero-main.vue';
// Import SEO From File
import { stagingBuild, template, social, general }       from '../../seo-meta.js';
import { preFooter }      from '../../project-data.js';

export default{
  name: 'HomePage',
  // TODO - Edit meta Title

  data: function(){
    return {
      prefooterData: preFooter,
      mapData: {
        pinLocation:  {lat: 42.9817428, lng: -81.2537265},
        mapCenter: {lat: 42.9817428, lng: -81.2537265},
        //mapIcon: require('../../assets/images/map/location-ICON.png'),
        mapStyle: 'hybrid',
        zoom: false,
        controls: false,
        kbShortcuts: false,
        scroll: false,
        drag: false,
        zoomLevel: 17.2
      }
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

  mounted() {
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }
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

.blk-dark-Background {
  background: $color-bkg-light;
  padding: 60px 0;
}
/*--------------------------------------*/

</style>
