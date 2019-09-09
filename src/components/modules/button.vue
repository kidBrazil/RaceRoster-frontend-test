<template lang="pug">
  router-link(
    :title="accessibility"
    :aria-label="accessibility"
    :class="btnClass"
    :to="btnRoute")
    slot
</template>

<script>

export default {
  name: 'BaseTemplate',
  props: [ 'accessibility', 'btnClass', 'btnRoute']
};

</script>

<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
