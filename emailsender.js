const cron = require('node-cron');
const nodemailer = require('nodemailer');

// Create a transporter using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Set to true if using a secure connection (e.g., SSL/TLS)
  auth: {
    user: 'tester3.elitetechno@gmail.com',
    pass: 'turlhuuhgdlyglnx ',
  },
});

// Define the email options
const mailOptions = {
  from: 'tester3.elitetechno@gmail.com',
  to: 'yatharth.shah@jainam.biz',
  to: 'tester3.elitetechno@gmail.com',
  subject: 'This is Automation Testing Report',
  text: 'Automationn Testing report for Comet web app',
  attachments: [
    {
      filename: 'index.html',
      path: './index.html'
    }]

//   //   {
//   //     filename: 'Comet_Jainam(failed).png',//failed screenshots
//   //     path: './Comet_Jainam(failed).png',
//   // },

//   {
//       filename: 'comet.cy.js.mp4' ,
//       path: './comet.cy.js.mp4',

//   },
  
//   {
//     filename: 'comet_login.cy.js.mp4' ,
//     path: './comet_login.cy.js.mp4',

// },
//   {

//       filename: 'Report_Dividend_Report.cy.js.mp4 ' ,
//       path: './Report_Dividend_Report.cy.js.mp4',
//   },

//   {

//       filename: 'Report_FNO.cy.js.mp4 ' ,
//       path: './Report_FNO.cy.js.mp4',
//   },

//   {

//       filename: 'Report_GLobal_Report.cy.js.mp4 ' ,
//       path: './Report_GLobal_Report.cy.js.mp4',
//   },

//   {

//       filename: 'Report_Ledger.cy.js.mp4' ,
//       path: './Report_Ledger.cy.js.mp4',
//   },
//   {

//       filename: 'Report_Portfolio.cy.js.mp4 ' ,
//       path: './Report_Portfolio.cy.js.mp4',
//   },

//   {

//       filename: 'Report_Tax_Report.cy.js.mp4 ' ,
//       path: './Report_Tax_Report.cy.js.mp4',
//   },
//   {

//       filename: 'Report_Tradelog.cy.js.mp4' ,
//       path: './Report_Tradelog.cy.js.mp4',
//   },
//   {

//     filename: 'Utilities.cy.js.mp4' ,
//     path: './Utilities.cy.js.mp4',
// }]

 

};


// Schedule the task to run every 30 minutes
cron.schedule('*/30 * * * *', () => {
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(`Error sending email: ${error}`);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
});
