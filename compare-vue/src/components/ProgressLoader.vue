<template>
  <div :class="['loader-container', { 'loader-full-page': this.fullPage }]">
    <i class="fa fa-spinner" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  name: 'progress-loader',
  props: ['fullPage'],
};
</script>

<style lang="scss" scoped>
@import '../../node_modules/bulma/bulma.sass';

.loader-container {
  display: flex;
  height: 100%;
  position: relative;
  width: 100%;
}

.loader-full-page {
  height: 100vh;
}

.fa-spinner {
  display: flex;
  width: 100%;

  &:before {
    animation: spinner 1s linear infinite;
    font-size: 400%;
    margin: auto;
  }
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
