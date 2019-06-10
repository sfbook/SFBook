<template>
  <div>
    <SfHeader/>

    <sfbanner/>

    <sftuijian/>

    <sfzuixin/>
  </div>
  

</template>

<script>
import SfHeader from '@/components/SfHeader.vue';
import sfbanner from './indexModule/SFbanner.vue'; 
import sftuijian from './indexModule/TuiJian.vue';
import sfzuixin from './indexModule/ZuiXin.vue';

export default {
    data(){
        return{

        }
    },
    methods:{
      gettuijian(){
        this.$http.get("https://www.apiopen.top/novelApi?page=1").then(result=>{
          console.log(result);
        })
      }
    },
    components:{
        SfHeader,
        sfbanner,
        sftuijian,
        sfzuixin
    },
    created(){
      this.gettuijian()
    }
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
    padding-top: 80px;
}
</style>
