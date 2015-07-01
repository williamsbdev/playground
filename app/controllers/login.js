import Ember from "ember";
import PromiseMixin from "ember-promise/mixins/promise";

var LoginController = Ember.Controller.extend({
    actions: {
        login: function() {
            var hash = {
                data: JSON.stringify({
                    username: "bob",
                    password: "The Builder"
                })
            };
            var self = this;
            return PromiseMixin.xhr("/login", "POST", hash).then(function(){
                self.transitionToRoute("/");
            });
        }
    }
});

export default LoginController;
