<template>
  <div class="card route-card gradient-bg">
    <div class="card-body d-flex flex-column align-items-center">
      <h4 class="font-weight-normal text-uppercase mb-4 text-center">Edit your profile</h4>
      <div class="col-12" :class="{'d-flex justify-content-between' : !$isMobile}">        
        <div class="col-xs-12 col-md-8 d-flex" :class="{ 'p-0' : $isMobile}">
          <form class="w-100">
            <div class="form-group">
              <label class="text-uppercase">*Name</label>
              <input
                type="text"
                class="form-control"
                value="Jhon Doe"
                v-model.trim="form_data.name"
              />
              <div class="text-counter">
                <span>{{form_data.name.length}} / 20</span>
                <div class="clearfix"></div>
              </div>
            </div>
            <div class="form-group">
              <label class="text-uppercase">*Description</label>
              <textarea name="" id=""  v-model.trim="form_data.description" cols="30" rows="5" class="form-control">Check out my machines</textarea>
               <div class="text-counter">
                <span>{{form_data.description.length}} / 200</span>
                <div class="clearfix"></div>
              </div>
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
        <div class="col-xs-12 col-md-3 d-flex align-items-end flex-column" :class="{ 'align-items-center' : $isMobile,'align-items-end' : !$isMobile}">
          <div>
            <img src="../../assets/images/chonker-avatar.png" alt="..." class="img-thumbnail rounded-circle mb-3">
            <button class="btn btn-block gradient-button">
              <span class="text-uppercase">Edit Avatar</span> <img src="/icons/edit-image-256.svg" class="img-icon" alt="">
            </button>
          </div>
          <div class="mt-auto p-2 w-100 text-center mt-5 d-flex justify-content-center">            
            <button class="btn btn-block btn-lg gradient-button" style="width:150px">
              <span class="text-uppercase">Update</span><img src="/icons/save-256.svg" class="img-icon" alt="">
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
  data() {
    return {
      form_data :{
        name: '',
        description: ''
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
</style>
