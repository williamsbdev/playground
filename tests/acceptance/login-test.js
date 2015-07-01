import Ember from 'ember';
import { test } from 'qunit';
import module from "playground/tests/helpers/module";
import startApp from 'playground/tests/helpers/start-app';
import { stubEndpointForHttpRequest } from "playground/tests/helpers/stub";

var application;

module('Acceptance | login', {
    beforeEach: function() {
        application = startApp();
    },

    afterEach: function() {
        Ember.run(application, 'destroy');
    }
});

test('visiting /login', function(assert) {
    stubEndpointForHttpRequest("/login", {}, "POST", 201, {});
    visit('/login');
    andThen(function() {
        assert.equal(currentURL(), '/login');
    });
    click(".login");
    andThen(function() {
        assert.equal(currentURL(), '/');
    });
});
