const message = "lols";

export function lols(app) {
    app.get("/api/lols", function(req, res) {
        res.send(message);
    });
}
