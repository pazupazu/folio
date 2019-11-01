import express from "express";

const router = express.Router();

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express();
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

// /api/login
router.post("/login", (req, res) => {
  if (req.body.username === "kawanishi" && req.body.password === "portfolio") {
    req.session.authUser = { username: "kawanishi" };
    return res.json({ username: "kawanishi" });
  }
  res.status(401).json({ message: "パスワードを入力してください" });
});

// /api/logout
router.post("/logout", (req, res) => {
  delete req.session.authUser;
  res.json({ ok: true });
});

// Export the server middleware
export default {
  path: "/api",
  handler: router
};
