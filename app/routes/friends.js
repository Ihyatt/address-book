import Ember from 'ember';
import db from '../utils/db';

export default Ember.Route.extend({
  model() { 
    return db.contacts();  
  }, 

  actions: {
    addContact(contact) {
      db.addContact(contact);
      this.refresh();
    }, 

    removeContact(contact) {
      db.removeContact(contact);
      this.refresh();
    }
  }
});
