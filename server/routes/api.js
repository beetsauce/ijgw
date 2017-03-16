const express = require('express');
const axios   = require('axios');
const router  = express.Router();

const nodemailer = require( 'nodemailer' );

router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
});

router.get( '/', ( req, res ) => {
  console.log( "stuff");
  res.send( 'api works' );
});

router.post( '/contact', ( req, res ) => {

  console.log( "Hit this shit!");

  // let transporter = nodemailer.createTransport({
  //     sendmail: true,
  //     newline: 'windows'
  // });
  // transporter.sendMail({
  //     from: 'sender@example.com',
  //     to: 'iamtheocean17@gmail.com',
  //     subject: 'Message',
  //     text: 'I hope this message gets delivered!'
  // }, (err, info) => {
  //     console.log(info);
  // });

} );


module.exports = router;
