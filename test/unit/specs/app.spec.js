import Vue from 'vue'
import app from '../../../src/App.vue'
import Store from '../../../src/windowstore.js'

describe('test todo list.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue(app).$mount()
    expect(vm.title).to.equal('ys\'s shabby todo list')
  })
  it('test add new',() => {
    const vm = new Vue(app).$mount();
    vm.newitem = 'abcd';
    vm.addnew();
    expect(vm.items[0].label).to.equal('abcd');
    expect(vm.items[0].isFinished).to.equal(false);
  })
  it('test togglefinish',() => {
    const vm = new Vue(app).$mount();
    vm.newitem = 'abcd';
    vm.addnew();
    vm.toggleFinish(vm.items[0]);
    expect(vm.items[0].isFinished).to.equal(true);
  })
    it('test store fetch',() => {
      const vm = new Vue(app).$mount();
      vm.newitem = 'abcd';
      vm.addnew();
      Store.save(vm.items);
      vm.items = [];
      vm.items = Store.fetch();
      expect(vm.items[0].label).to.equal('abcd');
      expect(vm.items[0].isFinished).to.equal(false);
  })

})
