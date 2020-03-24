import { DetailSection, Card } from "./blogDetail.styles";

const BlogDetail = props => (
  <DetailSection>
    <Card>
      <img src={props.post.picture} />
      <h1>{props.post.title}</h1>
      {props.post.preview}
      {props.post.content}
    </Card>
  </DetailSection>
);

export default BlogDetail;
