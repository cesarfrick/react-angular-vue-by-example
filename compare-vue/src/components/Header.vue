<template>
  <header class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <router-link to="/" class="nav-item">My Company</router-link>
        </div>

        <span :class="['nav-toggle', { 'is-active': isActive }]"
              @click="toggleNav"
        >
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div :class="['nav-right', 'nav-menu', { 'is-active': isActive }]">
          <nav v-for="(link, index) in routeLinks" :key="index">
            <router-link :to="link.route" class="nav-item r-item">{{ link.text }}</router-link>
          </nav>

          <div class="nav-item">
            <p class="control">
              <a class="button is-primary is-outlined">
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>

                <span>Join Now</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'header',
  data: () => ({
    routeLinks: [
      { route: '/', text: 'Home' },
      { route: '/faq', text: 'Features' },
      { route: '/faq', text: 'About' },
      { route: '/faq', text: 'Faq' },
    ],
    isActive: false,
  }),
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../main.scss';

.nav {
  background-color: #3b3b3b;

  a:hover {
    color: gray;
  }

  &-left a{
    color: #fff;
    font-weight: bold;
  }

  .r-item {
    color: #c1c1c1;
    padding: .5rem 1.75rem;

    @include mobile {
      color: gray;
      &:hover {
        background-color: #f1f1f1;
      }
    }
  }

  &-toggle {
    span {
      background-color: #c1c1c1;
    }
  }
}
</style>
