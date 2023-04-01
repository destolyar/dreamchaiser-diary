<script setup lang="ts">
import { GoalEntry, GoalEntryFirebase } from 'src/interfaces';
import GoalsList from '../Goals/GoalsList.vue';

const { data } = await useFetch('/api/goals')

//Extract data from firebase format
const goals: GoalEntry[] = data.value.map((item: GoalEntryFirebase) => ({
  id: item.name.split("/").slice(-1).join(),
  goal: item.fields.goal.stringValue,
  goalValue: +item.fields.goalValue.integerValue,
  currentValue: (item.fields.currentValue.integerValue) ? +item.fields.currentValue.integerValue : +item.fields.currentValue.doubleValue,
  isAvailable: item.fields.isAvailable.booleanValue
}))
</script>

<template>
  <aside :class=$style.sidebarContainer>
    <GoalsList v-bind:goalsEntries="goals" />
  </aside>
</template>

<style module lang="scss">
@import "../../assets/breakpoints.scss";

.sidebarContainer {
  margin-left: 40px;

  @include laptop {
    margin: 0;
  }
}
</style>
