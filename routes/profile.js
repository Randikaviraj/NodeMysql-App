const express = require("express");

const router = express.Router();
const mysqlConnection = require("../db/mysql_connection");

router.get("/home", (req, res) => {
  console.log(req.user["firstname"]);
  res.render("profile", {
    layout: false,
    fname: req.user["firstname"],
    lname: req.user["lastname"],
    email: req.user["email"],
    area: req.user["workingarea"],
  });
});

router.get("/mylist", (req, res) => {
  var fname = ["a","b","c"];
  var lname = ["a","b","c"];
  var startdate = [1,2,2];
  var enddate = [1,2,3];
  var belongArea = [1,2,3];
  var deviceid = [11,22.33];
  var data=[
      {
        fname:"randika",
        lname:"viraj",
        startdate:5,
        enddate:6,
        belongArea:"col",
        deviceid:11
      },
      {
        fname:"randika",
        lname:"viraj",
        startdate:5,
        enddate:6,
        belongArea:"col",
        deviceid:11
      },{
        fname:"randika",
        lname:"viraj",
        startdate:5,
        enddate:6,
        belongArea:"col",
        deviceid:11
      }
  ]
  res.render("mylist", {
    layout: false,
    fname: req.user["firstname"],
    lname: req.user["lastname"],
    email: req.user["email"],
    area: req.user["workingarea"],
    data:data
  });
  //   try {
  //     var sql =
  //       "SELECT * FROM person INNER JOIN phi ON person.MCI=" +
  //       mysqlConnection.escape(req.user["mci"]);
  //     mysqlConnection.query(
  //       {
  //         sql: sql,
  //         timeout: 40000,
  //       },
  //       function (error, results, fields) {
  //         if (!error) {
  //           var json = JSON.parse(JSON.stringify(results));
  //           console.log(json);
  //           // var data = json[0];
  //           var fname=[]
  //           var lname=[]
  //           var startdate=[]
  //           var enddate=[]
  //           var belongArea=[]
  //           var deviceid=[]
  //           for (let index = 0; index < json.length; index++) {
  //             fname.push(json[index]["FirstName"])
  //             lname.push(json[index]["LastName"])
  //             startdate.push(json[index]["StartDate"])
  //             enddate.push(json[index]["EndDate"])
  //             belongArea.push(json[index]["BelongArea"])
  //             deviceid.push(json[index]["DeviceID"])
  //           }

  //           res.render("mylist", {
  //             layout: false,
  //             fname: req.user["firstname"],
  //             lname: req.user["lastname"],
  //             email: req.user["email"],
  //             area: req.user["workingarea"],
  //           });
  //         } else {
  //           console.log(error);
  //           res.render("loginpage", { layout: false, data: false });
  //         }
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
});

router.get("/personreg", (req, res) => {
  res.render("personReg", { layout: false });
});

module.exports = router;
