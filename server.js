module.exports = (numberOfChar, callback) => {
    let str = '';
    if (!numberOfChar) {
        return callback(new Error('Please Provide Number of Characters you want to generate', null))
    }

    else if (typeof (numberOfChar) !== 'number') {
        return callback(new Error('Argument number of Characters you want to generate must be a number', null))
    }

    else {
        // # SUCCESS-CASE
        // @ RETURN RANDOM GENERATED CHARACTERS
        const string = "abcdefghijklmnopqrstuvwxxyz0123456789";
        let i = 0;

        while (i < numberOfChar) {
            str += string.charAt(Math.floor(Math.random() * string.length));
            i++;
        }

        return callback(null, str)
    }
}
