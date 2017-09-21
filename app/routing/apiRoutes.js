// Data
// =============================================================
var tableData = require("../data/table-data.js");
var waitlistData = require("../data/waitinglist-data.js");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(waitlistData);
  });

   app.post("/api/tables", function(req, res) {
    if(tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitlistData.push(req.body);
      res.json(false);
    }
  });
}