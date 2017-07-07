export class api {

    constructor(private app) {
        app.get("/api/lols", function(req, res) {
            res.send("lols");
        });
    }


}
//
//
//
// module.exports = function(app) {
//
//     app.get("/api/lols", function(req, res) {
//         res.send("lols");
//     });
//     
// }
