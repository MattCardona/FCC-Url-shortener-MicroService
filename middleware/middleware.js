const validator = require('validator');

var obj = {}

var midd = (req, res, next) => {
  var url = req.params[0];
  var fullUrl = req.protocol + req.get('host') + req.url;
  var redirectUrl = req.protocol + '://' + req.get('host') + '/new/';
  if(obj[url] === undefined){
    if(!validator.isURL(url)){
      res.status(400).send("Error the URL is invalid, please check for errors.");
      req.obj = {error: "Error the URL is invalid, please check for errors."};
      next();
    }else{
      obj[url]= {
        host: req.protocol + req.get('host'),
        ogUrl: url,
        full: fullUrl,
        reUrl: Math.floor(Math.random() * 20) + 1
         }
      obj[obj[url].reUrl]={
        ogUrl: url
       }
       req.obj = {url, redirectUrl: redirectUrl + obj[url].reUrl};
       next();
     }
  }else if(obj[url] !== undefined){
    var copy = obj[url].ogUrl;
    res.redirect(301, obj[url].ogUrl);
    delete obj[copy];
    delete obj[url];
  }
};

module.exports = { midd }