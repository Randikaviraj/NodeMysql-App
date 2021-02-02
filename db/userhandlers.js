const mysqlConnection = require("../db/mysql_connection");

function signupHandler(
  mci,
  fname,
  lname,
  workingarea,
  contact,
  email,
  password
) {
  var sql =
    "INSERT INTO phi VALUES(" +
    mysqlConnection.escape(mci) +
    "," +
    mysqlConnection.escape(fname) +
    "," +
    mysqlConnection.escape(lname) +
    "," +
    mysqlConnection.escape(workingarea) +
    "," +
    mysqlConnection.escape(contact) +
    "," +
    mysqlConnection.escape(email) +
    "," +
    mysqlConnection.escape(password) +
    ")";
  mysqlConnection.query(
    {
      sql: sql,
      timeout: 40000, // 40s
    },
    function (error, results, fields) {
      // error will be an Error if one occurred during the query
      // results will contain the results of the query
      // fields will contain information about the returned results fields (if any)
      if (error) {
        console.log(error);
      }
    }
  );
}

function loginHandler(mcid, password) {
  var sql = "SELECT * FROM phi WHERE password='" + password +"' AND mci='" + mcid+"'";
  mysqlConnection.query(
    {
      sql: sql,
      timeout: 40000, // 40s
    },
    function (error, results, fields) {
      // error will be an Error if one occurred during the query
      // results will contain the results of the query
      // fields will contain information about the returned results fields (if any)
      if (error) {
        console.log(error);
      }else{
        var json =  JSON.parse(JSON.stringify(results))
        console.log(json[0]["firstname"])
      }
    }
  );
}

module.exports = {
  signupHandler,
  loginHandler
};
