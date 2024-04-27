const express = require('express');
const auth = require('../middlewares/auth');
const emergencyRouter = express.Router();
require('dotenv').config();
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken);
const User = require('../model/usermodel');


emergencyRouter.post('/api/send-message',auth,async(req,res)=>{

    try {
        const { emergencyNumber , messageBody } = req.body;
        const user = await User.findById(req.user);
        const customMessage = `Emergency message from ${user.name}: ${messageBody}`; 

        client.messages
                    .create({
                    body: customMessage,
                    from: '+13343104789',
                    to: emergencyNumber
                    })
    .then(message => {
      console.log(message.sid);
      res.send('Message sent successfully');
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error sending message');
    });


        
    } catch (error) {

        res.status(500).json({
            success : false,
            message: 'Server error'
        });
        
    }
})

module.exports = emergencyRouter;