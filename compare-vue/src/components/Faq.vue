<template>
  <div class="faq">
      <div class="container">
        <section class="section">
          <h1 class="title">FAQ</h1>
          <h2 class="subtitle is-4">Lorem ipsum and all that jazz</h2>

          <div class="columns" v-if="faqs && faqs.length">
            <div class="column is-one-third" v-for="faq of faqs" :key="faq.id">
              <div class="card">
                <div class="card-content">
                  <p class="title">{{ faq.title }}</p>
                  <p class="subtitle">{{ faq.body }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'faq',
  data: () => ({
    faqs: [],
    errors: [],
  }),

  created() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.faqs = response.data.slice(0, 10);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../main.scss';

.pd {
  padding: 2.5em 0 1.5em;
}

.answer {
  color: gray;
  margin-top: 10px !important;
}

.columns {
  flex-wrap: wrap;
}
</style>
