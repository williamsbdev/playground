import registerWithContainer from "ember-cli-auto-register/register";

export function initialize(container, application) {
    registerWithContainer("repositories", application);
}

export default {
    name: "repositories",
    initialize: initialize
};
