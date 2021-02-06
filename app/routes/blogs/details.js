import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class BlogsDetailsRoute extends Route {
  @service blogPost;

  async model({slug}) {
    const params = { slug }
    const content = await this.blogPost.getPost(params);
    return content;
  }

  afterModel() {
    window.scrollTo(0, 0);
  }
}
