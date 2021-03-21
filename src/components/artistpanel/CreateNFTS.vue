<template>
  <div class="card route-card gradient-bg">
    <div class="card-body d-flex flex-column align-items-center">
      <h4 class="font-weight-normal text-uppercase mb-4 text-center">
        Create your nft!
      </h4>
      <div class="col-12 d-flex justify-content-center">
        <form class="w-50">
          <div class="form-group">
            <label class="text-uppercase">*Name</label>
            <input type="text" class="form-control" value="Jhon Doe" />
          </div>
          <div class="form-group">
            <label class="text-uppercase">*Description</label>
            <textarea name="" id="" cols="30" rows="5" class="form-control">
Check out my machines</textarea
            >
          </div>
          <div class="form-group">
            <label class="text-uppercase"
              >*Card supply <span class="">(how many copies)</span></label
            >
            <input type="text" class="form-control" value="" />
          </div>
          <div class="form-group">
            <label class="text-uppercase"
              >Upload card image
              <span class="ml-2">[GIF,PNG,JPEG|*MAX 20mb]</span></label
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
              <button class="btn btn-lg gradient-button mt-2">
                <span class="text-uppercase">Upload image</span
                ><i class="ml-3 fa fa-upload"></i>
              </button>
            </div>
          </div>
          <div class="form-group">
            <label class="text-uppercase"
              >*Properties</label
            >
            <div class="col-12 d-flex p-0 mb-3" v-for="i in 5" :key="i">
              <div class="col-4 p-0"><input type="text" class="form-control" value="" :placeholder="'insert '+i" /></div>
              <div class="col-1">-</div>
              <div class="col-7 p-0"><input type="text" class="form-control" value="" :placeholder="'value '+i" /></div>
            </div>            
          </div>
          <div class="w-100 text-center mt-5">
            <button class="btn btn-lg p-4 gradient-button" type="button">
              <span class="text-uppercase">Create</span><i class="ml-3 fa fa-floppy-o"></i>
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
