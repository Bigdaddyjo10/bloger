import { AppState } from "../AppState.js";
import { Blog } from "../models/Blog.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class BlogService {
  async getBlogById(blogId) {
    AppState.activeBlog = null
    console.log('the blog id is', blogId);
    const response = await api.get(`api/blogs/${blogId}`)
    logger.log(response.data);
    AppState.activeBlog = new Blog(response.data)
  }

  async getBlogs() {
    const res = await api.get('api/blogs')
    logger.log(res.data)
    const blogs = res.data.map(blogPOJO => new Blog(blogPOJO))
    AppState.blogs = blogs
  }
}

export const blogService = new BlogService();
