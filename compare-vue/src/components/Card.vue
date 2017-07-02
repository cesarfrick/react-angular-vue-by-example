<template>
    <div class="card">
        <div class="card-content">
            <p class="title is-spaced">{{ title }}</p>
            <p class="subtitle">{{ body }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'card',
  props: ['title', 'body'],
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';

.card {
    height: 100%;

    &-content {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }
}
</style>
