<template>
    <div>
       <SfHeader/> 
       <sffenlei/>
    </div>
</template>

<script>
import SfHeader from '@/components/SfHeader.vue';
import sffenlei from './fenlei/fenLei.vue';
export default {
    data(){
        return{

        }
    },
    components:{
        SfHeader,
        sffenlei
    },
    methods:{
        getshu(){
            this.$http.get("https://www.apiopen.top/novelInfoApi?name=战神").then(result=>{
                console.log(result);
            })
        }
    },
    created(){
        this.getshu();
    }
}
</script>

<style lang="scss" scoped>

</style>
