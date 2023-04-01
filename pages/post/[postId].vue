<script setup lang="ts">
import PostLayout from '../../src/components/Layouts/PostLayout.vue';
import PostBody from "../../src/components/Post/PostBody.vue"
import GoalsListVue from '../../src/components/Goals/GoalsList.vue';
import { PostEntryFirebase } from 'src/interfaces';

const route = useRoute()
const postId = route.params.postId
const { data } = await useFetch(`/api/post/${postId}`)
const dataFields = data.value.fields

const post = {
  title: dataFields.title.stringValue,
  date: new Date(dataFields.date.timestampValue),
  text: dataFields.text.stringValue,
  fixedGoals: dataFields.fixedGoals.arrayValue.values.map((goal: PostEntryFirebase) => ({
    goal: goal.mapValue.fields.goal.stringValue,
    goalValue: goal.mapValue.fields.goalValue.integerValue,
    currentValue: (goal.mapValue.fields.currentValue.integerValue) ? +goal.mapValue.fields.currentValue.integerValue : +goal.mapValue.fields.currentValue.doubleValue,
    isAvailable: goal.mapValue.fields.isAvailable.booleanValue
  }))
}

useHead({
  title: post.title,
  meta: [
  { name: 'description', content: post.text }
  ]
})
</script>

<script lang="ts">
export default {
  methods: {
    formatDate(date: Date) {
      return `${date.getUTCDate()}.${date.getMonth()}.${date.getFullYear()}`;
    },
  },
  components: { GoalsListVue }
}
</script>

<template>
  <PostLayout>
    <PostBody v-if="post" v-bind="post" v-bind:date="formatDate(post.date)" />
      <section :class=$style.fixedGoalsContainer>
        <h2 :class=$style.fixedGoalsTitle>Goals that were present at that time:</h2>
        <GoalsListVue v-if="post" v-bind:goals-entries="post.fixedGoals" />
      </section>
  </PostLayout>
</template>

<style module lang="scss">
@import "../../src/assets/breakpoints.scss";

.fixedGoalsContainer {
  width: 40%;

  @include desktop {
    width: 60%;
  }

  @include laptop {
    width: 100%;
  }
}

.fixedGoalsTitle {
  font-size: 1.5rem;
  margin-bottom: 15px;

  @include tablets {
    font-size: 1.5rem;
  }
}
</style>