import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  bathrooms: DS.attr(),
  number: DS.attr(),
  email: DS.attr(),
  address: DS.attr(),
  year: DS.attr()
});
