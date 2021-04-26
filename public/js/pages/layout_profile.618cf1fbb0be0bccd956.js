webpackJsonp([2],{

/***/ "./resources/assets/js/pages/layout_profile.js":
/***/ (function(module, exports) {

new Vue({
    el: '#app',

    data: {
        username: App.username,
        isFollowing: App.isFollowing,
        followBtnTextArr: ['Follow', 'Unfollow'],
        followBtnText: ''
    },

    methods: {
        follows: function follows(event) {
            var _this = this;

            var csrfToken = Laravel.csrfToken;
            var url = this.isFollowing ? '/unfollows' : '/follows';

            this.$http.post(url, {
                'username': this.username
            }, {
                headers: {
                    'X-CSRF-TOKEN': csrfToken
                }
            }).then(function (response) {
                var data = response.body;

                if (!data.status) {
                    alert(data.message);
                    return;
                }

                _this.toggleFollowBtnText();
            });
        },

        toggleFollowBtnText: function toggleFollowBtnText() {
            this.isFollowing = (this.isFollowing + 1) % this.followBtnTextArr.length;
            this.setFollowBtnText();
        },

        setFollowBtnText: function setFollowBtnText() {
            this.followBtnText = this.followBtnTextArr[this.isFollowing];
        }
    },

    mounted: function mounted() {
        this.setFollowBtnText();
    }
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/pages/layout_profile.js");


/***/ })

},[3]);