<template>
<div class="recommend">
  <div v-for="item in recommends" class="recommend-item">
    <a href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
    export default {
        name: "RecommendView",
         props:{
          recommends:{
            type:Array,
            defult(){
              return []
            }
          }
      }
    }
</script>

<style scoped>
  .recommend{
   display: flex;
    width: 100%;
    font-size: 12px;
    text-align: center;
    padding: 15px 0  30px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex:1;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
