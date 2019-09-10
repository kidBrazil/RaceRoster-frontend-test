<template lang="pug">
  //- Nav element with Aria
  nav.blk-main-nav(aria-role="navigation" role="navigation")
    //- Wrapper Class
    .blk-main-wrapper.flex.flex-nowrap.flex-hor-between.flex-vert-center
      //- Logo Link
      a(:href="homeLink" :title="homeTitle" class="blk-main-nav-branding")
        img(:src="loadImage(homeBrand)")
      //- Actual navigational links in loop
      .blk-main-nav-links.u-uppercase
        router-link(
          v-for="link in links"
          :to="link.route"
          active-class="--active"
          :class="link.linkClass"
          :title="link.linkTitle"
          aria-role="menuitem"
          exact)
            |{{ link.linkName  }}
</template>



<script>
import {navigation, generalApp} from '../../project-data.js';

export default{
  // <router-link> element is a custom element derived from vue-router. use :to - to bind.
  data: function(){
    return{
      // Refer to routes.js file for available routes.
      links: navigation.links,
      homeLink: generalApp.homeLink,
      homeTitle: generalApp.homeTitle,
      homeBrand: generalApp.homeBrand
    };
  },

  methods: {
    loadImage(path){
      return require('../../assets/images/' + path);
    },
    // Change Language METHOD
    change () {
      let current = this.$locale.current();
      if (current === 'en') {
        this.$locale.change('pt');
      } else {
        this.$locale.change('en');
      }
    }
  }
};

</script>



<style lang="scss">

/*--------------------------------------*/
/* Main Component Styles                */
/*--------------------------------------*/
.blk-main-nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 0;
  z-index: 10;
  transition: all, .3s;
  background: $color-font-primary;

  img {
    width: 100%;
  }

  .blk-main-nav-branding {
    min-width: 120px;
    height: auto;
    width: 10%;
    opacity: 1;
    transition: all, .3s;

    &:hover {
      cursor: pointer;
      opacity: .8;
    }
  }

  .blk-main-nav-links {
    color: $color-brand-primary;
  }

  .blk-main-nav-links a {
    margin: 0 10px;
    text-shadow: 1px 1px 3px rgba(0,0,0,0);
    transition: all, .3s;
    color: $white;

    &:hover {
      text-shadow: 1px 1px 3px rgba(0,0,0,.6);
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
/*--------------------------------------*/

</style>
