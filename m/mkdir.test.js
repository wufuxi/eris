var fs = require('fs');

it('recursively create directories', function (done)
{
    fs.unlink(__dirname + '/mkdirTest/', function ()
    {
        mkdir(__dirname + '/mkdirTest/1', function (err)
        {
            if (err) return done(err);

            done();
        });
    });
});