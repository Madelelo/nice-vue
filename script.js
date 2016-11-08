var app = new Vue({
  el: '#header',
  data: {
    message: 'Awesome movie app in Vue.js'
  }
})

var app = new Vue({
  el: '#input',
  data: {
    msg: ''
  }
})



Vue.component('movie-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['mov'],
  template: '<td>{{ mov.text }}</td>'
})

var app7 = new Vue({
  el: '#movie',
  data: {
    movieList: [    //TODO: add json here
      { text: 'StarWars' },
      { text: 'DeadPool' },
      { text: 'The Big Short' }
    ]
  }
})
