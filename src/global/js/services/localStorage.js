export default {
  set: function(key, value) {
    let localValue;

    if(typeof value === 'object') {
      localValue = JSON.stringify(value);
    }

    window.localStorage.setItem(key, localValue);
  },

  get: function(key) {
    return window.localStorage.getItem(key);
  },

  remove: function (key) {
    window.localStorage.removeItem(key);
  }
}
