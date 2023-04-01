<script setup lang="ts">
import DiaryListItem from './DiaryListItem.vue';
import { DiaryEntry, DiaryEntryFirebase } from 'src/interfaces';

const { data } = await useFetch('/api/diary')

//Extract data from firebase format
const unsortedDiaryItems: DiaryEntry[] = data.value.map((item: DiaryEntryFirebase) => ({
  id: item.name.split("/").slice(-1).join(),
  title: item.fields.title.stringValue,
  date: new Date(item.fields.date.timestampValue),
  text: item.fields.text.stringValue
}))

//Sort by date
const diaryItems = unsortedDiaryItems.sort((firstDiaryItem: DiaryEntry, secondDiaryItem: DiaryEntry) => +secondDiaryItem.date - +firstDiaryItem.date )
</script>

<template>
  <section :class=$style.container>
    <DiaryListItem v-for="entry in diaryItems" v-bind="entry" />
  </section>
</template>

<style module lang="scss">
@import "../../assets/breakpoints.scss";

.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  gap: 20px;
  width: 100%;

  @include laptop {
    order: 2;
  }
}
</style>
