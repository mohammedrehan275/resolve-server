const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: async function (callback) {
    try {
      await client.connect();
      console.log("connected to db");
    } catch (e) {
      console.error(e);
    }

    _db = client.db("sample_mflix");

    return _db === undefined ? false : true;
  },

  getDb: function () {
    return _db;
  },
};
