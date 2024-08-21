module.exports = {
  success({ctx, res, message}) {
    ctx.body = {
      errno: 0,
      data: res ? res : null,
      message: message ? message : '请求成功'
    }
    ctx.status = 200;
  }
}