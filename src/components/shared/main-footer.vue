<template lang="pug">
  .blk-main-Footer
    .blk-main-wrapper.flex.flex-hor-between.flex-vert-center
      .blk-footer-copyright
        |&#169; Copyright Acme Inc. {{ year }}
      .blk-footer-social.flex-flex-hor-between.flex-vert-center
        a.blk-social-link( v-for="link in socials" :href="link.route" :title="link.a11y")
          i(:class="link.iconClass")
          span.u-screenreader
            |{{ link.a11y }}



</template>



<script>
import {socialMedia} from '../../project-data.js';

export default{
  name: 'MainFooter',
  data: function(){
    return {
      year: null,
      socials: socialMedia.links
    };
  },
  created: function() {
    // Get year for footer Copyright
    this.year = (new Date()).getFullYear();
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* MAIN FOOTER Component Styles
/--------------------------------------*/
.blk-main-Footer {
  color: $white;
  background: $color-font-primary;
  padding: 40px 0;
}

.blk-social-link {
  margin: 0 10px;
  font-weight: 400;
  font-size: 31px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
}

.blk-footer-copyright {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .29px;
  line-height: 19px;
  color: $white;
}

/*--------------------------------------*/

</style>
