var apiURL = 'https://frozen-temple-72096.herokuapp.com/api/movies'

/**
 * Actual demo
 */

var demo = new Vue({

  el: '#demo',

  data: {
    commits: null
  },

  created: function () {
    this.fetchData()
  },

  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },

  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL, true)
      xhr.onload = function () {
        var commits = JSON.parse(xhr.responseText)
        self.commits = commits.movieList;
      }
      xhr.send()
    }
  }
})
