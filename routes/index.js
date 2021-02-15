/*
  Student Name: Changhao Tian
  Student ID: 301161653
  Date: 2021-02-14
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index Page'});
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home Page'});
});

router.get("/about", function(req, res, next) {
  res.render('about', { 
    title: 'About Me Page',
    photo: 'Assets/images/myphoto.jpg',
    resume: 'https://centennialcollegeedu-my.sharepoint.com/:b:/g/personal/ctian5_my_centennialcollege_ca/Ebc62YLikQZOkr6JB6SYp4EBTdd78hAQxSltqoF5Ueju1Q?e=CvQ5Pe'
  })
})

router.get("/projects", function(req, res, next) {
  res.render('projects', { 
    title: 'Projects page',
    description1: 'This is a C# application',
    description2: 'This is a django web project used mysql as database',
    description3: 'This is a Caculator application running on Android Platform',
    shortcut1: 'Assets/images/Csharp.png',
    shortcut2: 'Assets/images/django1.png',
    shortcut3: 'Assets/images/django2.png',
    shortcut4: 'Assets/images/android.png'
  })
})

router.get("/services", function(req, res, next) {
  res.render('services', { 
    title: 'Services page',
    samplePic1: 'Assets/images/webspider.png',
    samplePic2: 'Assets/images/pc.jpg',
    samplePic3: 'Assets/images/benchmark.png'
  })
})

router.get("/contact", function(req, res, next) {
  res.render('contact', { title: 'Contact Me'})
})
// router.get("/", function(req, res, next) {
//   res.render('', { title: ''})
// })
// router.get("/", function(req, res, next) {
//   res.render('', { title: ''})
// })

module.exports = router;