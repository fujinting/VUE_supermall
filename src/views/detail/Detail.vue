<template>
<div id="detail">
  <detail-nav-bar/>
  <detail-swiper :topImages="topImages"/>
 </div>
</template>

<script>
    import DetailNavBar from "./childComps/DetailNavBar";
    import DetailSwiper from "./childComps/DetailSwiper";

    import {getDetail,Goods} from "../../network/detail";

    export default {
        name: "Detail",
        components:{
          DetailNavBar,
          DetailSwiper
       },
        data(){
          return{
              iid:null,
              topImages:[],
               goods:null
           }
        },
        created(){
           //1. 保存传入的iid
           this.iid=this.$route.params.iid

        //  2. 根据iid请求详细数据
          getDetail(this.iid).then(res=>{
          //1. 获取顶部的图片轮播数据
            console.log(res);
            const data=res.result;
            this.topImages=data.itemInfo.topImages
          //2. 获取商品信息
            this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
          })
        }

    }
</script>

<style scoped>

</style>
