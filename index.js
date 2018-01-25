const async = require('async');
const fs = require('file-system');


async.concat(['dir1','dir2','dir3'], fs.readdir, (err, files) =>{
    // files is now a list of filenames that exist in the 3 directories
    if(err) {
        console.log('Error', err);
    } else {
        console.log('files>>', files);
    }
});


var enableSearch = (bucket) => {
    console.log('enableSearch');

    //cb('CB enableSearch....');
}

var updateSchema = (bucket) => {
    console.log('updateSchema');

    //cb('CB updateSchema """"');
}

var updateSchema2 = (bucket, cb) => {
    console.log('updateSchema 2');

    cb('CB updateSchema2 """"');
}


async.applyEach([enableSearch, updateSchema, updateSchema2], 'bucket', (data) => {
    console.log('callback', data);
});



