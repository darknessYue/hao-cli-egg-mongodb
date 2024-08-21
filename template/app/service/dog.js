const { Service } = require("egg");
const { Schema } = require("mongoose");

class DogService extends Service {
  async random() {
    const { ctx } = this;
    const res = await ctx.curl("https://dog.ceo/api/breeds/image/random", {
      dataType: "json"
    });
    return res.data;
  }
  async showPlayers() {
    const result = await this.app.model.User.find({age: {$gte: 30}}).exec()
    return result
  }
}

module.exports = DogService;