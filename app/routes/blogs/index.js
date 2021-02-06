import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class BlogsIndexRoute extends Route {
  @service blogPost;

  async model() {
    const pagination = { page: 0 }
    const result = await this.blogPost.fetchPosts(pagination);
    return result;
  }

  setupController(controller) {
    controller.set("showSpinner", false);
  }
}
