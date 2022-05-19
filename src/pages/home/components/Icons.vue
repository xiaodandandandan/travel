<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { computed} from 'vue'
export default {
  name: "HomeIcons",
  props:['iconList'],
  setup(props){
    const swiperOptions = {};
    const pages = computed(()=>{
      const pages = []
          props.iconList.forEach((el,index) => {
              const page = Math.floor(index/8)
              if(!pages[page]){
                  pages[page] = []
              }
              pages[page].push(el)
          });
          return pages
    })
    return {swiperOptions ,pages}
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
.icons :deep() .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icon {
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    background-color: #fff;
    position: relative;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.15rem;

      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-desc {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0.44rem;
        line-height: 0.44rem;
        color: $darkTextColor;
        text-align: center;
        ellipsis()
    }
  }
</style>