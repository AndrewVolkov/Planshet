/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
  var correctHashtags = [];
  hashtags.forEach(checkHashtags);

  function checkHashtags (hashtag, index) {
      if (!isArrayHasValue(correctHashtags, hashtag.toLowerCase()))
          correctHashtags.push(hashtag.toLowerCase());
  }
  function isArrayHasValue(array, entry) {
      for (i = 0; i < array.length; i++) {
          if (array[i] === entry) {
              return true;
          }
      }
      return false;
  }
  return correctHashtags.join(', ');
};
