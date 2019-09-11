<template lang="pug">
  //- Split Component
  .blk-split.flex.flex-hor-between.flex-wrap( :class="{ '--reversed': reversed, 'flex-vert-start': top }")
    //- Animation class is dynamic passed as prop
    .blk-split-5( :class="animClassLeft" v-in-viewport)
      slot(name="leftSlot")
    //- Second slot
    .blk-split-5( :class="animClassRight" v-in-viewport)
      slot(name="rightSlot")
</template>



<script>

	export default {
    props: ['animClassLeft', 'animClassRight', 'reversed', 'top']
	};

</script>

<style lang="scss" scoped>

/*--------------------------------------*/
/* FIFTY FIFTY Component
/*--------------------------------------*/
.blk-split-5 {
  width: 50%;
  position: relative;

  @media #{ $portrait } {
    width: 100%;
    margin-bottom: 25px;
    padding-right: 0;
  }
}
</style>
