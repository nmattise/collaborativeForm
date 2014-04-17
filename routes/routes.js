module.exports = {
    getForm: function (request, response) {
        response.render('form')
    },
    getIndex: function (req, res) {
        res.render('index', {
            title: 'Express'
        });
    },
    runFibo: function(request,response){
        console.log(request.body);
        var userName = request.body.userName;
        response.render('results', {
            userName:userName
        });
    }
}