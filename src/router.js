module.exports = (app) => {

    app.get('/', function (request, response) {
        response.send(
            `
            <html>
                <body>
                    Ultima School
                </body>
            </html>
            `
        );
    });

    app.get('/alunos', function (request, response) {
        response.send(
            `
            <html>
                <body>
                    Ultima School 22313131
                </body>
            </html>
            `
        );
    });
}