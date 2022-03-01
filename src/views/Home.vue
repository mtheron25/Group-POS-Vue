<template>
  <h1>Welcome Back!</h1>
  <div class="col-md-6 col-xl-3">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <div class="avatar-sm bg-soft-danger rounded">
              <i class="fe-aperture avatar-title font-22 text-danger"></i>
            </div>
          </div>
          <div class="col-6">
            <div class="text-end">
              <h3 class="text-dark my-1">
                $<span data-plugin="counterup">12,145</span>
              </h3>
              <p class="text-muted mb-1 text-truncate">Income status</p>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <h6 class="text-uppercase">
            Target <span class="float-end">60%</span>
          </h6>
          <div class="progress progress-sm m-0">
            <div
              class="progress-bar bg-danger"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 60%"
            >
              <span class="visually-hidden">60% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end card-->
  </div>
  <div class="col-md-6 col-xl-3">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <div class="avatar-sm bg-soft-info rounded">
              <i class="fe-shopping-cart avatar-title font-22 text-info"></i>
            </div>
          </div>
          <div class="col-6">
            <div class="text-end">
              <h3 class="text-dark my-1">
                <span data-plugin="counterup">1576</span>
              </h3>
              <p class="text-muted mb-1 text-truncate">January's Sales</p>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <h6 class="text-uppercase">
            Target <span class="float-end">49%</span>
          </h6>
          <div class="progress progress-sm m-0">
            <div
              class="progress-bar bg-info"
              role="progressbar"
              aria-valuenow="49"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 49%"
            >
              <span class="visually-hidden">49% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end card-->
  </div>
  <div class="col-md-6 col-xl-3">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <div class="avatar-sm bg-soft-warning rounded">
              <i class="fe-bar-chart-2 avatar-title font-22 text-warning"></i>
            </div>
          </div>
          <div class="col-6">
            <div class="text-end">
              <h3 class="text-dark my-1">
                $<span data-plugin="counterup">8947</span>
              </h3>
              <p class="text-muted mb-1 text-truncate">Payouts</p>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <h6 class="text-uppercase">
            Target <span class="float-end">18%</span>
          </h6>
          <div class="progress progress-sm m-0">
            <div
              class="progress-bar bg-warning"
              role="progressbar"
              aria-valuenow="18"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 18%"
            >
              <span class="visually-hidden">18% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end card-->
  </div>
  <div class="col-md-6 col-xl-3">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <div class="avatar-sm bg-soft-dark rounded">
              <i class="fe-cpu avatar-title font-22 text-dark"></i>
            </div>
          </div>
          <div class="col-6">
            <div class="text-end">
              <h3 class="text-dark my-1">
                <span data-plugin="counterup">178</span>
              </h3>
              <p class="text-muted mb-1 text-truncate">Available Stores</p>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <h6 class="text-uppercase">
            Target <span class="float-end">74%</span>
          </h6>
          <div class="progress progress-sm m-0">
            <div
              class="progress-bar bg-dark"
              role="progressbar"
              aria-valuenow="74"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 74%"
            >
              <span class="visually-hidden">74% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end card-->
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
export default {
  components: { Sidebar },
};
</script>

<style>
h1 {
  text-align: center;
  margin-top: 100px;
  font-size: 70px;
}

.card {
  width: 50%;
}

.col-md-6 {
  flex: auto;
  justify-content: space-evenly;
}
@media (min-width: 1200px) {
  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
}
@media (min-width: 768px) {
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}
</style>
