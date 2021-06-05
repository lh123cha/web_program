const nodemailer = require('nodemailer');
const { service_ip } = require('../config');

const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com', //QQ邮箱的服务器
  port: 587, //端口号
  secure: false, //465为true,其他为false
  auth: {
    user: '1491337293@qq.com', // 自己的邮箱
    pass: '-------', // 授权码,邮箱的授权码
  },
});

/**
 * 注册用户时发送邮箱
 */
exports.sendRegisterEmail = ({ user_id, email, verify_key }) => {
  const url = `localhost:4000/regiter_success?id=${user_id}&verify_key=${verify_key}`;
  const params = {
    from: 'lh123<1491337293@qq.com>', // 收件人显示的发件人信息,xxxxxxx换成自己的qq
    to: email, // 目标邮箱号
    subject: '注册新用户',
    html: `点击链接即可注册完毕:<a style="color:red" href="${url}">${url}</a>`,
  };
  return sendMsg(params);
};

/**
 * 找回密码时发送校验码
 * @param {*} params
 */
exports.sendCode = ({ email, verify_key }) => {
  const params = {
    from: 'lh123<1491337293@qq.com>', // 收件人显示的发件人信息,xxxxxxx换成自己的qq
    to: email, // 目标邮箱号
    subject: '找回密码',
    html: `邮箱验证码:${verify_key}`,
  };
  return sendMsg(params);
};

/**
 * 发送消息
 */
const sendMsg = (params) => {
  return new Promise((resolve) => {
    transporter.sendMail(params, (err, data) => {
      resolve(null);
      transporter.close(); //发送完毕后关闭
    });
  });
};

/**
 * 注册时验证key值对不对
 * @param {*} param0
 */
exports.verifyKey = async ({ user_id, verify_key }) => {
  const userInfo = await userIsExist({ user_id, verify_key });
  if (userInfo === null) {
    return keyUnValid();//无效的校验码
  }
  await updateUserInfo({ //认证成功将verify_key置为"",并是用户状态status置为可用
    verify_key: '',
    user_id,
    status: 0,
  });
  return new Success();
};
