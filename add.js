let add = function(numberString) {

    var character = ",";
    if (numberString.indexOf('//') == 0)
    {
      character = numberString[2];
      numberString = numberString.substring(4);
    }

    if (numberString.indexOf('\n' + character) > -1 || numberString.indexOf(character + '\n') > -1)
    {
      return "error";
    }

    var array = numberString.split(character);
    var array2 = [];
    var text = 0;

    for (i = 0; i < array.length; i++) {
         array2.push(array[i].split('\n'));
    }

    for (i = 0; i < array2.length; i++) {
        for (j = 0; j < array2[i].length; j++) {
            text += Number(array2[i][j]);
        }
    }
    return text.toString();
}

module.exports = add;
