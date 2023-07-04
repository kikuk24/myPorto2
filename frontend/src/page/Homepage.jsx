import { Col, Container, Row } from "react-bootstrap";
import  HeroImage  from "../assets/img/DSC08256.jpg";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import fotosaya from '../assets/img/img-me.png';
import blop from "../assets/img/blob.svg"
import blopp from "../assets/img/blob2.svg";
import { blogs } from "../data/index"
import { FaGithub } from "react-icons/fa";
import profile from "../assets/img/img-me.png";
// import CardMyblog from "../component/CardMyblog";

const Homepage = () => {
  const [text] = useTypewriter({
    words: ["I'm a Fullstack Developer","I'm a Photograph"],
    loop: {},
  });
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1>Hello There👋</h1>
              <h2>Im <span>Tirta</span> Afandi </h2> 
              <p>{text}<Cursor /></p>
              <button><FaGithub/> Follow me</button>
            </Col>
            <Col lg ="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="" srcSet="" />
            </Col>
          </Row>
        </Container>
        </header>
      <div className="about w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row>
              <h1 className="text-center mt-5">About Me</h1>
              <p className="text-center">Sedikit Tentang saya</p>
            <Col lg="4">
              <img src={blopp} alt="" className="blop2" />
              <img className="blop" src={blop} alt="" />
              <img className="foto-saya" src={fotosaya} alt="" />  
            </Col>
            <Col lg="8" className="pt-lg-0">
              <p className="p1">Tirta Afandi adalah seorang programmer yang berdedikasi dan bersemangat dalam dunia teknologi. Dengan pengetahuan yang mendalam tentang pemrograman, dia mampu menciptakan solusi perangkat lunak yang inovatif dan efisien. Kreativitasnya yang tinggi memungkinkannya untuk menghadirkan ide-ide segar dalam pengembangan aplikasi dan sistem. Tirta memiliki kemampuan analitis yang kuat, mampu memecahkan masalah kompleks dengan pendekatan yang sistematis. Keinginan yang tak kenal lelah untuk terus belajar dan mengikuti perkembangan teknologi membuatnya selalu siap menghadapi tantangan baru dalam industri ini. Tirta Afandi, seorang programmer yang berbakat dan memiliki potensi besar untuk mencapai keberhasilan di dunia teknologi...<button className="btn btn-info mx-3">Read More</button></p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="myblog w-100 min-vh-100">
        <Container>
          <Row>
            <Col>  
              <h1 className="text-center fw-bold">My Blog</h1>
              <p className="text-center">Recent Post</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="contain">
              {blogs.map((b) => {
                return (
                    <div className="card" key={b.id}>
                      <img src={b.image} alt="" width={600} />
                      <div className="card-body">
                        <span className="tag tag-blue">{b.tag}</span>
                        <h4>{b.title}</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi sunt porro, esse voluptatem aliquid eveniet culpa incidunt minima aut, deleniti debitis sint provident corrupti nisi quasi assumenda repudiandae vitae modi. <a href="/blog">Read More</a></p>
                      </div>
                    <div className="card-footer">
                      <div className="user">
                        <img src={profile} alt="" className="user-image" />
                          <div className="user-info">
                            <h5>{b.author}</h5>
                            <small>3h ago</small>
                          </div>
                      </div>
                    </div>
                    </div>
                )
              })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    
  )
}

export default Homepage;