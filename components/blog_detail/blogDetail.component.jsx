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
      <br /> <br />
      <div className="preview"> {ReactHtmlParser(props.post.preview)}</div>
      <br />
      <br />
      <div className="content">{ReactHtmlParser(props.post.content)}</div>
    </Card>
  </DetailSection>
);

export default BlogDetail;
