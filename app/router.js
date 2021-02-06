import EmberRouter from '@ember/routing/router';
import config from 'abulasar-profile/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("home", { path: "/" });
  this.route("about");
  this.route("blogs", function() {
    this.route("index");
    this.route("details", { path: "/blogs/:slug"});
  });
  this.route("contact");
});
