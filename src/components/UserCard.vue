<script setup lang="ts">
  import { defineProps } from 'vue';

  type Props = {
    selectedPeriod: string,
  };

  defineProps<Props>();

  defineEmits(['change']);

  const getPreparedTitle = (title: string) => {
    return title.slice(0, 1).toLocaleUpperCase() + title.slice(1);
  };
</script>

<template>
  <div class="user-card">
    <div class="user-card__info">
      <img class="user-card__image" src="../assets/image-jeremy.png" alt="Jeremy Robson">

      <div>
        <p class="user-card__text">
          Report for
        </p>

        <h1 class="user-card__name">
          Jeremy Robson
        </h1>
      </div>
    </div>

    <ul class="user-card__controls-list">
      <li v-for="control of ['daily', 'weekly', 'monthly']" :key="control">
        <button
          type="button"
          class="user-card__control-item"
          @click="$emit('change', control)"
          :class="{ 'user-card__control-item--selected': control.toLocaleLowerCase() === selectedPeriod }"
        >
          {{ getPreparedTitle(control) }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/_utils";

.user-card {
  display: flex;
  flex-direction: column;
  @include adaptive-value('padding-bottom', 33, 25);
  background-color: $c_very-dark-blue;
  border-radius: $border-radius;

  &__info {
    flex-grow: 1;
    border-radius: $border-radius;
    padding: 35px 30px;
    background-color: $c_blue;

    @include onTablet {
      display: flex;
      align-items: center;
    }
  }

  &__image {
    margin-bottom: 40px;
    display: block;
    @include circle(78px);
    border: 3px solid $c_white;

    @include onTablet {
      margin-bottom: 0;
      margin-right: 20px;
    }
  }

  &__text {
    margin-bottom: 3px;
    color: $c_very-light-blue;
  }

  &__name {
    @include adaptive-value('font-size', 40, 24);
    font-weight: 300;
    line-height: 47px;
    @include adaptive-value('line-height', 47, 28);
  }

  &__controls-list {
    display: grid;
    row-gap: 21px;
    padding-top: 25px;
    padding-inline: 32px;

    @include onTablet {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding-inline: 0;
    }
  }

  &__control-item {
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    color: $c_light-blue;
    transition-duration: $amin-time;

    &--selected {
      color: $c_white;
    }

    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
