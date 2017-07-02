<template>
  <div id="app">
    <div class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">My Company</a>
        </div>

        <span :class="['nav-toggle', { 'is-active': isActive }]"
              @click="toggleNav"
        >
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div :class="['nav-right', 'nav-menu', { 'is-active': isActive }]">
          <router-link to="/" class="nav-item r-item">Home</router-link>
          <router-link to="/faq" class="nav-item r-item">Features</router-link>
          <router-link to="/faq" class="nav-item r-item">About</router-link>
          <router-link to="/faq" class="nav-item r-item">Faq</router-link>

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
    </div>
    <router-view></router-view>

    <footer class="footer is-primary">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p>And this right here is a spiffy footer, where you can put stuff.</p>
          </div>
          <div class="column has-text-right">
            <a class="icon" href="#"><i class="fa fa-facebook"></i></a>
            <a class="icon" href="#"><i class="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return { isActive: false };
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss">
@import "main.scss";

.nav {
  background-color: #383838;

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

footer {
  background-color: $primary !important;

  .icon {
    color: #fff;
    margin-left: 20px;
  }
}

</style>
