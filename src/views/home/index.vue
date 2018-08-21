<template>
    <div class="home">
                  <Header>
            <Tabs value="首页"  @click="handleClick">
              <TabPane label="首页" name="首页">首页</TabPane>
              <TabPane label="资料" name="资料">资料</TabPane>
            </Tabs>
          </Header>

          <main>
              <div>
                  <ul>
                      <li v-for="item in list" @click="gonext(item)">
                          <img :src="item.url" alt="">
                          <div>{{item.title}}</div>
                          <div class="subtitle">{{item.subTitle}}</div>
                          <div class="info">
                              <div >
                                  <img src="../../assets/eye.png" alt="" class="icon">
                                  <span>48</span>
                              </div>
                              <div>
                                  <img src="../../assets/comment.png" alt="" class="icon">
                                  <span>48</span>
                              </div>
                              <div>
                                  <img src="../../assets/thumb.png" alt="" class="icon">
                                  <span>48</span>
                              </div>
                          </div>
                          <div class="days">
                              <div>{{item.days}}天前</div>
                          </div>
                      </li>
                  </ul>
              </div>
          </main>
    </div>
</template>

<style lang="scss" scoped>
@import "../../styles/mixin.scss";
@import "../../styles/func.scss";

.home{
    height: 100%;
    main{
        background: url('../../assets/bg.jpg');
        background-size: contain;
        // height: torem(300px);
        height: 100%;
        padding: torem(10px);
        @media screen and (max-width: 667px) { 
          ul{ 
             display: flex;
             justify-content: space-around;
             flex-wrap:wrap;
             li{
                 flex-grow: 0;
                 .icon{
                        width: torem(13px) !important;
                        height: torem(10px) !important;
                 }
             }
            }
        }
        ul{
            li
            {
                float: left;
                background: #fff;
                width: 18%;
                margin-right: torem(10px);
                margin-top:  torem(10px);
                cursor: pointer;
                img{
                    width: 100%
                }
                .subTitle{
                    color: #bbb
                }
                .info{
                   @include clearfix;
                   color: #bbb;
                   margin-top: 5px;
                    div{
                        display: flex;
                        align-items: center;
                        float: left;
                        margin-right: torem(2px);
                    }
                    .icon{
                        width: torem(6px);
                        height: torem(5px);
                    }
                }
                .days{
                    border-top: 1px solid #eee;
                    color: #bbb;
                    height: torem(11px);
                    line-height: torem(11px);
                }
            }
            @media screen and (max-width: 667px) { li { float: left; width: 40% !important; } }
        }
    }
}
</style>


<script>
import list from '@/mock/mock.js'
export default {
    data() {
        return {
            value:'',
            list:list
        }
    },
    methods:{
        handleClick(e) {
            console.log('e-----------',e)
        },
        gonext(e) {
            let id =e.id 
            this.$router.push({
                path:'/work/'+id
            })
        }
    }
}
</script>
