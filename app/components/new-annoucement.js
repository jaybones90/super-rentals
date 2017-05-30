import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnoucement: false,
  actions: {
    showAnnoucementForm() {
      this.set('addNewAnnoucement', true);
    },
      saveAnnoucement1() {
        var params = {
          announcement: this.get('annoucement') ? this.get('annoucement') : ""
        };
        this.set('addNewAnnoucement', false);
        this.sendAction('saveAnnoucement2', params);
      }
    }
});
