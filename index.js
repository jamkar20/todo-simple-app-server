const express = require('express');
const app = express();
const router = express.Router();
router.get('/', function (req, res) {
    res.send('Hello From Index Route');
})
app.use(router);
app.use('*',function(req,res){
    res.send('Page Not Found');
})
app.listen(8888, 'localhost', function () {
    console.log('Server Started');
});