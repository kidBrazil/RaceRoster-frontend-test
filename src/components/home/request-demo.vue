<template>
  <section class="blk-main-wrapper">
    <div class="blk-main-form">
      <h1 class="u-bold">Book A Demo</h1>
      <!-- Split Component 60 / 40 Reversed -->
      <split-fifty :reverse="false" :top="true">
        <!-- Right Split [reversed:true] -->
        <template slot="leftSlot">
          <base-form
            v-on:submitted="swapForm"
            v-if="!formSubmitted" data-form></base-form>
          <div class="blk-acknowledge u-text-center" v-if="formSubmitted" data-form-thankyou>
            <div class="flex flex-hor-start flex-vert-center">
              <div class="blk-ack-icon --secondary-g">
                <i class="fas fa-check"></i>
              </div>
              <div class="blk-ack-content">
                <h2 class="u-bold">
                  Demo request sent!
                </h2>
                <p>
                  Someone will reach out to schedule your demo within the next 48 business hours
                </p>
                <a href="#" title="Request Another Demo" class="blk-main-link">
                  Request another demo
                </a>
              </div>
            </div>
          </div>
        </template>

        <template slot="rightSlot">
          <div class="flex flex-hor-end">
            <universal-image source="event-picture.png" a11y="Request a demo form our team!"></universal-image>
          </div>
        </template>
      </split-fifty>
    </div>
  </section>
</template>

<script>
// Imports
import BaseForm     from '../modules/form-fields.vue';
import SplitFifty   from '../modules/fifty-fifty.vue';

export default{
  name: 'ContactForm',
  data: function() {
    return{
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
    'split-fifty'   : SplitFifty
  }
};
</script>

<style lang="scss">
/*-------------------------------------*/
/* Contact--Form Component Styles
/--------------------------------------*/
.blk-main-form {
  width: 100%;
  padding: 100px 0;

  picture {
    width: 80%;
    right: 0;
    margin-top: 35px;

    @media #{ $portrait } {
      width: 100%;
      margin-top: 30px;
    }
  }
}
.blk-acknowledge {
  opacity: 0;
  width: 100%;
  transition: opacity .8s;



  // Check Icon
  .blk-ack-icon {
    width: 20%;
    padding-top: 20%;
    color: $white;
    position: relative;
    font-size: 50px;
    border-radius: 100%;

    i {
      @include center(both);
    }
  }

  // Text content
  .blk-ack-content {
    width: 60%;
    text-align: left;
    padding: 0 20px;
  }

  h2,
  p {
    margin-bottom: 10px;
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
