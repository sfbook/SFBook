<template>
    <SfHeader/>
</template>

<script>
import SfHeader from '@/components/SfHeader.vue';
export default {
    data(){
        return{

        }
    },
    components:{
        SfHeader
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
