<template>
    <div>
       <SfHeader/> 
       <sfshuping/>
    </div>   
</template>

<script>
import SfHeader from '@/components/SfHeader.vue';
import sfshuping from './shuping/shuPing.vue';
export default {
    data(){
        return{

        }
    },
    components:{
        SfHeader,
        sfshuping
    },
    methods:{
    toDetails(data){
        this.$router.push({
          path: "/about",
          query: { name: data }
        });
    }
    }
}
</script>

<style>

</style>
