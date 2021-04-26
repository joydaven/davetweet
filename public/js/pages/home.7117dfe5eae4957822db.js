webpackJsonp([3],{

/***/ "./resources/assets/js/pages/home.js":
/***/ (function(module, exports) {

var page = 1;

new Vue({
  el: '#list-1',
  data: {
    page: 1,
    items: [],
    busy: false
  },
  methods: {
    loadMore: function loadMore() {
      var _this = this;

      this.busy = true;

      var url = '/timeline' + (this.page > 1 ? '?page=' + this.page : '');

      this.$http.get(url).then(function (response) {
        var data = response.body;

        // Push the response data into items
        for (var i = 0, j = data.length; i < j; i++) {
          _this.items.push(data[i]);
        }

        // If the response data is empty,
        // disable the infinite-scroll
        _this.busy = j < 1;

        // Increase the page number
        _this.page++;
      });
    }
  }
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/pages/home.js");


/***/ })

},[2]);