<template>
    <div class="work">
        <header>
            <vheader></vheader>
            <div class="info">
                <div class="info_left">
                    <div class="info_title">动态练习</div>
                </div>
                <div class="info_right">
                    <Avatar src="https://img.zcool.cn/community/031936b5b682911a801215c8fc1c877.jpg@80w_80h_1c_1e_1o_100sh.jpg" size="large" class="avarar" />
                    <div class="desc">
                        <div>Diana西西</div>
                        <div>北京 | UI设计师</div>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <ul>
                <li v-for="item in detail.list">
                    <img :src="item.url" alt="">
                </li>
            </ul>
        </main>
    </div>
</template>


<style lang="scss" scoped>
@import '../../styles/func.scss';
  .work{
      header{
          .info{
              display: flex;
              justify-content: space-between;
              margin-top: torem(10px);
              border-bottom: 1px solid  #eee;
              border-top: 1px solid  #eee;
              height: torem(70px);
              line-height: torem(70px);
              position: relative;
              .info_left{
                  .info_title{
                      font-size: torem(20px);
                      height: torem(70px);
                      line-height: torem(70px);
                  }
              }
              &>div{
                  flex-grow: 1
              }
              .avarar{
                  position: absolute;
                  right: 30%;
                  top: 50%;
                  transform: translate(0,-50%)
              }
              .desc{
                  display: flex;
                  align-items: center;
                  flex-wrap: wrap;
                  position: absolute;
                  right: 5%;;
                  top: 50%;
                  height: 70%;
                  width: 25%;
                  transform: translate(0,-50%);
                  &>div{
                      height: torem(20px);
                      line-height: torem(20px);
                  }
              }
          }
      }
      main{
          margin-top: torem(40px);
          ul{
              margin: 0 auto;
            //   width: 60%;
              @media screen and (min-width: 1024px){
                  width: 50%
              }
              @media screen and (max-width: 768px){
                  width: 70%
              }
              @media screen and (max-width: 375px){
                  width: 80%
              }
              li{
                  margin-top: torem(10px);
                  img{
                      max-width: 100%;
                    // transform: scale(0.4,0.4)
                  }
              }
          }
      }
  }
</style>


<script>
import fourD from '@/mock/4d.js'
import gif from '@/mock/gif.js'
import vheader from '@/components/vheader.vue'

export default {
    data() {
        return {
            detail:''
        }
    },
    created() {
        let id = this.$route.params.id
        console.log('--------------',id)
        if(id ==='1') {
            this.detail = fourD
        }else if(id ==='2') {
            this.detail = gif
        }
    },
    components:{
        vheader
    }
}
</script>
