const res = require("express/lib/response");

const userRoutes = (app, fs) => {
  const dataPath = "./data/notes.json";

  const readFile = (
    callback,
    returnJSON = false,
    filePath = dataPath,
    encoding = "utf-8"
  ) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err;
      }

      callback(returnJSON ? JSON.parse(data) : data);
    });
  };

  const writeFile = (
    fileData,
    callback,
    filePath = dataPath,
    encoding = "utf8"
  ) => {
    fs.writeFile(filePath, fileData, encoding, (err) => {
      if (err) {
        throw err;
      }

      callback();
    });
  };

  // Get a list of users
  app.get("/users", (req, res) => {
    readFile((data) => {
      res.send(data);
    }, true);
  });

  //   Create a new user
  app.post("/users", (req, res) => {
    readFile((data) => {
      const newUserId = Date.now().toString();

      data[newUserId] = req.body;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send("new user added");
      });
    });
  });
};

module.exports = userRoutes;
