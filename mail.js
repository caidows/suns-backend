const nodemailer = require("nodemailer");

const send = (req) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.feishu.cn",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "node@suns.art", // generated ethereal user
            pass: "OGgzGOCKrpV4lATc", // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: '"node" <node@suns.art>', // sender address
        to: "contact@suns.art", // list of receivers
        subject: "New appointment", // Subject line
        text: JSON.stringify(req.query), // plain text body
        // html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports={
    send
}

// async..await is not allowed in global scope, must use a wrapper
async function main() {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.feishu.cn",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "node", // generated ethereal user
            pass: "OGgzGOCKrpV4lATc", // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "haotian@suns.art", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}