import Ember from 'ember';

export default Ember.Object.create({

  _records: [
    { name: "Shalini" },
    { name: "Ron" },
    { name: "Inas" }
  ],

  contacts() {
    return Ember.copy(this._records);
  },

  addContact(contact) {
    this._records.push(contact);
  },

  removeContact(contact) {
    const index = this._records.indexOf(contact);
    this._records.splice(index, 1);
  }

});