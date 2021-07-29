import React from "react"

export default function TeamPhotoSection() {
  return (
    <div>
    <div className="col-10 mx-auto">
      <div className="card-group">
        <div className="card">
          <img src="https://geolinks.com/wp-content/uploads/2019/08/kevinmalone.jpg" style={{maxHeight:"200px"}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Kevin</h5>
            <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt a fugit porro placeat voluptatem, corporis maiores eaque debitis ea temporibus.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequuntur nihil tempora quis temporibus fugiat debitis cumque ad eos cupiditate.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src="https://static.parade.com/wp-content/uploads/2016/08/JohnKrasinski-FTR.jpg" style={{maxHeight:"200px"}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Jim Halpert</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime in quo ab praesentium quos, illum explicabo obcaecati omnis voluptatum placeat.
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
