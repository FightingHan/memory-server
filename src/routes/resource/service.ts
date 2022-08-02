import * as express from 'express'
import Resource from '../../model/Resource'

var router = express.Router();

// 资源增加
router.post('/add', async (req, res, next) => {
  const resource = await Resource.create({
    userId: req.body.userId,
    content: req.body.content
 }) 
 res.send(resource)
});

// 资源详情
router.get('/info', async (req:Record<string,any>, res, next) => {
  const resource = await Resource.findOne({
    _id: req.user_id  })
  res.send({
    code: 200,
    data: resource
  })
})

// 资源列表查询
router.get('/list', async(req, res, next)=>{
  const resourceList = await Resource.find()
  res.send({ 
   code: 200,
    msg: '获取成功',
    data: resourceList
  })
})

module.exports = router;