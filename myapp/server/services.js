const db = require('./db.js')
const email=require('./emailverify')

exports.start = (req,res)=>{
}
// 登录注册处理
exports.login = (req,res)=>{
  let username = req.body.username
  let pwd = req.body.password
  // 查询语句
  let sql = 'select * from userinfo where user_name = ?';
  db.query(sql,username, function(qerr, vals, fields) {
    if(!vals.length){
      return res.json({status:1,msg:'登陆失败'});
    }else{
      if(vals[0].password==pwd){
        return res.json({status:1,msg:'登陆成功'});
      }
      return res.json({status:1,msg:'密码错误'});
    }
  });
}

/**
 * 简单注册不需要邮箱验证
 */
exports.register = (req,res)=>{
  let uername=req.body.uername;
  let password=req.body.password;
  let email=req.body.email;

  const userInfo = useremailIsExist(username);
  if(userInfo !== null &&userInfo.status!=1){
    console.log(userInfo.msg);
    return
  }
  const emailInfo=useremailIsExist(email)
  if(emailInfo !==null && emailInfo.status!=1){
    console.log(emailInfo.msg);
    return
  }
  var fetch_sql='insert into userinfo(user_name,password,email) values(?,?,?)';
  var sql_params=[user_name,password,email]
  db.query(fetch_sql,sql_params,(qerr,vals,fields)=>{
    return res.json({status:1,msg:'注册成功'});
  })
}

/**
 * 注册
 */
exports.registerwhithemail = async ({ user_name, password, email }) => {
  const userInfo = await usernameIsExist({ user_name });
  if (userInfo !== null && userInfo.status !== 1) {//userInfo.status决定该用户状态不可用
    //用户已存在
    console.log(userInfo.msg);
  }
  //判断邮箱是否存在
  const emailInfo = await useremailIsExist({ email });
  if (emailInfo !== null && emailInfo.status !== 1) {
    //邮箱已存在
    console.log(emailInfo.msg)
  }
  //生成邮箱校验码
  const verify_key = uuidv4();

  const data = userInfo || emailInfo;

  let result = null;

  if (data) {
    //已经存在用户数据了,但是该用户没有验证,所以重新发送一封邮件让用户验证
    await updateUserInfo({
      user_id: data.user_id,
      verify_key,
    });
    email.sendRegisterEmail({ user_id: data.user_id, email, verify_key }); //发送校验邮箱
  } else {
    //新增用户
    result = await addUser({
      user_name,
      password: md5(password),
      email,
      verify_key,//随机生成字符串
    });
    const { user_id, email, verify_key } = result;
    email.sendRegisterEmail({ user_id, email, verify_key }); //发送校验邮箱
  }
  return new Success(result);//新增成功
};

//判断用户名是否存在
var usernameIsExist=function(username,res){
  fetch_sql='select * from userinfo where user_name=?';
  db.query(fetch_sql,username,function(qerr, vals,fields){
    if(!vals.length){
      return res.json({status:1,msg:'可以注册'});
    }else{
      return res.json({status:0,msg:'用户名存在'});
    }
  });
}

//判断用户邮箱是否存在
var useremailIsExist=function(email,res){
  fetch_sql='select * from userinfo where email=?';
  db.query(fetch_sql,email,function(query,vals,fields){
    if(!vals.length){
      return res.json({status:1,msg:'可以注册'});
    }else{
      return res.json({status:0,msg:'用户邮箱存在'});
    }
  })
}


/**
 * 查询操作
 */
exports.search=(req,res)=>{
  let key_word=req.body.key_word;

}

/**
 * 管理功能
 */
exports.admin=(req,res)=>{

}


