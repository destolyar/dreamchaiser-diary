<script setup lang="ts">
import Layout from '@/components/Layouts/Layout.vue';
useHead({
  title: 'About DreamChaser Diary',
  meta: [
    { name: 'description', content: 'Welcome to my blog, where I outline goals and share daily efforts towards achieving them. Find valuable insights to help reach your own goals or enjoy following my journey.' }
  ],
})
</script>

<template>
  <Layout>
    <h1 :class=$style.title>About reason for this blog</h1>
    <section :class=$style.about>
      <p :class=$style.paragraph>Welcome to my blog, where I outline my goals and share my daily efforts towards achieving them. Staying focused is crucial when striving for success, and that's why I've created this platform. This way, my goals are always top of mind, and I hold myself accountable for their accomplishment with every post.</p>
      <br/>
      <p :class=$style.paragraph>I hope you can find valuable insights here to help you reach your own goals, or simply enjoy following my journey.</p>
    </section>
  </Layout>
</template>

<style module lang="scss">
@import "../assets/breakpoints.scss";

.title {
  grid-column: 1 / 3;
  font-size: 2rem;
  margin-bottom: 20px;

  @include tablets {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
}

.paragraph {
  margin-bottom: 5px;
}

.about {
  width: 100%;
  flex-grow: 1;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

</style>
