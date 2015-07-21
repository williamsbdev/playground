import Ember from "ember";

var BarRepo = Ember.Object.extend({
    baz: function() {
        console.log("baz from bar repo");
    }
});

export default BarRepo;
