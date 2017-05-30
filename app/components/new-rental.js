import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
   rentalFormShow() {
     this.set('addNewRental', true);
   },
      saveRental1() {
       var params = {
         owner: this.get('owner') ? this.get('owner') : "",
         number: this.get('number') ? this.get('number') : "",
         email: this.get('email') ? this.get('email') : "",
         address: this.get('address') ? this.get('address') : "",
         city: this.get('city') ? this.get('city') : "",
         type: this.get('type') ? this.get('type') : "",
         image: this.get('image') ? this.get('image') : "",
         bedrooms: this.get('bedrooms') ? this.get('bedrooms') : "",
         bathrooms: this.get('bathrooms') ? this.get('bathrooms') : "",
         year: this.get('year') ? this.get('year') : ""
       };
       this.set('addNewRental', false);
       this.sendAction('saveRental2', params);
     }
   }
});
