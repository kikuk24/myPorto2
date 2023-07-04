import { useState } from "react"
import { navBlogs } from "../data"
{/* <span className="filter-item" data-filter="design">Design</span>
      <span className="filter-item" data-filter="foto">Foto</span> */}
const NavBlog = () => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(current => !current)
  }
  return (
    <>
      {navBlogs.map((blog) => {
        return (
          <div key={blog.id} className="filter-item">
            <span  className={isActive ? 'active-filter' :''} data-filter={blog.dataFilter}onClick={handleClick}>{blog.text}</span>
          </div>
        )
      })}
    </>
  
  )
}

export default NavBlog