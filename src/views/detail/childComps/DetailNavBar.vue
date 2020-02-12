<template>
  <nav-bar>
    <div slot="left">
      <div class="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">

      </div>
    </div>
    <div slot="center" class="title">
      <div v-for="(item,index) in tities"
           class="title-item" :class="{active: index===currentIndex}"
            @click="titleClick(index)">{{item}}</div>
    </div>
  </nav-bar>

</template>

<script>
  import NavBar from "components/common/navbar/Navbar";


  export default {
        name: "DetailNavBar",
        components:{
          NavBar
        },
        data(){
          return{
            tities:['商品','参数','评论','推荐'],
            currentIndex:0
          }
        },
    methods:{
      titleClick(index){
        this.currentIndex=index
      },
      backClick(){
        this.$router.back()
      }
    }
    }
</script>

<style scoped>
 .title{
  display: flex;
   font-size: 13px;
}
 .title-item{
  flex: 1;
}
  .active{
    color: var(--color-high-text);
  }
  .left img{
    margin-top: 10px;
  }
</style>
