import { DetailSection, Card } from "./blogDetail.styles";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

const BlogDetail = props => (
  <DetailSection>
    <Card>
      <img src={props.post.picture} />
      <h1>{props.post.title}</h1>
      <div className="preview"> {ReactHtmlParser(props.post.preview)}</div>
      <div className="content">{props.post.content}</div>
    </Card>
  </DetailSection>
);

export default BlogDetail;
