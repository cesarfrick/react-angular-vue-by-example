<template>
  <div class="faq">
      <div class="container">
        <loader v-if="this.isLoading" :full-page="true"></loader>

        <section class="section" v-else>
          <h1 class="title">FAQ</h1>
          <h2 class="subtitle is-4">Lorem ipsum and all that jazz</h2>

          <div class="columns" v-if="faqs && faqs.length">
            <div class="column is-one-third" v-for="faq of faqs" :key="faq.id">
              <faq-card :title="faq.title" :body="faq.body"></faq-card>
            </div>
          </div>
        </section>
      </div>
  </div>
</template>

<script>
import api from '../api/faq';
import ProgressLoader from './ProgressLoader';
import Card from './Card';

export default {
  name: 'faq',
  data: () => ({
    faqs: [],
    errors: [],
    isLoading: true,
  }),

  created() {
    api.getFaqs()
      .then((response) => {
        this.faqs = response.data.slice(0, 10);
        this.isLoading = false;
      })
      .catch((e) => {
        this.errors.push(e);
        this.isLoading = false;
      });
  },
  components: {
    'faq-card': Card,
    loader: ProgressLoader,
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
