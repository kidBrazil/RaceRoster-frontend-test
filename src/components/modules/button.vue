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
  name: 'BaseButton',
  props: [ 'accessibility', 'btnClass', 'btnRoute']
};

</script>
