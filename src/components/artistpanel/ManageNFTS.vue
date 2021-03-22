<template>
  <div class="card route-card gradient-bg">
    <div class="card-body d-flex flex-column align-items-center">
      <h4 class="font-weight-normal text-uppercase mb-4 text-center">
        Manage your NFTS!
      </h4>
      <div class="col-12 d-flex justify-content-center">
        <div class="card gradient-bg content-card w-100">
          <div class="card-header text-center text-uppercase">
            <h5 class="font-weight-light">
              Select your nft
            </h5>
          </div>
          <div class="card-body w-100 mx-auto">
            <div class="col-xs-12 col-md-8 p-0 d-flex float-right mb-4 flex-wrap">
              <div class="col-xs-12 col-md-6">
                <select name="" id="" class="form-control">
                  <option value="">Select Your NFTS!</option>
                </select>
              </div>
              <div class="col-xs-12 col-md-6">
                <i
                  class="fa fa-search position-absolute"
                  style="top: 30%;left: 22px;"
                ></i>
                <input
                  type="text"
                  class="form-control pl-4"
                  placeholder="Search NFTS!"
                />
              </div>
            </div>
            <div
              class="w-100 scrollable-class d-flex justify-content-center flex-wrap"
            >
              <div class="card col-xs-12 col-md-3 float-left m-2" v-for="i in 20" :key="i">
                <img
                  class="card-img-top"
                  src="../../assets/images/inside3.png"
                  alt="Card image cap"
                />
                <div class="card-footer" :class="{'p-0' : $isMobile}">Zombie slayer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 p-0 mt-4" :class="{'d-flex' : !$isMobile}">
        <div class="col-md-7 col-xs-12 d-flex">
          <div class="card route-card-left w-100">
            <div class="card-header text-right text-uppercase">
              <h5 class="font-weight-light">nft information</h5>
            </div>
            <div class="card-body w-100 mx-auto">
              <div class="row">
                <div class="col-md-6 col-xs-12">
                  <div class="card route-card-left w-100">
                    <div class="card-header text-right text-uppercase">
                      <span class="font-weight-light">Zombie Slayer</span>
                      <br />
                      <small class="font-weight-light">9874512123</small>
                    </div>
                    <div class="card-body w-100 d-flex justify-content-center">
                      <table>
                        <tr>
                          <td>[Minted]</td>
                          <td>:</td>
                          <td>7</td>
                        </tr>
                        <tr>
                          <td>[Currently own]</td>
                          <td>:</td>
                          <td>7</td>
                        </tr>
                        <tr>
                          <td>[Max copies]</td>
                          <td>:</td>
                          <td>7</td>
                        </tr>
                        <tr>
                          <td>[Available Load]</td>
                          <td>:</td>
                          <td>7</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xs-12">
                  <div class="card w-100">
                    <img
                      class="card-img-top"
                      src="../../assets/images/inside3.png"
                      alt="Card image cap"
                      height="250"
                    />
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-6 col-xs-12">
                  <div
                    class="w-100 d-flex justify-content-center align-items-center"
                    style="height:200px"
                  >
                    <h2>Properties</h2>
                  </div>
                </div>
                <div class="col-md-6 col-xs-12">
                  <div class="card content-card rounded-0" style="height:200px">
                    <div
                      class="card-body p-0 no-padding w-100 d-flex justify-content-center align-items-center"
                    >
                      <ul class="" style="list-style-type: none;">
                        <li class="">[Artist] - Chonk Chan</li>
                        <li class="">[Tag] - Chonker Finance</li>
                        <li class="">[Rarity] - EPIC 5 star</li>
                        <li class="">[Max Supply] - 25</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer p-1 ">
              <textarea name="" id="" cols="30" rows="3" class="form-control">
The Chokin Dead</textarea
              >
            </div>
          </div>
        </div>
        <div class="col-md-5 col-xs-12 d-flex">
          <div class="card route-card-right w-100">
            <div class="card-header text-right text-uppercase">
              <h5 class="font-weight-light">load into machine</h5>
            </div>
            <div class="card-body w-100 mx-auto">
              <h4 for="" class="float-right font-weight-light">
                Select machine
              </h4>
              <select name="" id="" class="form-control">
                <option value="">Choose your machine</option>
              </select>
              <div class="d-flex align-items-center flex-wrap" style="height:100%">
                <div>
                <div class="form-group">
                  <h4 class="text-uppercase font-weight-light text-center"
                    >Load non-minted nft</h4>
                  <div class="col-12 p-0 mb-1" :class="{'d-flex' : !$isMobile}">
                    <div class="col-md-8 col-xs-12 p-0">
                      <input type="text" class="form-control text-center" value="1" />
                    </div>
                    <div class="col-md-4 col-xs-12 p-0 ml-2">
                      <button class="btn gradient-button">
                        <span class="text-uppercase">load</span
                        ><img src="/icons/upload-256.svg" class="img-icon" alt="">
                      </button>
                    </div>
                  </div>
                  <label class="text-uppercase font-weight-light text-center"
                    >Available to load : 99 [MAX 300 per tx]</label>
                </div>
                <div class="form-group">
                  <h4 class="text-uppercase font-weight-light text-center"
                    >Load minted nft</h4>
                  <div class="col-12  p-0 mb-1" :class="{'d-flex' : !$isMobile}">
                    <div class="col-md-8 col-xs-12 p-0">
                      <input type="text" class="form-control text-center" value="1" />
                    </div>
                    <div class="col-md-4 col-xs-12 p-0 ml-2">
                      <button class="btn gradient-button">
                        <span class="text-uppercase">load</span
                        ><img src="/icons/upload-256.svg" class="img-icon" alt="">
                      </button>
                    </div>
                  </div>
                   <label class="text-uppercase font-weight-light text-center"
                   :class="{'mb-4' : $isMobile}"
                    >Available to load : 2 [MAX 300 per tx]</label>
                </div>
                </div>
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
  name: "ManageNFTS",
  data() {
    return {};
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
.route-card-left {
  background: none;
  border-radius: 20px 0px 20px 20px;
  border: 2px solid $main-color;
  color: $main-color;
  .card-header {
    border-bottom: 2px solid $main-color;
  }
  table > tr > td {
    padding: 2px;
  }
  textarea {
    border-radius: 0px 0px 20px 20px;
  }
}
.route-card-right {
  background: none;
  border-radius: 0px 20px 20px 20px;
  border: 2px solid $main-color;
  color: $main-color;
  .card-header {
    border-bottom: 2px solid $main-color;
  }
  table > tr > td {
    padding: 5px;
  }
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
.no-padding * {
  padding: 0 !important;
}
.scrollable-class {
  max-height: 500px;
  overflow-y: auto;
  .card {
    background: none;
    border-radius: 0px 0px 20px 20px;
    border: 2px solid $main-color;
    color: $main-color;
  }
  .card:hover {
    background: #3c1713;
  }
}
/* width */
::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #9a645e;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #220d0a;
  border-radius: 10px;
  border: 1px solid #9a645e;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #220d0a;
}
</style>
