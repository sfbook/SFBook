<template>
  <div>
    <SfHeader/>
    <sfbanner/>
    <sftuijian/>
    <sfzuixin/>
    <sfzhuanti/>
  </div>
</template>

<script>
import SfHeader from "@/components/SfHeader.vue";
import sfbanner from "./indexModule/SFbanner.vue";
import sftuijian from "./indexModule/TuiJian.vue";
import sfzuixin from "./indexModule/ZuiXin.vue";
import sfzhuanti from "./indexModule/ZhuanTi.vue";

export default {
  data() {
    return {};
  },
  components: {
    SfHeader,
    sfbanner,
    sftuijian,
    sfzuixin,
    sfzhuanti
  }
};
</script>

<style lang="scss" scoped>
</style>
