import Ember from "ember";

var FooRepo = Ember.Object.extend({
    wat: function() {
        console.log("wat from foo repo");
    }
});

export default FooRepo;
