<script setup lang="ts">
import { ref } from 'vue';

// Data
import activities from '../data.json';

// Components
import UserCard from './components/UserCard.vue';
import TimeTracksList from './components/TimeTracksList.vue';

const selectedPeriod = ref('daily');
</script>

<template>
  <div class="app">
    <div class="app__content">
      <UserCard class="app__user" :selectedPeriod="selectedPeriod" @change="selectedPeriod = $event" />

      <TimeTracksList class="app__time-tracks-list" :selectedPeriod="selectedPeriod" :activities="activities" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./styles/_utils";

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @include adaptive-value('padding-block', 120, 80);
  @include adaptive-value('padding-inline', 40, 24);
  background-color: $c_dark-blue;
  font-family: Rubik, Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  color: $c_white;

  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @include adaptive-value('gap', $desktop-gap, $mobile-gap);
    width: 100%;
    max-width: 1110px;

    @include onTablet {
      grid-template-columns: 1fr;
      grid-auto-flow: row;
    }
  }

  &__user {
    grid-column: 1 / 2;
  }

  &__time-tracks-list {
    grid-column: 2 / 5;

    @include onTablet {
      grid-column: 1 / 2;
    }
  }
}
</style>
