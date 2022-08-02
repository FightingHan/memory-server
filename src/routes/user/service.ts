
import * as express from 'express'
import User from '../../model/User'

var router = express.Router();

// 异常状态码对应的文字提示
const errMessage = {
  '11000': '该用户名已被注册'
}

// 用户注册
router.post('/register', async (req, res, next) => {
  // 二次数据校验
  if (!req.body.password || !req.body.name) return;
  try {
    const user = await User.create({
      name: req.body.name,
      password: req.body.password
    })
    res.send({
      code: 200,
      message: '成功',
      data: user
    })
  } catch (err) {
    let message = '未能成功注册，请稍后再试'
    if(err.code === 11000){
      message = errMessage[err.code]
    }
    res.send({
      code: err.code,
      message,
      data: {},
    })
  }
});

// 获取单个用户信息
router.get('/info', async (req: Record<string,any>, res, next) => {
  const user = await User.findOne({
    _id: req.user_id
  })
  res.send({
    code: 200,
    data: user
  })
})

// 获取用户列表
router.get('/list', async (req, res, next) => {
  const userList = await User.find()
  res.send({
    code: 200,
    msg: '获取成功',
    data: userList,
  })
})

module.exports = router;