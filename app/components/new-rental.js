import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
   rentalFormShow() {
     this.set('addNewRental', true);
   },
   saveRental1() {
       var params = {
         owner: this.get('owner') ? this.get('owner') : "mickymouse",
         city: this.get('city'),
         type: this.get('type') ? this.get('type') : "",
         image: this.get('image') ? this.get('image') : "google.com",
         bedrooms: this.get('bedrooms') ? this.get('bedrooms') : "",
       };
       this.set('addNewRental', false);
       this.sendAction('saveRental2', params);
     }


 }
});
