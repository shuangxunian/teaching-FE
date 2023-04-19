var express = require("express"); //引用外部模块接口，也就是获取模块对象
var router = express.Router();//创建路由实例
//调用mysql模块
const mysql = require("mysql");
//配置本机mysql连接基本信息
let connectInfo = mysql.createConnection({
	host: 'bj-cynosdbmysql-grp-kei86rge.sql.tencentcdb.com',
	port: 29905,
	user: 'root',
	password: '189857570wyl.',
	database: 'test1'
})
// 数据库建立连接
connectInfo.connect();
// 增
// const sql = 'INSERT INTO `test1` (`id`, `name`, `add`) VALUES (?,?,?);'
// const data = [5, 'name5', 'add5']

// connectInfo.query(sql, data, (error, result, fields) => {
//   if (error) {
// 		console.log('[query]-:' + error)
// 	} else {
// 		console.log(result);
// 	}
// })


// 删
// const sql = 'delete from `test1`  where `id`= ?'
// const data = 5

// connectInfo.query(sql, data, (error, result, fields) => {
// 	if (error) {
// 		console.log('[query]-:' + error)
// 	} else {
// 		console.log(result)
// 	}
// })

// 改
// const sql = 'update `test1` set  `name`= ? , `add`= ? where `id`= ?'
// const data = ['name5new', 'add5new', 5]

// connectInfo.query(sql, data, (error, result, fields) => {
// 	if (error) {
// 		console.log('[query]-:' + error)
// 	} else {
// 		console.log(result)
// 	}
// })


// 查
// const sql = 'select * from `test1` where `name`= ? and `id`= ?'
// const data = ['name5', 5]

// connectInfo.query(sql, data, (error, result, fields) => {
// 	if (error) {
// 		console.log('[query]-:' + error)
// 	} else {
// 		console.log(result)
// 	}
// })

module.exports = router;
