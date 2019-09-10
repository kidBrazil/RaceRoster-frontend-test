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
        a(href="tel:18885555555" title="Phone Number")
          i.fa.fa-phone
          |1-888-555-5555

        a(href="tel:18885555555" title="Phone Number")
          i.fa.fa-phone
          |1-888-555-5555

        a(href="tel:18885555555" title="Phone Number")
          i.fa.fa-phone
          |1-888-555-5555
</template>




<script>

export default {
  name: 'PreFooter',
  props: [ 'sections', 'contact', 'map']
};
</script>

<style lang="scss">
/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
