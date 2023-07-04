import { blogs } from "../data"
import profile from "../assets/img/img-me.png";
// import $ from "jquery";



const Card2 = () => {


  return (
    <div className="post container">
      {blogs.map((blog) => {
        return (
          <div key={blog.id} className="post-box">
            <img src={blog.image} alt="" className="post-img" />
            <h2 className="kategori">{blog.tag }</h2>
            <a href="" className="post-title">{blog.title}</a>
            <span className="post-date">{blog.date}</span>
            <p className="post-deskription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis dicta obcaecati sint adipisci sequi! Sunt ea facere adipisci veritatis placeat nesciunt impedit modi. Esse error unde quos vero beatae.</p>
            <div className="profile">
              <img src={profile} alt="" className="profile-img" />
              <span className="profile-name">{ blog.author }</span>
            </div>
          </div>
        )
      })}
     
    </div>
  )
}

export default Card2