<template>
  <div id="app">
    <h1>{{title}}</h1>
    <input v-model="newitem" v-on:keyup.enter="addnew">
    <ul>
      <li v-bind:class="{finish: item.isFinished}" v-for="item in items" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
  import Store from './windowstore'
  console.log(Store)
export default {
  data: function () {
    return {
      title: 'this is a todo list',
      items: Store.fetch(),
      newitem: ''
    }
  },
  watch: {
      items: {
          handler: function (value,oldvalue) {
            Store.save(this.items)
          },
        deep: true
      }
  },
  methods: {
      toggleFinish: function (item) {
        item.isFinished=!item.isFinished;
      },
      addnew: function () {
        console.log(this.newitem)
        this.items.push({
          label: this.newitem,
          isFinished: false
        })
        this.newitem= ''
      }
  }
}
</script>

<style>
  .finish{
    text-decoration: underline;
  }
  html{
    height: 100%;
  }
  body{
    display: flex;
    align-items: center;
  }
  #app
  {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
