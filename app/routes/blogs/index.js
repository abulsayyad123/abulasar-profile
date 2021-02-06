import Route from '@ember/routing/route';
import { queryManager } from "ember-apollo-client";
import query from "abulasar-profile/gql/queries/blogs.graphql";

export default class BlogsIndexRoute extends Route {
  @queryManager apollo;

  async model() {
    const result = await this.apollo.watchQuery({ query }, "user");
    return result.publication.posts;
  }
}
