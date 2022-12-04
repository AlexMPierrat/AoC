const fs = require('fs');

function load_input(day) {
    const path = "../puzzle_inputs/" + day + ".txt"
    var data
    try {
        data = fs.readFileSync(path, 'utf8');
        return data;
    } catch (err) {
        console.error(err);
        return err;
    }
}

module.exports = { load_input };
