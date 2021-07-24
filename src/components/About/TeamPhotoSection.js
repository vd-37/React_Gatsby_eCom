import React from "react"

export default function TeamPhotoSection() {
  return (
    <div>
    <div className="col-10 mx-auto">
      <div className="card-group">
        <div className="card">
          <img src="https://openpsychometrics.org/tests/characters/test-resources/pics/TO/9.jpg" style={{maxHeight:"200px"}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Kevin</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src="http://www.wallpapername.com/thumbnails/detail/20121025/the%20office%20dwight%20schrute%20rainn%20wilson%203000x2000%20wallpaper_www.wallpapername.com_58.jpg" style={{maxHeight:"200px"}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Dwight K Schrute</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/originals/64/83/fc/6483fc314a09df41d74cde611d2e5af0.jpg" style={{maxHeight:"200px"}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Jim Halpert</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}
