<template>
  <div class="artist-layout">
    <div class="card artist-layout-card w-100 mb-5">
      <div class="card-body  d-flex flex-wrap" :class="{'p-5' : !$isMobile,'p-2' : $isMobile}">
        <div class="col-xs-12 col-md-3 p-0">
          <LeftMenu />
        </div>        
        <div class="col-xs-12 col-md-9 p-0" :class="{'pl-4' : !$isMobile}">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from '../components/artistpanel/LeftMenu'
// import store from '../store'
export default {
  name: "ArtistPanel",
  components: {
    LeftMenu
  }
  // beforeRouteEnter (to, from, next) {
  //   if(store.getters.isLoggedIn) {
  //     next();
  //   }
  //   else {
  //     store.dispatch('login').then(result => {
  //       console.log(result)
  //       if(result) {
  //         next()
  //       }else {
  //         next('/')
  //       }
  //     });
  //   }
  // }
  ,mounted : function(){
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.artist-layout {
  display: flex;
  margin: 0 auto;
  max-width: 1400px;
}
.chonk-chan-cat {
  position: fixed;
  bottom: -20px;
  right: -100px;
  height: 700px;
  display: block;
}
.artist-layout-card {
  background: none;
  border-radius: 20px 20px 0px 0px;
  border: 4px solid $main-color;
}
* {
  font-family: 'Togalite-Medium';
}
</style>
