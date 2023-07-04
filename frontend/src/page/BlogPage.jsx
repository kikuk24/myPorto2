import { Container} from "react-bootstrap"
// import CardMyblog from "../component/CardMyblog"
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Card2 from "../component/Card2";
import NavBlog from "../component/NavBlog";

const BlogPage = () => {
  const [text] = useTypewriter({
    words: ["Berita Terbaru📰","Seputar Teknologi🖥💻","Cerita Pribadi😆"],
    loop: {},
  });
  return (
    <>
    <div className="blog-page w-100 min-vh-100 d-flex align-items-center">
      <Container>
          <h1 className="h1 text-center">Welcome to <span className="fw-bold">My blog</span>👋</h1>
          <p className="text-center">Berbagai Informasi {text}<Cursor/></p>
      </Container>
      </div>
      <div className="post-filter container">
        <NavBlog/>
      </div>
      <div className="content-blog w-100 min-vh-100 d-flex align-items-center">
        
        {/* <CardMyblog/> */}
        <Card2/>

      </div>
    </>
    
      
    
  )
}

export default BlogPage