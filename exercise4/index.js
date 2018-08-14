function removeByIndex(arr, index) {
   arr.splice(index, 1);
}
/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    //var coll = Object.create(collection);
    //var _collect = [];
    //  console.info(collection);
    var coll = [].slice.call(collection);
    var arg = [];
    for (var i = 1; i < arguments.length; i++) {
        //console.info(arguments[i]);
        var func = arguments[i];
        if (func.name === 'filter') {
          //console.info(func.name);
            //for ( var j = 0; j < coll.length; j++) {
            var j = 0;
            while(j != coll.length) {
              //console.info(coll.length);
              //console.info(res);
              if(!func(coll[j])) {
                  coll.splice(j, 1);
              } else {
                  j++;
              }
            }
        } else {
            arg.push(arguments[i]);
        }
        //console.info(coll);
        //_collect.push(func(collection));
    }
    //console.info(arg);
    for (i = 0; i < arg.length; i++) {
        func = arg[i];
        //console.info(i);
        if (func.name === 'select') {
            for (j = 0; j < coll.length; j++) {
                //console.info(coll[i]);
                coll[j] = func(coll[j]);
                //console.info(coll[j]);
                //_collect.push();
            }
        }
    }
//    console.info(_collect);
    return coll;
}

/**
 * @params {String[]}
 */
function select() {
  var arg = [].slice.call(arguments);
  return function select(collection) {
    var _collect = {};
    for (var i = 0; i < arg.length; i++) {
        if (collection.hasOwnProperty(arg[i])) {
            _collect[arg[i]] = collection[arg[i]];
//            console.info(_collect);
        }
    }
    return _collect;
  }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return function filter(collection) {
      //console.info(property);
      //console.info(collection);
      //console.info(property);
      //console.info(values);
      if (collection.hasOwnProperty(property) &&
          values.includes(collection[property])) {
          // for (var i = 0; i < this.values.length; i++)
          //   if (collection[this.property] === this.values[i])
              //console.info(collection[property]);
              return true;
      }
      return false;
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
