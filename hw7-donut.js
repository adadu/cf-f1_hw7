// Jason E Anderson, ja@adadu.com, May 21 2015
// CodeFellows, HW7 Donut Shop JS only

var DonutShop = function(l, h, mn, mx, d) {
  this.locationName = l;
  this.hoursOfOperation = h;
  this.minCustomers = mn;
  this.maxCustomers = mx;
  this.averageDonutsHr = d;
  this.rand = Math.random();
  this.shopLocation = function() {
    return l;
  };
  this.shopHours = function() {
    return h;
  };
  this.getDonutsPerHour = function() {
    var hr = Math.floor(this.calc() * d);
    return hr;
  };
  this.getDonutsPerDay = function() {
    var day = Math.floor(this.getDonutsPerHour() * h);
    return day;
  };
  this.calc = function() {
    var random = (this.rand * mx - mn + 1) + mn;
    return random;
  };
};

var dT = new DonutShop("Downtown", 16, 8, 43, 4.5);
var cH = new DonutShop("Captiol Hill", 19, 4, 37, 2);
var sLU = new DonutShop("South Lake Union", 14, 9, 23, 6.33);
var we = new DonutShop("Wedgewood", 14, 2, 28, 1.25);
var ba = new DonutShop("Ballard", 14, 8, 58, 3.75);

  function DonutMaster() {
  this.shopList = [];
  this.addShop = function(addName) {
    return this.shopList.push(addName);
  };

  this.generateReport = function() {
    for (var i = 0; i < this.shopList.length; i++) {
      $("#report").append("<tr id=row" + i + "/></tr>");
      $("#row" + i ).append("<th class=shopLoc>" + this.shopList[i].shopLocation() + "</th>");
      $("#row" + i ).append("<td class=shopDetails>" + this.shopList[i].shopHours() + "</td>");
      $("#row" + i ).append("<td class=shopDetails>" + this.shopList[i].getDonutsPerHour() + "</td>");
      $("#row" + i ).append("<td class=shopDetails>" + this.shopList[i].getDonutsPerDay() + "</td>");
    }
  };

  this.updateReport = function() {
    //loops through the list of DonutShops and output location/donutperhour/donutperday //
    for (var i = 0; i < this.shopList.length; i++) {
      $("#l" + i).text(this.shopList[i].shopLocation);
      $("#h" + i).text(this.shopList[i].shopHours);
      $("#dHour" + i).text(this.shopList[i].getDonutsPerHour());
      $("#dDay" + i).text(this.shopList[i].getDonutsPerDay());
      // $("#d" + i).text(this.shopList[i].averageDonutsHr);
      console.log("LOC: " + this.shopList[i].shopLocation + "HOURS: " +
                  this.shopList[i].shopHours + ", D/DAY: " +
                  this.shopList[i].getDonutsPerDay() + ", D/HOUR: " +
                  this.shopList[i].getDonutsPerHour() + "");
    }
  };

  this.addRows = function() {
    for (var i = 0; i < this.shopList.length; i++) {
      $("#donutTable").append("<tr id='row" + i + "'></tr>");
      $("#row" + i).append("<th id='" + this.shopList[i].shopLocation + "'</th>");
      $("#row" + i).append("<td id='" + this.shopList[i].shopHours + "'></td>");
      $("#row" + i).append("<td id='dHour" + i + "'></td>");
      $("#row" + i).append("<td id='dDay" + i + "'></td>");
    }
  };

  this.formGenerator = function() {
    for (var i = 0; i < this.shopList.length; i++) {
      var formText = "<form><tr><td><input type='text' id='l'" + i +
        "name='Location' placeholder='Location'></input></td>" +
        "<td><input type='text' id='h'" + i +
        "name='Hours' placeholder='Hours'></input></td>" +
        "<td><input type='text' id='mn'" + i +
        "name='Min' placeholder='Minimum Customers'></input></td>" +
        "<td><input type='text' id='mx'" + i +
        "name='Max' placeholder='Maximum Customers'></input></td>" +
        "<td><input type='text' id='d'" + i +
        "name='Donuts' placeholder='Avg Donuts/Customer'></input></td>" +
        "</tr><tr><td><button type='button' id='btn'" + i +
        "name='Button'></button></td></tr></form>";
      $("#row" + i).append(formText);
      $("#btn" + i ).on("click", function(e) {
      e.preventDefault();
      var id = $(this).attr("id");
      var i = id.substr(3);
      var l = $("#l" + i).val()
      var h = $("#h" + i).val()
      var mn = $("#mn" + i).val()
      var mx = $("#mx" + i).val()
      var d = $("#d" + i).val()
      console.log("loc " + mn);
      console.log("hrs " + mn);
      console.log("mn " + mn);
      console.log("mn " + mn);
      console.log("avg d " + mx);
      });
      this.shopList[i].shopLocation = l;
      this.shopList[i].shopHours = h;
      this.shopList[i].mn = mn;
      this.shopList[i].mx = mx;
      this.shopList[i].d = d;
      this.updateReport();
    }
  };
}

var donutMaster = new DonutMaster();
donutMaster.addShop(dT);
donutMaster.addShop(cH);
donutMaster.addShop(sLU);
donutMaster.addShop(we);
donutMaster.addShop(ba);

$(document).ready( function() {
  donutMaster.addRows();
  donutMaster.updateReport();
  donutMaster.formGenerator();
  //donutMaster.generateReport();
  $(".shopDetails").hide();
  $("#wrapper").delay(400).fadeTo('slow', 1);
  $("#donutTable").fadeTo(1200, 1);
  $(".shopLoc").mouseout(function() {
    $(this).siblings().fadeTo(100, 0);
  });
  $(".shopLoc").mouseenter(function() {
    $(this).siblings().fadeTo(10, 1);
  });


});


