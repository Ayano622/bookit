import React from 'react'

const Home = () => {
  return (
    <div>
      <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">All Rooms</h2>
        <a href="/search" className="ml-2 back-to-search">
          <i className="fa fa-arrow-left"></i> Back to Search
        </a>
        <div className="row mt-4">

          <div className="col-sm-12 col-md-6 col-lg-3 my-3 d-flex">
            <div className="card p-2 w-100">
              <img
                className="card-img-top mx-auto"
                src="/images/default_room_image.jpg"
                alt="Default Room"
                height="170"
                width="100"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                  <a href="/rooms/roomId">Room Name</a>
                </h5>
                <div className="mt-auto">
                  <p className="card-text mt-2"><b>$100</b> / night</p>
                </div>
                <div>
                  <div>
                    <span className="no-of-reviews">(50 Reviews)</span>
                  </div>
                  <a className="btn view-btn mt-3 w-100" href="/rooms/roomId"
                  >View Details</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home