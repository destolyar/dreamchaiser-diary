<script setup lang="ts">
import LogoIconSVG from '@/assets/svg/LogoIconSVG.vue'
</script>

<template>
  <figure :class=$style.container>
    <LogoIconSVG />
    <section :class=$style.logoTextContainer>
      <span :class=$style.title>DreamChaser Diary</span>
      <p :class=$style.subtitle>Empower Your Dreams, Embrace Your Journey</p>
    </section>
  </figure>
</template>

<style module lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Khula:wght@600;800&display=swap');
@import '../../assets/colors.scss';
@import '../../assets/breakpoints.scss';

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logoTextContainer {
  padding-top: 5px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: $logo-text-color;
  margin-left: 5px;
}

.title {
  font-family: 'Khula', sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  line-height: 21px;

  @include tablets {
    font-size: 1rem;
    line-height: 16px;
  }
}

.subtitle {
  font-family: 'Khula', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 16px;

  @include tablets {
    display: none;
  }
}
</style>