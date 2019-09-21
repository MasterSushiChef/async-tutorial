const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
const request = require("request");

const app = new Koa();
const router = new Router();
app.use(logger());

router.get("/promise", function (ctx) {
  promise = new Promise((resolve, reject) => {
    request("http://www.google.com", (err, res, body) => {
      if (err) reject(err);
      else resolve(body);
    });
  });

  promise.then((res) => {
    console.log(res);
  });
});

router.get("/", (ctx) => {
  ctx.body = "Hello World!";
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
console.log("Listening on port 3000");
/*
function add(a, b) {
  return a+b;
}

module.exports = add;
*/