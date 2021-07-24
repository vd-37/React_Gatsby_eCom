import React from "react"
import Card from "./Card"
import Heading from "../Reusable/Heading"

export default function Courses(props) {
  const list = props.courses.edges
  return (
    <div className="container">
    <Heading title="Courses"/>
    <div className="row">
      {
        list.map((item) => {
          return (
              <Card
                id={item.node.id}
                title={item.node.title}
                category={item.node.category}
                image={item.node.image.fixed.src}
                price={item.node.price}
                description={item.node.description}
              />
            )
        })
      }
      </div>
    </div>
  )
}
