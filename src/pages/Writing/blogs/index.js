import README from "./README";
import TestAction from "./test-action";
import TestBlog from "./test-blog";
import TestMath from "./testmath";

export const blogs = {
  "README": {
    title: "README",
    description: "",
    tags: [],
    component: README,
  },

  "test-action": {
    title: "My First Post",
    description: "This is a short summary of my first post.",
    tags: ["react","hooks","tutorial"],
    component: TestAction,
  },

  "test-blog": {
    title: "Test Blog",
    description: "",
    tags: [],
    component: TestBlog,
  },

  "testmath": {
    title: "Math Test Page",
    description: "A page to test rendering of mathematical expressions using KaTeX.",
    tags: ["math", "katex", "markdown"],
    component: TestMath,
  },
};
