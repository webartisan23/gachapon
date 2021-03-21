<template>
  <div class="card route-card gradient-bg">
    <div class="card-body d-flex flex-column align-items-center">
      <h4 class="font-weight-normal text-uppercase mb-4 text-center">Edit your profile</h4>
      <div class="col-12 d-flex justify-content-between">        
        <div class="col-8 d-flex">
          <form class="w-100">
            <div class="form-group">
              <label class="text-uppercase">*Name</label>
              <input
                type="text"
                class="form-control"
                value="Jhon Doe"
              />              
            </div>
            <div class="form-group">
              <label class="text-uppercase">*Description</label>
              <textarea name="" id="" cols="30" rows="5" class="form-control">Check out my machines</textarea>
            </div>   
            <div class="form-group">
              <label class="text-uppercase">Instagram <span class="text-lowercase">(optional)</span></label>
              <input
                type="text"
                class="form-control"
                value=""
              />              
            </div>
            <div class="form-group">
              <label class="text-uppercase">Twitter <span class="text-lowercase">(optional)</span></label>
              <input
                type="text"
                class="form-control"
                value=""
              />              
            </div>
            <div class="form-group">
              <label class="text-uppercase">Website <span class="text-lowercase">(optional)</span></label>
              <input
                type="text"
                class="form-control"
                value=""
              />              
            </div>                    
          </form>
        </div>
        <div class="col-3 d-flex align-items-end flex-column">
          <div>
            <img src="../../assets/images/chonker-avatar.png" alt="..." class="img-thumbnail rounded-circle mb-3">
            <button class="btn btn-block gradient-button">
              <span class="text-uppercase">Edit Avatar</span><i class="ml-3 fa fa-pencil"></i>
            </button>
          </div>
          <div class="mt-auto p-2">
            <button class="btn btn-block btn-lg gradient-button">
              <span class="text-uppercase">Update</span><i class="ml-3 fa fa-floppy-o"></i>
            </button>
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditProfile",
};
</script>

<style lang="scss" scoped>
.route-card {
  background: none;
  border-radius: 0px 20px 0px 0px;
  border: 2px solid $main-color;
  color: $main-color;
}
</style>
