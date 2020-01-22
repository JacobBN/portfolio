<template>
  <div class="home">
    <Welcome></Welcome>
    <PortfolioOverview></PortfolioOverview>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import PortfolioOverview from '@/components/PortfolioOverview.vue'

export default {
  name: 'home',
  components: {
    Welcome,
    PortfolioOverview
  }
}
</script>
