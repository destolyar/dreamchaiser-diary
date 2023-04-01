<script setup lang="ts">
import Layout from "../components/Layouts/Layout.vue"
import DiaryList from "@/components/Diary/DiaryList.vue"

useHead({
  title: 'DreamChaser Diary',
  meta: [
    { name: 'description', content: 'DreamChaser Diary - a blog by an aspiring developer, detailing daily progress towards achieving personal and professional goals. Explore the journey of personal growth, learn from the experiences, and get inspired to reach your own milestones in the world of software development.' }
  ],
})
</script>
  
<template>
  <Layout>
    <h1 :class=$style.pageTitle>Diary and current goals</h1>
    <DiaryList />
  </Layout>
</template>

<style module lang="scss">
@import "../assets/breakpoints.scss";

.pageTitle {
  grid-column: 1 / 3;
  flex-grow: 1;
  flex-basis: 100%;
  font-size: 2rem;
  margin-bottom: 30px;

  @include tablets {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
}
</style>