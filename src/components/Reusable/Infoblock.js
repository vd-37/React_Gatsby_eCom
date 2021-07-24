import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <div className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="text-white mb-4 lead">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam non hic
                            cupiditate reprehenderit alias officia, nobis numquam error iure voluptate
                            distinctio. Eveniet inventore veritatis atque aperiam repellendus sunt laboriosam
                            voluptatibus laborum voluptate et totam deleniti eligendi earum, neque, beatae
                            nesciunt dolore enim, ipsum ipsam rerum reprehenderit a corporis. Omnis 
                            laudantium soluta sint itaque praesentium ut alias rerum, maiores eum ullam.
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
