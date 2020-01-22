<template>
  <SfSection :title-heading="titleHeading" class="section">
    <!-- SwProductSlider should be placed here instead of SfCarousel-->
    <SfCarousel class="product-carousel">
      <SfCarouselItem v-for="productIdx in 5" :key="productIdx">
        <SwProductCard :product="productsData[productIdx]"/>
      </SfCarouselItem>
    </SfCarousel>
  </SfSection>
</template>

<script>
import { SfSection, SfCarousel } from '@storefront-ui/vue'
import SwProductSlider from './cms/elements/SwProductSlider'
import { getProducts } from '@shopware-pwa/shopware-6-client'
import SwProductCard from "./SwProductCard";

export default {
  name: 'SwProductCarousel',
  components: { SfSection, SfCarousel, SwProductCard },
  props: {
    titleHeading: {
      type: String,
      default: 'Match it'
    }
  },
  data() {
    return {
      products: {},
      pagination: {
        page: 1,
        limit: 1
      }
    }
  },
  computed: {
    productsData() {
      return this.products && this.products.data ? this.products.data: []
    }
  },
  async mounted() {
    this.products = await getProducts(this.pagination)
  }
}
</script>

<style lang="scss" scoped>
@import '~@storefront-ui/shared/styles/variables';

@mixin for-desktop {
  @media screen and (min-width: $desktop-min) {
    @content;
  }
}

.section {
  padding-left: $spacer-big;
  padding-right: $spacer-big;
  @include for-desktop {
    padding-left: 0;
    padding-right: 0;
  }
}

.product-carousel {
  margin: -20px -#{$spacer-big} -20px 0;
  @include for-desktop {
    margin: -20px 0;
  }
  ::v-deep .sf-carousel__wrapper {
    padding: 20px 0;
    @include for-desktop {
      padding: 20px;
      max-width: calc(100% - 216px);
    }
  }
}
</style>