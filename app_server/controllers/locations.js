/* GET 'home' page */
const homelist = function(req, res){
res.render('index', { title: 'Fitness Log App' });
};

module.exports = {
homelist
};