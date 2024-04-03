// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

app.route("/api/:date").get((req, res) => {
  const data = req.params.date;

  try {
    if (isNaN(data)) {
      const date = new Date(data);
      if (date == "Invalid Date")
        return res.status(400).send({ message: "Invalid Date" });
      else ifString(date);
    } else {
      const millisecond = parseInt(data);
      const date = new Date(millisecond);
      ifMillisecond(date);
    }
  } catch (error) {
    return res.status(400).send({ message: error });
  }

  function toUTCTimeStamp(value) {
    return value.toUTCString();
  }

  function ifString(date) {
    const unixTimeStamp = date.getTime();
    const utcTimeStamp = toUTCTimeStamp(date);

    res.send({ unix: unixTimeStamp, utc: utcTimeStamp });
  }

  function ifMillisecond(date) {
    const utcTimeStamp = toUTCTimeStamp(date);
    res.send({ unix: data, utc: utcTimeStamp });
  }
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
