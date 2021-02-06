import Controller from '@ember/controller';
import {action} from '@ember/object';
import { inject as service } from '@ember/service';
export default class BlogsIndexController extends Controller {
  @service blogPost;

  constructor() {
    super(...arguments);
    this.posts = [];
    this.pageNumber = 0;
    this.showSpinner = true;
  }

  @action
  async loadMore() {
    const pagination = { page: this.pageNumber + 1 };
    this.set("showSpinner", true);
    const result = await this.blogPost.fetchPosts(pagination);
    if (result.length) {
      this.pageNumber = this.pageNumber + 1;
      this.posts.push(result);
    }
    this.set("showSpinner", false);
  }
}
