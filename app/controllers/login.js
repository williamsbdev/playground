import Ember from "ember";
import PromiseMixin from "ember-promise/mixins/promise";
import { injectStore, injectRepository } from "playground/utilities/inject";

var LoginController = Ember.Controller.extend({
    store: injectStore(),
    foo: injectRepository(),
    barRepo: injectRepository("bar"),
    actions: {
        login: function() {
            console.log(this.get("store").find);
            this.get("foo").wat();
            this.get("barRepo").baz();
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
