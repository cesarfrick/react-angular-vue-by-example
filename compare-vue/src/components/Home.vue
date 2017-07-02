<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ heading }}</h1>
          <div class="is-two-thirds column is-paddingless">
            <h2 class="subtitle is-4">{{ subheading }}</h2>
          </div>
          <a class="button is-large is-primary" id="learn">Learn more</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      heading: 'Soaring to new heights',
      subheading: 'Et aliqua reprehenderit dolore laboris enim id cupidatat ad sit do sint proident reprehenderit occaecat. Nulla ipsum ex veniam esse.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../main.scss";

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

h2 {
  margin: 1.5rem 0 2rem !important;
}
</style>
