import Route from '@ember/routing/route';
import { queryManager } from "ember-apollo-client";
import query from "abulasar-profile/gql/queries/blog-detail.graphql";

export default class BlogsDetailsRoute extends Route {
  @queryManager apollo;

  async model({slug}) {
    let variables = { slug }
    const content = await this.apollo.watchQuery({ query, variables }, "post");
    return content;
  }

  afterModel() {
    window.scrollTo(0, 0);
  }
}
