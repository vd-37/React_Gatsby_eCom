import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function DualInfoblock({ heading, img, alt }) {
  return (
    <div className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              molestias et officia iusto quaerat distinctio quam laudantium
              deleniti minus labore h arum laboriosam, temporibus illo
              voluptatum quia itaque! Suscipit maxime in laboriosam iusto
              tenetur? Dolore sit ex exercitationem aperiam. Facilis id, magnam
              nulla quod consectetur dicta assumenda vel dignissimos doloremque
              in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              reprehenderit, rem ipsum laborum, nobis perspiciatis dolorem,
              nulla sequi cum dolore vero accusantium libero. Qui eius
              distinctio veritatis, possimus inventore quae error tempora
              commodi sapiente illum aliquid. At nam labore, assumenda omnis
              blanditiis eligendi doloremque a ipsum reprehenderit mollitia
              inventore error qui dicta architecto et natus commodi. Maxime
              consectetur labore perspiciatis eum in natus, iusto, rerum minima
              consequatur impedit magnam minus, a vitae eveniet deserunt ex?
              Molestias repellat a quam quia soluta quisquam cumque ipsam nemo
              assumenda, est, adipisci dolor beatae architecto! Quae maiores
              necessitatibus nobis aut eos, possimus fugiat animi!
            </p>
          </div>
          <div className="col-4">
            <div className="card bg-dark">
              <img className="card-img-top" src={img} alt={alt} />
              <div className="card-body text-white">
                <h5 className="card-title"></h5>
                <p className="card-text ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  itaque maiores cupiditate? Labore nulla ipsum excepturi nihil
                  architecto reiciendis adipisci laborum maiores voluptate odit
                  rem, eum temporibus facilis, vero quibusdam?
                </p>
                <Link to="#" className="btn btn-warning">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
