<template lang="pug">
  section.styleguide-section.blk-main-wrapper
    //- Main Section Title
    h1
      |Mini Design System
    //- Split Component
    fifty-fifty(:top="true")
      //- Left Side Split
      template(v-slot:leftSlot)
        //-Section Title
        h5.u-uppercase.spacing-large
          |Brand Colours
        //- Color Samples
        .blk-sampler( v-for="sample in colorSamples")
          .h5.u-light(v-html="sample.title")
          .flex.flex-vert-center.flex-hor-start
            .blk-color-swatch( v-for="swatch in sample.swatches" :class="swatch")
              span.u-bold
                |TEXT

      //- Right Side Split
      template(v-slot:rightSlot)
        //-Section Title
        h5.u-uppercase.spacing-large
          |Typography
        .h5.u-light.spacing-large
          |Open Sans - Google font (headers + body)

        //- Headers
        h6.u-bold
          |Header 6 - 16px
          span.u-light Subheader
        h5.u-bold
          |Header 5 - 18px
          span.u-light Subheader
        h4.u-bold
          |Header 4 - 22px
          span.u-light Subheader
        h3.u-bold
          |Header 3 - 26px
          span.u-light Subheader
        h2.u-bold
          |Header 2 - 30px
          span.u-light Subheader
        h1.u-bold
          |Header 1 - 36px
          span.u-light Subheader
        //- Main Paragraph
        p.spacing-xl
          span.u-bold
            |Body text - 16px 1.4 line height regular font-weight:
          |A beautiful little sunset. Talent is a pursued interest. That is to say, anything you practice you can do. This is probably the greatest thing that's ever happened in my life. These things happen automatically. All you have to do is just let them happen.

        //- Link
        a.spacing-large(href="#" title="Placeholder Link")
          |Link to somewhere (semibold + custom underline)

        .h5.u-bold
          |Buttons
        //- Buttons Pill Style
        .flex.flex-vert-center.flex-hor-start
          .blk-btn-sample(v-for="button in pillButtons")
            |{{button.btnName}}
            main-button(accessibility="Test Button" :btnClass="button.btnClass" btnRoute="#")
              | Sign Up
        //- Buttons Square Style
        .flex.flex-vert-center.flex-hor-start
          .blk-btn-sample(v-for="button in squareButtons")
            |{{button.btnName}}
            main-button(accessibility="Test Button" :btnClass="button.btnClass" btnRoute="#")
              | Sign Up
</template>




<script>
import FiftyFifty from '../modules/fifty-fifty.vue';
import MainButton from '../modules/button.vue';

export default {
  name: 'StyleGuide',

  data: function(){
    return {
      colorSamples: [
        {
          title: 'Primary Brand Colour',
          swatches: [
            '--primary',
            '--primary-g'
          ]
        },
        {
          title: 'Secondary Brand Colour',
          swatches: [
            '--secondary',
            '--secondary-g'
          ]
        },
        {
          title: 'Success&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Warning&nbsp;&nbsp;&nbsp;&nbsp;Danger&nbsp;&nbsp;&nbsp;&nbsp;Default',
          swatches: [
            '--success',
            '--warning',
            '--danger',
            '--default'
          ]
        },
        {
          title: 'Font',
          swatches: [
            '--font'
          ]
        },
      ],
      pillButtons: [
        {
          btnName: 'Pill Small',
          btnClass: 'blk-btn-pill --small'
        },
        {
          btnName: 'Pill Medium',
          btnClass: 'blk-btn-pill --med'
        },
        {
          btnName: 'Pill Large',
          btnClass: 'blk-btn-pill --large'
        },
      ],
      squareButtons: [
        {
          btnName: 'Small',
          btnClass: 'blk-btn-square --small'
        },
        {
          btnName: 'Medium',
          btnClass: 'blk-btn-square --med'
        },
        {
          btnName: 'Large',
          btnClass: 'blk-btn-square --large'
        },
      ]
    };
  },
  components: {
    'fifty-fifty': FiftyFifty,
    'main-button': MainButton
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/
.styleguide-section {
  padding-top: 80px;
}
// Swatches
.blk-color-swatch {
  width: 80px;
  height: 80px;
  position: relative;
  margin: 20px 20px 30px 0;
  background: grey;
  color: $white;
  font-size: 18px;
  transition: all .4s;
  
  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  &:last-child {
    margin-right: 0;
  }

  span {
    @include center(both);
  }
}

// Brand Colors
.--primary {
  background: $color-brand-primary;
}
.--primary-g {
  background: linear-gradient(41.55deg, $color-brand-primary 0%, $color-brand-accent 100%);
}
.--secondary {
  background: $color-brand-secondary;
}
.--secondary-g {
  background: linear-gradient(221.55deg, $color-brand-secondary-accent 0%, $color-brand-secondary 100%);
}
.--font {
  background: $color-font-primary;
}
/*--------------------------------------*/

</style>
