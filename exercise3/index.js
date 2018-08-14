/**
 * @param {String} date
 * @returns {Object}
 */

module.exports = function (date) {
  var regexp = /^(\d{1,4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/;
  var parts = date.match(regexp);
  //console.info(parts);
  this.currentDate = new Date(parseInt(parts[1], 10),
                             parseInt(parts[2], 10)-1,
                             parseInt(parts[3], 10),
                             parseInt(parts[4], 10),
                             parseInt(parts[5], 10));
  //console.info(currentDate);
    return {
        get value() {
          return DateToString(currentDate)
        },
        'add': function (value, unit){
            if (value < 0)
                throw new TypeError;
            else
              switch (unit) {
                case 'years':
                  oldValue = currentDate.getFullYear();
                  oldValue += value;
                  currentDate.setFullYear(oldValue);
                  break;
                case 'months':
                  oldValue = currentDate.getMonth();
                  oldValue += value;
                  currentDate.setMonth(oldValue);
                  break;
                case 'days':
                  oldValue = currentDate.getDate();
                  oldValue += value;
                  currentDate.setDate(oldValue);
                  break;
                case 'hours':
                  oldValue = currentDate.getHours();
                  oldValue += value;
                  currentDate.setHours(oldValue);
                  break;
                case 'minutes':
                  oldValue = currentDate.getMinutes();
                  oldValue += value;
                  currentDate.setMinutes(oldValue);
                  break;
                default:
                  throw new TypeError;
              }
            // this.datestring = DateToString(currentDate);
            // console.info(currentDate);
            return this;
        },
        subtract: function (value, unit) {
            if (value < 0)
              throw new TypeError;
            else
              switch (unit) {
                case 'years':
                  oldValue = currentDate.getFullYear();
                  oldValue -= value;
                  currentDate.setFullYear(oldValue);
                  break;
                case 'months':
                  oldValue = currentDate.getMonth();
                  oldValue -= value;
                  currentDate.setMonth(oldValue);
                  break;
                case 'days':
                  oldValue = currentDate.getDate();
                  oldValue -= value;
                  currentDate.setDate(oldValue);
                  break;
                case 'hours':
                  oldValue = currentDate.getHours();
                  oldValue -= value;
                  currentDate.setHours(oldValue);
                  break;
                case 'minutes':
                  oldValue = currentDate.getMinutes();
                  oldValue -= value;
                  currentDate.setMinutes(oldValue);
                  break;
                default:
                throw new TypeError;
              }
            return this;
        }
    }
};

function DateToString(date) {
  return  date.getFullYear() + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" +
 ("0" + date.getDate()).slice(-2) + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
}
