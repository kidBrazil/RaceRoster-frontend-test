<template>
  <form id="form" v-on:keyup.enter.stop="submitForm">
    <div v-if="errors" class="blk-form-error --danger">
      <span class="u-uppercase u-bold"> Heads Up! </span>
      There are errors in the form below
    </div>
    <input name="itsatrap" type="text" class="blk-honeypot" v-model="honeypot">
    <div class="blk-input-group">
      <div class="blk-input-name u-bold">
        {{ $t("contact.fields.fname") }}
        <span class="u-required">*</span>
      </div>
      <input
        data-required
        v-model="fname"
        name="firstname"
        tab-index="0"
        aria-required="true"
        :aria-label="$t('contact.fields.fname')"
        type="text">
      <div class="blk-error-message">
        First name is required
      </div>
    </div>

    <div class="blk-input-group">
      <div class="blk-input-name u-bold">
        {{ $t("contact.fields.lname") }}
        <span class="u-required">*</span>
      </div>
      <input
        data-required
        v-model="lname"
        name="lastname"
        tab-index="0"
        aria-required="true"
        :aria-label="$t('contact.fields.fname')"
        type="text">
      <div class="blk-error-message">
        Last name is required
      </div>
    </div>

    <div class="blk-input-group">
      <div class="blk-input-name u-bold">
        {{ $t("contact.fields.email") }}
        <span class="u-required">*</span>
      </div>
      <input
        data-required
        data-email
        v-model="email"
        name="email"
        v-on:blur="validateEmail"
        tab-index="0"
        aria-required="true"
        :aria-label="$t('contact.fields.fname')"
        type="text">
        <div class="blk-error-message">
          Expected email format: example@example.com Email is required
        </div>
    </div>

    <div class="blk-input-group">
      <div class="blk-input-name u-bold">
        {{ $t("contact.fields.phone") }}
        <span class="u-required">*</span>
      </div>
      <input
        data-required
        data-phone
        v-model="phone"
        name="phone"
        tab-index="0"
        v-on:blur="validatePhone"
        aria-required="true"
        :aria-label="$t('contact.fields.fname')"
        type="text">
      <div class="blk-error-message">
        Expected email format: example@example.com Email is required
      </div>
    </div>
  </div>
    <div class="" v-in-viewport>
      <button
        type="submit"
        v-on:click.prevent="submitForm"
        class="blk-base blk-base-btn --submit --large"
        v-in-viewport
        :aria-label="$t('contact.fields.submit')">
          <span>
            {{ $t('contact.fields.submit') }}
          </span>
          <span v-if="loading">
            <i class="fas fa-circle-notch fa-spin"></i>
          </span>
      </button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
export default{
  name: 'BaseForm',
  data: function(){
    return {
      // Field Data
      fname       : '',
      lname     : '',
      phone       : '',
      email       : '',
      honeypot    : '',
      loading     : false,
      errors        : false
    };
  },
  methods: {
    // Validate and Submit form
    nothing(){
      return;
    },
    submitForm() {
      // Clear Errors First
      this.$validate.clearErrors();
      // Collect Fields
      let formFields = document.querySelectorAll('[data-required]');
      let emailField = document.querySelectorAll('[data-email]');
      let phoneField = document.querySelectorAll('[data-phone]');
      // Validate fields and store result
      let fieldsValid = this.$validate.validateFields(formFields, "");
      let emailValid  = this.$validate.validateEmail(emailField, "");
      let phoneValid  = this.$validate.validatePhone(phoneField, "");
      let spam        = this.honeypot.length > 0 ? true : false;
      // Success Callback
      let callback = this.formSubmitted;
      // Checks: Fields are filled, Email is Valid, Phone is Valid, No Spam.
      if ( fieldsValid && emailValid && phoneValid && !spam) {
        // Flip flag for UX animations
        this.loading = true;
        // Collect fields and serialize them
        axios.post('https://api.formbucket.com/f/buk_HF7IC8LpWo085LFt66YySAer', {
          fname: this.name,
          lname: this.lname,
          phone: this.phone,
          email: this.email,
        })
        .then(function (response) {
          callback();
        })
        .catch(function (error) {
          alertify.error(this.$t("Something went wrong with the server."));
        });
      }
      // Else, likely SPAM
      else {
        this.errors = true;
        console.log(this.$t("This looks like spam, please try again."));
      }
    },
    // Emit Submitted event upon Ajax success
    formSubmitted() {
      this.$emit('submitted');
    },
    // Validate Emails
    validateEmail(event) {
      // Clear errors
      this.$validate.clearErrors();
      // Load error message..
      let error = this.$t("validation.errors.email");
      // Email Regex with up to 7 trailing chars for .digital TLD
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/.test(event.target.value)){
        event.target.parentNode.classList.add('blk-error');
      }
    },
    // Validate NA phone number
    validatePhone(event) {
      // Clear errors
      this.$validate.clearErrors();
      // Load error message..
      let error = this.$t("validation.errors.phone");
      // North America Phone Regex
      if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)){
        event.target.parentNode.classList.add('blk-error');
      }
    }
  }
};
</script>

<style lang="scss">
/*-------------------------------------*/
/* BASE FORM Component Styles
/--------------------------------------*/
.blk-honeypot {
  display: none;
}

.u-required {
  color: red;
}
/*--------------------------------------*/
</style>
