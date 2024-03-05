import PostsLayout from "../components/posts/PostsLayout";
import { Posts } from "../pages";

export const PostsRoute = {
  path: "/posts",
  element: <PostsLayout />,
  errorElement: null,
  children: [
    {
      index: true,
      element: <Posts />,
    },
  ],
};
