'use strict';

//module.exports = function (Review) {
//  Review.beforeRemote('create', function (context, user, next) {
//    context.args.data.date = Date.now();
//    context.args.data.reviewerId = context.req.accessToken.userId;
//    next();
//  });
//};

module.exports = function (Model, options) {
  // Model is the model class
  // options is an object containing the config properties from model definition
  Model.defineProperty('created', { type: Date, default: '$now' });
  Model.defineProperty('modified', { type: Date, default: '$now' });

  Model.observe('before save', function event(ctx, next) { //Observe any insert/update event on Model
    if (ctx.instance) {
      ctx.instance.comment = "wwwwwwww";
    } else {
      ctx.data.comment = "hgjhgjh";
    }
    console.log(ctx.instance);
    console.log("-----------");
    console.log(ctx.data);

    next();
  });
};
