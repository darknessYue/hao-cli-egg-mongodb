/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const logger = app.middleware.myLogger();
  const gzip = app.middleware.gzip({
    threshold: 1024
  });
  router.get('/', controller.home.index);
  router.get('/test', controller.test.index);
  router.get('/dog', logger, controller.test.getDog);
  router.get('/needzip', gzip, controller.test.gzip);
};
