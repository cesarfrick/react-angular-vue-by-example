<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ this.heading }}</h1>
        <div class="is-two-thirds column is-paddingless">
          <h2 class="subtitle is-4">{{ this.subheading }}</h2>
        </div>
          <a class="button is-large is-primary" id="learn">Learn more</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hero',
  props: ['heading', 'subheading'],
};
</script>

<style lang="scss" scoped>
@import '../main.scss';

.hero {
  background: url('../assets/clouds.jpg');
  background-size: cover;

  .title {
    @include mobile {
      font-weight: bold;
    }

    @include tablet {
      font-size: 2.5rem;
    }

    @include desktop {
      font-size: 4rem;
      margin-top: 2rem;
    }
  }
}
</style>
