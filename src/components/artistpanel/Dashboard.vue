<template>
  <div class="card route-card gradient-bg">
    <div class="card-body d-flex flex-column align-items-center">
      <div class="col-12 w-100 text-center">
        <img src="../../assets/images/chonkenomics.webp" alt="..." :class="{'w-100' : $isMobile }">
      </div>
      <h4 class="font-weight-normal text-uppercase mb-4 text-center">
        Welcome creator!
      </h4>
      <span class="font-weight-normal text-uppercase text-center">Artist panel</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
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
