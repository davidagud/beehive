var pid = process.pid;

module.exports = function(app){
    app.post('/api/visits', function(req, res){

        // Store the supplied visit data
        app.visits.push(req.body);

        var visitId = app.visits.length;
        console.log('Stored visit count: ' + visitId + ' on ' + pid);

        res.status(201).json({'id':visitId});
    });
}
