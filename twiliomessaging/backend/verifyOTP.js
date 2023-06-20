const twilio = require("twilio");
require("dotenv").config();

const accountSid = `${process.env.accountSid}`;
const authToken = `${process.env.authToken}`;

const client = twilio(accountSid, authToken);

// Sending a message on number
async function sendOTP(mobileNumber, otp) {
    try {
      await client.messages.create({
        body: `Your OTP is: ${otp} sent by Akshay Kanherkar`,
        from: `${process.env.mobileFrom}`,
        to: mobileNumber
      });
      console.log('OTP sent successfully!');
    } catch (error) {
      console.error('Failed to send OTP:', error);
    }
  }

// Verify that message
async function verifyOTP(mobileNumber, userEnteredOTP) {
    try {
      const verificationCheck = await client.verify
        .v2.services(process.env.serviceSID)
        .verificationChecks.create({
          to: mobileNumber,
          code: userEnteredOTP
        });
  
      if (verificationCheck.status === 'approved') {
        console.log('OTP verification successful!');
      } else {
        console.log('OTP verification failed. Please try again.');
      }
    } catch (error) {
      console.error('Failed to verify OTP:', error);
    }
}

// Send OTP
const mobileNumber = '+919730423294'; // The recipient's mobile number
const otp = '1234'; // The generated OTP
sendOTP(mobileNumber, otp);

// Verify OTP
const userEnteredOTP = '1234'; // The OTP entered by the user
verifyOTP(mobileNumber, userEnteredOTP);