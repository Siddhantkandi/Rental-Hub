import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="main-banner header-text" id="top">
        <div className="Modern-Slider">
         
          <div className="item item-1">
            <div className="img-fill">
                <div className="text-content">
                  <h6>lorem ipsum dolor sit amet!</h6>
                  <h4>Quam temporibus accusam <br/> hic ducimus quia</h4>
                  <p>Magni deserunt dolorem consectetur adipisicing elit. Corporis molestiae optio, laudantium odio quod rerum maiores, omnis unde quae illo.</p>
                  <Link to="contact" className="filled-button">contact us</Link>
                </div>
            </div>
          </div>
         
          
          
        </div>
    </div>
  )
}

export default Banner