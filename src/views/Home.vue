<template>
  <div class="box">
    <SfHeader/>
    <sfbanner/>
    <sftuijian/>
    <sfzuixin/>
    <sfzhuanti/>
    <sfyousheng/>
  </div>
  

</template>

<script>
import SfHeader from '@/components/SfHeader.vue';
import sfbanner from './indexModule/SFbanner.vue'; 
import sftuijian from './indexModule/TuiJian.vue';
import sfzuixin from './indexModule/ZuiXin.vue';
import sfzhuanti from './indexModule/ZhuanTi.vue';
import sfyousheng from './indexModule/YouSheng.vue';

export default {
    data(){
        return{

        }
    },
    methods:{
    },
    components:{
        SfHeader,
        sfbanner,
        sftuijian,
        sfzuixin,
        sfzhuanti,
        sfyousheng
    },
}
</script>

<style>
html{
  font-size: 117.1875px;
}
body {
    background-color: #F3F3F3;
    margin: 0;
    font-family: Helvetica;
    -webkit-text-size-adjust: 100%;
    font-size: 0.12rem;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>

