import {  blogs } from "../data"

const CardMyblog = () => {
  return (
    <div className="pembungkus-card">
      {blogs.map((blog) => {
        return (
          <div key={blog.id} className="blog-box">
            <div className="blog-img">
              <img src={blog.image} alt="" />
          </div>
        <div className="blog-text">
              <span>20 Jun 2023/ {blog.tag }</span>
              <a href="/" className="blog-title">{blog.title}</a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolores quam nobis provident assumenda similique quae impedit libero, temporibus numquam dolorem ducimus aperiam itaque, cum tenetur accusamus, velit eius quidem?</p>
              <a href="/" className="y">Read More</a>
        </div>
      </div>)
      })}
    </div>
  )
}

export default CardMyblog