<template>
  <div
    class="flex flex-col min-h-screen"
    :class="
      isLoginModalOpen || isSearchModalOpen ? 'h-screen overflow-hidden' : ''
    "
  >
    <!-- <SmallgameButtonSmall></SmallgameButtonSmall> -->
    <LayoutNavbar></LayoutNavbar>
    <LayoutContainer>
      <transition name="component-fade">
        <Nuxt class="w-full" />
      </transition>
    </LayoutContainer>
    <LayoutBottombar></LayoutBottombar>
    <AuthLoginModal />
    <SearchGameSearchModal />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class extends Vue {
  mounted() {}
}
</script>
