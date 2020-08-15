/*
 |--------------------------------------------------------------------------
 | Shards Dashboards: Blog Overview Template
 |--------------------------------------------------------------------------
 */

$(document).ready(function () {

    // Blog overview date range init.

    //
    // Small Stats
    //
    //Configuration Marcos
    MyUtils.includeHTML();
    MyUtils.createDataProeja();

    $('.toggle-sidebar').click(function (e) {
      $('.main-sidebar').toggleClass('open');
    });
    
    //End Configuration Marcos
  
})