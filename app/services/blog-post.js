import Service from '@ember/service';
import { queryManager } from "ember-apollo-client";
import allBlogQuery from "abulasar-profile/gql/queries/blogs.graphql";
import query from "abulasar-profile/gql/queries/blog-detail.graphql";

export default class BlogPostService extends Service {
  @queryManager apollo;

  async fetchPosts(variables) {
    const result = await this.apollo.watchQuery({ query: allBlogQuery, variables }, "user");
    return result.publication.posts;
  }

  async getPost(variables) {
    const content = await this.apollo.watchQuery({ query, variables }, "post");
    return content;
  }
}
