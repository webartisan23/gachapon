<template>
  <div class="card left-menu-card gradient-bg">
    <div class="card-body d-flex flex-column align-items-center">
      <h4 class="font-weight-normal text-uppercase mb-4">Your Dashboard</h4>
      <img src="../../assets/images/chonker-avatar.png" alt="..." class="img-thumbnail rounded-circle mb-3">
      <h5>Artist Name</h5>
      <span class="text-center text-white">Devourer of worlds! Official Chonker
      Finance Machines can be found here.</span>
      <div class="btn-area my-4">        
        <button class="btn btn-block mb-3 gradient-button" 
        v-for="(link,index) in links" 
        :key="index" 
        :class="{'text-white' : (currentPage == link.link)}"
        @click="$router.push('/artist-panel/'+link.link)">
          <span class="text-uppercase">{{link.name}}</span> <img :src="'/icons/'+link.icon" class="img-icon" alt="">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Leftmenu',
  data() {
    return {
      links: [
        {
          name: 'edit profile',
          icon: 'edit-user-256.svg',
          link: 'profile'
        },
        {
          name: 'create nfts',
          icon: 'plus-5-256.svg',
          link: 'create-nfts'
        },
        {
          name: 'manage nfts',
          icon: 'pokemnon.svg',
          link: 'manage-nfts'
        },
        {
          name: 'manage machine',
          icon: 'services-1.svg',
          link: 'manage-machine'
        }
      ]
    }
  },
  computed:{
    currentPage(){
      let pageName = this.$route.path.split('/')
      return pageName[pageName.length-1]
    }
  }  
}
</script>

<style lang="scss" scoped>
.left-menu-card{
  background: none;
  border-radius: 20px 0px 0px 0px;
  border: 2px solid $main-color;
  color: $main-color;    
}
</style>