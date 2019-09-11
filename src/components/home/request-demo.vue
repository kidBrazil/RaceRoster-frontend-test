<template>
  <section class="blk-full-section --accent-bkg --triangle-top --form-padding">
    <div class="blk-main-form">
      <h1 class="u-bold">Book A Demo</h1>
      <!-- Split Component 60 / 40 Reversed -->
      <split-sixty :reverse="false" :top="false">
        <!-- Right Split [reversed:true] -->
        <template slot="leftSlot">
          <base-form
            v-on:submitted="swapForm"
            v-if="!formSubmitted" data-form></base-form>
          <div class="blk-acknowledge u-text-center" v-if="formSubmitted" data-form-thankyou>
            <p>
              Thanks!
            </p>
          </div>
        </template>

        <template slot="rightSlot">

        </template>
      </split-sixty>
    </div>
  </section>
</template>

<script>
// Imports
import BaseForm     from '../modules/form-fields.vue';
import SplitSixty   from '../modules/sixty-forty.vue';

export default{
  name: 'ContactForm',
  data: function() {
    return{
      // Button Data
      BtnData: {
        accessibility: 'View Our Case Studies',
        btnRoute: '/casestudies',
        btnClass: 'blk-btn blk-form-btn --space-top-sm'
      },
      thankyouIcon: 'contact/blk_FORM_airplane.svg',
      // Form submission flag for animations
      formSubmitted: false
    };
  },
  methods: {
    swapForm() {
      let animInterval = 800; // Matches CSS
      // Hide the form visually
      var formEl = document.querySelectorAll('[data-form]');
      requestAnimationFrame(() => {
        this.addClass(formEl, '--form-sent');
      });
      // Swap out the components via the flag
      setTimeout(() => {
        this.formSubmitted = true;
      },animInterval);
      // Reveal Thankyou
      setTimeout(() => {
        var thanksEl = document.querySelectorAll('[data-form-thankyou]');
        requestAnimationFrame(() => {
          this.addClass(thanksEl, '--form-notify');
        });
      },animInterval + 100);
    }
  },
  components: {
    'base-form'     : BaseForm,
    'split-sixty'   : SplitSixty
  }
};
</script>

<style lang="scss">
/*-------------------------------------*/
/* Contact--Form Component Styles
/--------------------------------------*/
.--form-padding {
  padding: 250px 0 150px;
  @media #{$portrait} {
    padding: 125px 0 75px;
  }
  @media #{$phone-only} {
    padding: 125px 0 50px;
  }
}
.blk-form-title {
  font-size: 7.9vw;
  font-weight: 900;
  letter-spacing: 2px;
  @media #{$portrait} {
    font-size: 13.2vw;
  }
  @media #{$phone-only} {
    font-size: 17.2vw;
  }
}
.blk-form-subtitle {
  font-size: 1.8vw;
  font-weight: 300;
  @media #{$portrait} {
    font-size: 3.2vw;
  }
}
.blk-main-form {
  width: 100%;
  padding: 0 10%;
  color: $color-brand-bkg;
  .blk-social-links {
    font-size: 380%;
    margin: 2vw 0;
    @media #{$portrait} {
      margin: 30px 0;
      font-size: 9vw;
    }
    @media #{$phone-only} {
      margin: 20px 0;
      font-size: 12vw;
    }
    @media #{$laptop-only} {
      font-size: 3vw;
    }
    a {
      display: block;
      margin: 0 4%;
      @media #{$phone-only} {
        margin: 0 6%;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  form {
    margin-left: 40px;
    transition: opacity .8s;
    @media #{$portrait} {
      margin-left: 0;
      margin-top: 40px;
    }
  }
}
.blk-acknowledge {
  opacity: 0;
  width: 100%;
  margin-left: 40px;
  transition: opacity .8s;
  padding: 2% 10%;
  @media #{$portrait} {
    margin-left: 0;
    margin-top: 40px;
  }
  p {
    padding-top: 15px;
  }
  img {
    width: 100%;
  }
}
.--form-sent {
  opacity: 0;
}
.--form-notify {
  opacity: 1;
}
/*--------------------------------------*/
</style>
