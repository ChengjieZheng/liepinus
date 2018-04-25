const router = require('express').Router()
const axios = require('axios')
const utils = require('utility')
const model = require('../db/model')
const User = model.getModel('user')
const _filter = {'pwd':0, '__v': 0}

// User.remove({}, function(err, doc){})

router.post('/login', function(req, res){
  const {user,pwd} = req.body;
  User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err, doc){// not return pwd
    if (!doc) {
      return res.json({code:1, msg: 'username or password is not currect'})
    }
    res.cookie('userid', doc._id)
    return res.json({code:0,data:doc})
  })
})

router.post('/register', function(req,res){
	console.log("data from client: ", req.body)
  const {user, pwd, email, type} = req.body
  // if user already registed, return message to client:"username is already there"
  User.findOne({user:user}, function(err,doc){
    if (doc) {
      return res.json({code:1, msg: 'Username is occupied'})
    }
    // create方法不能发挥生成后的ID，所有我们改用Save方法
    const userModel = new User({user, type, email, pwd:md5Pwd(pwd)})
    userModel.save(function(err, doc) {
      if(err) {
        return res.json({code:1, msg: 'back-end error'})
      }
      const {user, type, email, _id} = doc;
      res.cookie('userid', _id)
      return res.json({code:0, data:{user, type, email, _id}})
    })
	})
})

function md5Pwd(pwd) {
  const salt = 'welcome_to_Liepinus_kdiejf892k$';
  return utils.md5(utils.md5(pwd+salt));
}

module.exports = router

// const baseUrl = 'https://cnodejs.org/api/v1'

// router.post('/login', function (req, res, next) {
// 	axios.post(`${baseUrl}/accesstoken`, {
// 		accesstoken: req.body.accessToken
// 	})
// 	.then(resp => {
// 		if (resp.status === 200 && resp.data.success) {
// 			req.session.user = {
// 				accessToken: req.body.accessToken,
// 				loginName: resp.data.loginname,
// 				id: resp.data.id,
// 				avatarUrl: resp.data.avatar_url
// 			}
// 			res.json({
// 				success: true,
// 				data: resp.data
// 			})
// 		}
// 	})
// 	.catch(err => {
// 		if (err.response) {
// 			res.json({
// 				success: false,
// 				data: err.response
// 			})
// 		} else {
// 			next(err)
// 		}
// 	})
// })
