---
layout: post
title:  "when i got a motorcycle"
date:   2017-07-31 16:24:00 -0700
categories: graphs motorcycles
---

<div id="motorcycleTimeline"></div>
<script src="/assets/js/d3.min.js"></script>
<script src="/assets/js/d3timeline.js"></script>

<script type="text/javascript">

var testData = [
  {label: "person a", times: [
    {"starting_time": 1355752800000, "ending_time": 1355759900000},
    {"starting_time": 1355767900000, "ending_time": 1355774400000}]},
  {label: "person b", times: [
    {"starting_time": 1355759910000, "ending_time": 1355761900000}]},
  {label: "person c", times: [
    {"starting_time": 1355761910000, "ending_time": 1355763910000}]}
  ];
var chart = d3.timeline();
var svg = d3.select("#motorcycleTimeline").append("svg").attr("width", 500)
  .datum(testData).call(chart);

/*
new Timesheet("motorcycleTimesheet", 2012, 2014, [
  ['2013', '09/2013', 'test1'],
  ['2013', '09/2013', 'test2']
]);
*/
/*
new Timesheet('motorcycleTimesheet', 2013, 2020, [
  ['11/2013', '11/2013', 'Took MSF course', 'ipsum'],
  ['11/2013', '11/2013', 'Looking for a motorcycle', 'ipsum'],
  ['11/2013', '11/2013', 'Bought 2008 Vulcan 500', 'lorem'],
  ['01/2014', '01/2014', 'Bought 1983 KZ750', 'lorem'],
  ['02/2014', '02/2014', 'Popped Vulcan tire on highway 17, got towed', 'ipsum'],
  ['05/2014', '05/2014', 'Sold 1983 KZ750', 'lorem'],
  ['11/2013', '05/2014', 'Commuting San Jose -> Santa Cruz', 'default'],
  ['05/2014', '05/2014', 'Bought TL1000S', 'lorem'],
  ['06/2014', '06/2014', 'Got a speeding ticket with TL1000S', 'lorem'],
  ['02/2015', '05/2015', 'Commuting Santa Cruz -> San Jose', 'default'],
  ['06/2015', '05/2016', 'Commuting Willow Glen -> DTSJ', 'default'],
  ['05/2017', '07/2017', 'Commuting DTSJ -> Redwood City', 'default']
]);
*/
</script>
