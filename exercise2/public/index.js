// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var textArrays = command.split(" ");
    var command_name = textArrays[0];
    if (command_name === 'ADD') {
        var name  = textArrays[1];
        if (!phoneBook.hasOwnProperty(name))
            phoneBook[name] = [];
        var numbers = textArrays[2].split(',');
        for (i = 0; i < numbers.length; i++)
            phoneBook[name].push(numbers[i]);
//        console.info(phoneBook);
        return true;
    } else if (command_name === 'REMOVE_PHONE') {
        var keys = Object.keys(phoneBook);
        for (i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (remove_phone(phoneBook[key], textArrays[1]))
              return true;
        }
        return false;
    } else if (command_name === 'SHOW') {
        phoneBook = sortObject(phoneBook);
        var book = [];
        var keys = Object.keys(phoneBook);
        for (i = 0; i < keys.length ; i++) {
          var key = keys[i];
          if (phoneBook[key][0])
              book.push(key + ': ' + phoneBook[key].join(', '));
        }
  //      console.info(book);
        return book;
    }
    function sortObject(o) {
    return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
}
    function remove_phone (numbers, number) {
      for (j = 0; j < numbers.length; j++) {
          if (numbers[j] === number) {
              numbers.splice(j,1);
              return true;
          }
      }
      return false;
    }
};
