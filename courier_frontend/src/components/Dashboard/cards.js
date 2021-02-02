import React from 'react'
import { List } from '@material-ui/core/List';

export default function Cards() {
    return (
        <div id="root">
  <div class="container pt-5">
    <div class="row align-items-stretch">
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Approved List</h4><span class="hind-font caption-12 c-dashboardInfo__count">10,500</span>
        </div>
      </div>
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">In Stock List</h4><span class="hind-font caption-12 c-dashboardInfo__count">500</span>
        </div>
      </div>
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Delivered List</h4><span class="hind-font caption-12 c-dashboardInfo__count">5000</span>
        </div>
      </div>
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Shipment Requests</h4><span class="hind-font caption-12 c-dashboardInfo__count">1</span>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
