module.exports = {
    getForm: function (request, response) {
        response.render('form')
    },
    getIndex: function (req, res) {
        res.render('index', {
            title: 'Express'
        });
    },
    runFibo: function (request, response) {
        console.log(request.body);
        var userName = request.body.userName;
        var fiboNum = request.body.fiboNumber;
        var fibResults = [];
        function fibo(maxNum){
            var first, second, add;
            for( i=0; i<maxNum;i++){
                if(i === 0){
                    first = 1;
                    second = 2;
                }
                add = first + second;
                first = second;
                second = add;
                fibResults.push(add);
            }
            console.log(add);
        }
        fibo(fiboNum);
        response.render('results', {
            userName: userName,
            results: fibResults,
            fiboNum:fiboNum
        });
    }
}