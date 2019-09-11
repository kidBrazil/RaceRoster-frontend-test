<template lang="pug">
  //- Prefooter Block
  .blk-pre-footer.blk-dark-Background
    .blk-main-wrapper.flex.flex-hor-between.flex-vert-stretch
      //- Column iterator
      .blk-prefooter-column(v-for="section in sections")
        .blk-prefooter-category
          |{{ section.category }}
        //- Link iterator
        router-link(
          v-for="link in section.links"
          :to="link.route"
          class="blk-footer-link"
          :title="link.a11y")
            |{{ link.linkName }}

      //- Contact section
      .blk-prefooter-column
        .blk-prefooter-category
          |Contact
        //- Links
        a.blk-footer-link(:href="contact.phoneLink" :title="contact.phoneA11y")
          i.fa.fa-phone
          |{{contact.phone}}

        a.blk-footer-link(:href="contact.emailLink" :title="contact.emailA11y")
          i.fas.fa-envelope
          |{{contact.email}}

        a.blk-footer-link(:href="contact.addressLink" :title="contact.addressA11y")
          i.fas.fa-map-marker-alt
          |{{contact.address}}
      //- Google Maps
      a.blk-prefooter-column(:href="contact.addressLink" :title="contact.addressA11y" target="_blank")
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
// Footer Columns
.blk-prefooter-column {
  width: 20%;
  padding-right: 30px;
  position: relative;

  &:last-child {
    padding: 0;
  }
}


// Google Maps
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
