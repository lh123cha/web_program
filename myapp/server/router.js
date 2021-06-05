const express = require('express')
const router = express.Router()
const services = require('./services.js')
const email = require('./emailverify')//邮箱验证模块
// router.get('/',services.start)
// 登录功能
router.post('/api/login',services.login)
// 注册功能
router.post('/api/register',services.register)
//搜索数据功能
router.post('api/search',services.search)
//管理功能
router.post('api/admin',services.admin)
/**
 * 注册成功
 */
router.get('/api/regiter_success', async (ctx) => {
  const { id: user_id, verify_key } = ctx.query;
  ctx.body = await verifyKey({ user_id, verify_key });
});
module.exports = router
