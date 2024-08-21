const { appendFileSync } = require("fs")

module.exports = () => {
  return async (ctx, next) => {
    const start = Date.now();
    const requestTIme = new Date()
    await next();
    const ms = Date.now() - start;
    const logTime = `${requestTIme} --- ${ctx.method} ${ctx.url} - ${ms}ms`
    
    appendFileSync('./log.txt', logTime + '\n')
  };
}