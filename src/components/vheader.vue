<template>
    <div :class="{_header:true,'isTeacher':isTeacher}">
        <img :src="nav_back" alt=""  class="back" @click="path?$router.push({name:path}):$router.go(-1)">
        <span><slot></slot></span>
    </div>
</template>


<script>
let nav_back = require("../assets/nav_back.png")
export default {
    props:{
        text:String,
        isTeacher:{
            type:Boolean,
            default:false
        },
        path:String
    },
    data() {
        return {
            nav_back:nav_back
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/func.scss';

._header{
  position: relative;
  height: torem(35px);
  line-height: torem(35px);
  background: #ffd202;
  text-align: center;
  font-size: torem(15px);
  color: #fff;
  .back{
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    left: torem(10px);
    height: torem(15px);
    width: torem(40px);
    z-index: 200;
  }
}

.isTeacher{
      background: #3DA4FF !important;
}
</style>
