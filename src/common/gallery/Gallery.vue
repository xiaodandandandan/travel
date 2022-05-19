<template>
    <div class="container" @click="handleGalleryClick">
       <div class="wrapper">
           <swiper :pagination="{ clickable: true }">
                <swiper-slide v-for="(item,index) of info" :key="index">
                 <img class="Gallery-img" 
                   :src="item" 
                  >
                </swiper-slide>
                <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            </swiper>
       </div>
    </div>
</template>

<script>
export default {
    name:'CommonGallery',
    props:['info'],
    setup(props,context){
        function handleGalleryClick(){
            context.emit('close')
        }
        return {handleGalleryClick}
    } 
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: inherit
    .container
        position: fixed
        display: flex
        flex-direction: column
        justify-content: center
        z-index: 99
        left:0
        right :0
        bottom:0
        top:0
        background-color: #000
        .wrapper
            height: 0
            width: 100%
            padding-bottom: 100%
            .Gallery-img
               width: 100%
            .swiper-pagination
                color: #fff
                bottom: -1rem
</style>