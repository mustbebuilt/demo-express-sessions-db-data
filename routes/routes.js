const express = require("express");

const router = express.Router();

module.exports = app => {
  router.get("/example", (req, res) => {
    if (!req.session.login) {
      res.redirect("/login");
    } else {
      console.dir(req.session);
      return res.render("example", {
        title: "My EJS Example",
        firstname: "Hello EJS Template",
        surname: "My Heading Two"
      });
    }
  });
  router.get("/login", (req, res) => {
    return res.render("login");
  });

  router.post("/login", (req, res) => {
    // console.dir(req.body);
    let username = req.body.username;
    let password = req.body.password;
    //
    app
      .set("myDb")
      .collection("appUsers")
      .find({ name: username, password: password })
      .toArray(function(err, docs) {
        if (err) {
          console.error(err);
        }
        if (docs.length > 0) {
          req.session.login = true;
          res.redirect("/example");
        } else {
          res.redirect("/login");
        }
      });
  });

  router.get("/logout", (req, res) => {
    req.session.destroy(function(err) {
      res.redirect("/login");
    });
  });

  return router;
};
