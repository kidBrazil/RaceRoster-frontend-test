<template lang="pug">
  //- Prefooter Block
  .blk-pre-footer.blk-dark-Background
    .blk-main-wrapper.flex.flex-hor-betwee.flex-vert-start
      //- Column iterator
      .blk-prefooter-column(v-for="section in sections")
        .blk-prefooter-category
          |{{ section.category }}
        //- Link iterator
        router-link(
          v-for="link in section.links"
          :to="link.route"
          :title="link.a11y")
            |{{ link.linkName }}

      //- Contact section
      .blk-prefooter-column
        .blk-prefooter-category
          |Contact
        //- Links
        a(:href="contact.phoneLink" :title="contact.phoneA11y")
          i.fa.fa-phone
          |{{contact.phone}}

        a(:href="contact.emailLink" :title="contact.emailA11y")
          i.fas.fa-envelope
          |{{contact.email}}

        a(:href="contact.addressLink" :title="contact.addressA11y")
          i.fas.fa-map-marker-alt
          |{{contact.address}}
      //- Google Maps
      .blk-prefooter-column
        .blk-map-content
          google-maps(:initMap="init" :mapData="mapData")
</template>




<script>
// Import Map component
import GoogleMaps from './google-map.vue';

export default {
  name: 'PreFooter',
  props: [ 'sections', 'contact', 'map', 'mapData'],

  data: function() {
    return {
      // Styles imported from file
      init: true
    };
  },

  components: {
    'google-maps': GoogleMaps
  }
};
</script>

<style lang="scss">
/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/

.blk-map-content {
  width: 100%;
  height: 400vh;
  position: relative;
}

.blk-prefooter-column {
  width: 25%;
}


.blk-g-map {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
}

/*--------------------------------------*/

</style>
