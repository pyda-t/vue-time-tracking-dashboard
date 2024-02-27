<script setup lang="ts">
import { defineProps } from 'vue';

// Types
import type { ActivityTrack } from '../types/ActivityTrack';

// Components
import TimeTrackCard from './TimeTrackCard.vue';

type Props = {
  selectedPeriod: string,
  activities: ActivityTrack[],
};

defineProps<Props>();
</script>

<template>
  <ul class="time-tracks-list">
    <li v-for="activity of activities" :key="activity.title">
      <TimeTrackCard :selectedPeriod="selectedPeriod" :title="activity.title"
        :timeFrame="activity.timeframes[selectedPeriod]" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import "../styles/_utils";

.time-tracks-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(218px, 1fr));
  @include adaptive-value('gap', $desktop-gap, $mobile-gap);
}
</style>
