<template>
  <div class="card route-card gradient-bg">
    <div class="card-body d-flex flex-column align-items-center">
      <h4 class="font-weight-normal text-uppercase mb-4 text-center">
        Create your nft!
      </h4>
      <div class="col-12 d-flex justify-content-center">
        <form :class="{ 'w-100' : $isMobile, 'w-50' : !$isMobile }">
          <div class="form-group">
            <label class="text-uppercase">*Name</label>
            <input type="text" class="form-control" v-model.trim="form_data.name" value="Jhon Doe" />
            <div class="text-counter">
                <span>{{form_data.name.length}}/20</span>
                <div class="clearfix"></div>
              </div>
          </div>
          <div class="form-group">
            <label class="text-uppercase">*Description</label>
            <textarea name="" id="" cols="30" rows="5" v-model.trim="form_data.description" class="form-control">
Check out my machines</textarea
            >
            <div class="text-counter">
                <span>{{form_data.description.length}}/200</span>
                <div class="clearfix"></div>
              </div>
          </div>
          <div class="form-group">
            <label class="text-uppercase"
              >*Card supply <span class="">(how many copies)</span></label
            >
            <input type="text" class="form-control" value="" />
          </div>
          <div class="form-group">
            <label class="text-uppercase"
              >Upload card image [GIF,PNG,JPEG|*MAX 20mb]</label
            >
            <div class="text-center">
              <div class="card image-card p-4 w-100">
                <img
                  src="../../assets/images/inside4.png"
                  alt="..."
                  class="img-thumbnail m-auto"
                  style="height:320px;width:250px"
                />
              </div>
              <div class="w-100 d-flex justify-content-center">
              <button class="btn btn-lg gradient-button mt-2">
                <span class="text-uppercase">Upload image</span
                ><img src="/icons/edit-image-256.svg" class="img-icon" alt="">
              </button>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="text-uppercase"
              >*Properties</label
            >
            <div class="col-12 d-flex p-0 mb-3" v-for="i in 5" :key="i">
              <div class="col-4 p-0">
                <input type="text" class="form-control" v-model.trim="form_data.properties.index[i]" value="" />
                <div class="text-counter">
                  <span>{{form_data.properties.index[i].length}}/20</span>                
                </div>  
              </div>
              <div class="col-1">-</div>
              <div class="col-7 p-0">
                <input type="text" v-model.trim="form_data.properties.values[i]" class="form-control" value="" />
                <div class="text-counter">
                  <span>{{form_data.properties.values[i].length}}/20</span>                
                </div> 
              </div>
            </div>            
          </div>
          <div class="w-100 text-center mt-5 d-flex justify-content-center">
            <button class="btn btn-lg gradient-button" type="button" style="width:150px">
              <span class="text-uppercase">Create</span><img src="/icons/save-256.svg" class="img-icon" alt="">
            </button>
          </div>           
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateNFTS",
  data() {
    return {
      form_data :{
        name: '',
        description: '',
        properties: {
          index: ['','','','','',''],
          values: ['','','','','','']
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.route-card {
  background: none;
  border-radius: 0px 20px 0px 0px;
  border: 2px solid $main-color;
  color: $main-color;
}
.image-card {
  background: none;
  border: 2px solid $main-color;
}
</style>
