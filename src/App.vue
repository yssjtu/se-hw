<template>
  <div id="app">
    <div class="container">
    <h1 v-text="title"></h1>
    <input v-model="newitem" v-on:keyup.enter="addnew"><i class="glyphicon glyphicon-plus" @click="addnew"></i>
    <ul>
      <li v-bind:class="{finish: item.isFinished}" v-for="(item,index) in items" v-on:click="toggleFinish(item)">
        <span>{{index+1}}</span><i>{{item.label}}</i>
        <i class="glyphicon glyphicon-remove" @click="items.splice(index,1)"></i>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
import Store from './windowstore'
export default {
  data: function () {
    return {
      title: 'ys\'s shabby todo list',
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
        if(this.newitem==='')
        {
            return
        }
        this.items.push({
          label: this.newitem,
          isFinished: false
        })
        this.newitem= ''
      },
  }
}
</script>

<style>
  h1{
    margin-bottom: 8px;
  }
  ul {
    text-align: left;
    margin-left: 50px;
    list-style-type: none;
    padding: 0;
  }
  li {
    position: relative;
    font: bold italic 25px/1.5 Helvetica, Verdana, sans-serif;
    margin-bottom: 20px;
  }

  li i {
    font: 20px/1.5 Helvetica, sans-serif;
    padding-left: 60px;
    color: #555;
  }
  span {
    color: coral;
    position: absolute;
  }
  .container {
    text-align: center;
  }
  .finish{
    text-decoration: line-through;
    text-decoration-color: blueviolet;
  }

  input {
    margin-bottom: 40px;
    box-shadow: 0 0 8px rgb(100, 144, 149);
    border: none;
    alignment: center;
  }
  button {
    margin: 3px;
    border-radius: 4px;
    color: black;
    background: none;
  }
 i {
    margin: 5px;
    font-size: 15px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.5s ease;
  }
 i:hover {
    opacity: 1;
  }
  #app
  {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #643e50;
  margin-top: 60px;
}
</style>
