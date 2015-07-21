import inject from "ember-cli-injection/inject";

var injectRepository = inject("repositories");
var injectStore = inject("store").bind("main");

export { injectStore, injectRepository };
