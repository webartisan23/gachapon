<template>
  <div class="card route-card gradient-bg">
    <div class="card-body d-flex flex-column align-items-center">
      <h4 class="font-weight-normal text-uppercase mb-4 text-center">
        Manage your machines!
      </h4>
      <div class="col-12 d-flex justify-content-center">
        <div class="card gradient-bg content-card w-100">
          <div class="card-header text-center text-uppercase">
            <h5 class="font-weight-light">
              <i class="fa fa-cogs text-white mr-2"></i> Machine settings
            </h5>
          </div>
          <div class="card-body w-75 mx-auto">
            <div class="col-12 p-0 d-flex">
              <div class="col-6">
                <select name="" id="" class="form-control">
                  <option value="Death machine">Death machine</option>
                </select>
              </div>
              <div class="col-6">
                <button class="btn btn-block gradient-button">
                  <span class="text-uppercase">Go to machine page</span
                  ><i class="ml-3 fa fa-bullseye"></i>
                </button>
              </div>
            </div>
            <div
              class="col-12 p-4 d-flex gradient-bg content-card my-4 justify-content-between"
            >
              <h4 class="text-uppercase text-white">[machine-status]: live</h4>
              <button class="btn gradient-button">
                <span class="text-uppercase">pause</span
                ><i class="ml-3 fa fa-pause"></i>
              </button>
            </div>
            <div
              class="col-12 p-4 d-flex gradient-bg content-card my-4 justify-content-between"
            >
              <form class="w-100">
                <div class="form-group">
                  <label class="text-uppercase">Machine name</label>
                  <input
                    type="text"
                    class="form-control"
                    value="Death machine"
                  />
                </div>
                <div class="form-group">
                  <label class="text-uppercase">Machine Description</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    class="form-control"
                  >
Get the carziest looking</textarea
                  >
                  <button class="btn gradient-button my-2 float-right">
                    <span class="text-uppercase">apply</span
                    ><i class="ml-3 fa fa-floppy-o"></i>
                  </button>
                </div>
                <div class="form-group">
                  <label class="text-uppercase"
                    >Rate per spin: [TAIYAKI or ETH]</label
                  >
                  <div class="col-8 d-flex p-0 mb-3">
                    <div class="col-3 p-0">
                      <input type="text" class="form-control" value="1" />
                    </div>
                    <div class="col-6">
                      <select name="" id="" class="form-control">
                        <option value="TAIYAKI">TAIYAKI</option>
                      </select>
                    </div>
                    <div class="col-4 p-0">
                      <button class="btn gradient-button">
                        <span class="text-uppercase">apply</span
                        ><i class="ml-3 fa fa-floppy-o"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-center mt-3">
        <div class="card gradient-bg content-card w-100">
          <div class="card-header text-center text-uppercase">
            <h5 class="font-weight-light">
              <i class="fa fa-line-chart text-white mr-2"></i> Your machine
              analytics
            </h5>
          </div>
          <div class="card-body d-flex flex-wrap justify-content-center">
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="card text-center col-5 m-2 gradient-brown content-card "
            >
              <div class="card-body text-uppercase px-0">
                <h5 class="card-title ">{{ stat.title }}</h5>
                <p class="card-text display-4">
                  {{ stat.value }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateNFTS",
  data() {
    return {
      stats: [
        {
          title: "your earnings!",
          value: "50.2ETH",
        },
        {
          title: "price per play!",
          value: "2 taiyaki",
        },
        {
          title: "total spins!",
          value: "104",
        },
        {
          title: "total nfts in machine!",
          value: "2014",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.route-card {
  background: none;
  border-radius: 0px 20px 0px 0px;
  border: 2px solid $main-color;
  color: $main-color;
}
.content-card {
  background: none;
  border: 2px solid $main-color;
  border-radius: 40px;
  .card-header {
    border-bottom: 2px solid $main-color;
  }
  .gradient-brown {
    background: #010000;
  }
}
</style>
