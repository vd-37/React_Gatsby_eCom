import React from 'react'
import {Link} from 'gatsby'

export default function Card({ title, category, description, image, price, id }) {
    return (
        <div key={id} className="col-11 col-md-5 my-3 d-flex mx-auto">
            <img src={image} alt="" />
            <div className="flex-grow-1 px-3">
                <div className="d-flex justify-content-between">
                    <h6 className="mb-0">{title}</h6>
                    <h6 className="mb-0 text-success ">$$ {price}</h6>
                </div>
                <p className="text-muted">
                    <small>{description}</small>
                </p>
                <button className=" btn btn-warning snipcart-add-item"
  data-item-id={id}
  data-item-price={price}
  data-item-url="https://vd-react-gatsby.netlify.app/"
  data-item-image={image}
  data-item-name={title}>Join Now</button>
            </div>
        </div>
    )
}
 