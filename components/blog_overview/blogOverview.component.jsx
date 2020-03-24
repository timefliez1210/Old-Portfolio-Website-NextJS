import { BlogList, Card, Prim } from "./blogOverview.styles";
import Link from "next/link";

const BlogOverview = props => (
  <BlogList>
    {props.posts.map(post => (
      <Card key={post.id} {...post}>
        <Prim />
        <div>
          <img
            className="display-img"
            src={post.picture}
            alt="ReactJS Reference"
          />
        </div>
        <div>
          <h3>{post.title}</h3>
          <div className="underline-small-orange"></div>
          <p>{post.preview}</p>
          <Link href="/blog/[id]" as={`/blog/${post.id}`}>
            <a className="button">
              <b>{post.title}</b>
            </a>
          </Link>
          <br />
          <br />
          <br />
        </div>
      </Card>
    ))}
  </BlogList>
);

export default BlogOverview;

// <li key={show.id}>
// <Link href="/p/[id]" as={`/p/${show.id}`}>
//   <a>{show.name}</a>
// </Link>
// </li>
