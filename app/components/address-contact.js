import Ember from 'ember';

export default Ember.Component.extend({
    name: "",
    actions: {

    onEnter() {
      const name = this.get('name');
      if (name) {
        this.get('addContact')({ name });
      }
      this.set('name', "");
    }

  }
});
