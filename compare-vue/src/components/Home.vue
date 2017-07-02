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

    <section class="section">
      <div class="container">
        <div class="columns pd is-desktop">
          <div class="column is-1 has-text-centered">
            <i class="fa fa-cog is-primary"></i>
          </div>
          <div class="column is-one-third-desktop">
            <p class="title"><strong>We provide superior logistics so that your business can succeed in a crazy world</strong></p>
          </div>
          <div class="column">
            <p>Enim exercitation laborum labore enim qui minim laborum officia eiusmod. Veniam in culpa sint irure adipisicing velit minim adipisicing exercitation reprehenderit sunt laborum.</p>
          </div>
        </div>

        <div class="columns pd" v-if="testimonials && testimonials.length">
          <div class="column" v-for="(testimonial, index) in testimonials" :key="index">
            <testimony :title="testimonial.testimony" :body="`- ${testimonial.author}`"></testimony>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from './Card';

export default {
  name: 'home',
  data() {
    return {
      heading: 'Soaring to new heights',
      subheading: 'Et aliqua reprehenderit dolore laboris enim id cupidatat ad sit do sint proident reprehenderit occaecat. Nulla ipsum ex veniam esse.',
      testimonials: [
        { testimony: 'Creating Vue components is quite easy!', author: 'Cesar Frick' },
        { testimony: 'It looks like React meets Angular', author: 'Somebody Somewhere' },
        { testimony: 'It\'s quite easy to grasp the essentials of it', author: 'César Mijares' },
      ],
    };
  },
  components: {
    testimony: Card,
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

.fa-cog {
  color: $primary;
  font-size: 40px;
}

#learn {
  @include desktop {
    margin-bottom: 2rem;
  }
}

.pd {
  @include tablet {
    padding: 2em 0;
  }
}
</style>
