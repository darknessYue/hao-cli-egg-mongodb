const { Controller } = require('egg');

class TestController extends Controller {
  async index() {
    const { ctx } = this;
    const id = ctx.params
    const { query, body } = ctx.request
    const { baseUrl } = ctx.app.config
    const persions = await ctx.service.dog.showPlayers();
    const resp = {
      id,
      query,
      body,
      baseUrl,
      persions,
      mongooseId: ctx.app.mongoose.id
    }
    ctx.helper.success({
      ctx,
      res: resp
    });
  }

  async getDog() {
    const { ctx } = this;
    const resp = await ctx.service.dog.random();
    
    ctx.helper.success({
      ctx,
      res: resp
    });
  }
  
  async gzip() {
    const { ctx } = this;
    const resp = await ctx.service.dog.random();
    // console.log(d)
    ctx.body = resp;
  }
}

module.exports = TestController;
