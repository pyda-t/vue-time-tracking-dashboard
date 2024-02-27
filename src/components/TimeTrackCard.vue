<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { getHoursString } from '../utils/helpers';

// Types
import type { TimeFrame } from '@/types/TimeFrame';

type Props = {
  selectedPeriod: string,
  title: string,
  timeFrame: TimeFrame,
};

const props = defineProps<Props>();
const previousPeriod = computed(() => {
  switch (props.selectedPeriod) {
    case 'weekly':
      return 'Last Week';

    case 'monthly':
      return 'Last Month';

    default:
      return 'Yesterday';
  }
});
</script>

<template>
  <div class="time-track-card" :class="`time-track-card--${title.toLowerCase().replace(' ', '-')}`
    ">
    <div class="time-track-card__content">
      <div class="time-track-card__title-wrapper">
        <h2 class="time-track-card__title">
          {{ title }}
        </h2>

        <button type="button" class="time-track-card__dots" />
      </div>

      <div class="time-track-card__periods">
        <p class="time-track-card__current">
          {{ getHoursString(timeFrame?.current) }}
        </p>

        <p class="time-track-card__previous">
          {{ previousPeriod }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/_utils";

.time-track-card {
  position: relative;
  border-radius: $border-radius;
  padding-top: 45px;
  overflow: hidden;
  background-position: 90% -5px;
  background-repeat: no-repeat;

  &--work {
    background-color: $c_work;
    background-image: url("../assets/icons/icon-work.svg");
  }

  &--play {
    background-color: $c_play;
    background-image: url("../assets/icons/icon-play.svg");
  }

  &--study {
    background-color: $c_study;
    background-image: url("../assets/icons/icon-study.svg");
  }

  &--exercise {
    background-color: $c_exercise;
    background-image: url("../assets/icons/icon-exercise.svg");
  }

  &--social {
    background-color: $c_social;
    background-image: url("../assets/icons/icon-social.svg");
  }

  &--self-care {
    background-color: $c_self-care;
    background-image: url("../assets/icons/icon-self-care.svg");
  }

  &__icon {
    position: absolute;
    top: 0;
    right: 0;
  }

  &__content {
    padding: 30px;
    @include adaptive-value('padding', 30, 20);
    border-radius: $border-radius;
    background-color: $c_very-dark-blue;
    cursor: pointer;
    transition-duration: $amin-time;

    &:hover {
      background-color: #33397A;
    }
  }

  &__title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }

  &__title {
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
  }

  &__dots {
    display: block;
    width: 21px;
    height: 5px;
    padding: 5px;
    background-image: url("../assets/icons/icon-ellipsis.svg");
    background-repeat: no-repeat;
    background-position: center;
    transition-duration: $amin-time;

    &:hover {
      transform: scale(1.2);
    }
  }

  &__periods {
    @include onTablet {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__current {
    margin-bottom: 8px;
    @include adaptive-value('font-size', 56, 32);
    font-weight: 300;
    @include adaptive-value('line-height', 66, 38);
  }

  &__previous {
    color: $c_very-light-blue;

    @include onTablet {
      text-align: right;
    }
  }
}
</style>