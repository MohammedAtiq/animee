import React from 'react'

const SingleCart = ({ animeData }) => {
    return (
        <>
            {
                animeData ? (
                    animeData.map((anime, index) => {
                        return (
                            <div className="col-md-4" >
                                <div className="card" style={{ width: "20rem", margin: 'auto' }} key={index} >
                                    <img src={anime.images.jpg.large_image_url} className="card-img-top" alt="Image" />
                                    <div className="card-body">
                                        <h5 className="card-title">{anime.title}</h5>
                                        <a href="/" className="btn btn-primary">Go somewhere</a>



                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            modal
                                        </button>
                                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                                                <div class="modal-content bg-dark text-white">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                                        <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                       <img src={anime.images.jpg.large_image_url} alt="" />
                                                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis cumque, ea eveniet voluptatem quam cupiditate dolores omnis aut temporibus esse voluptatum illo optio maxime consequuntur nulla ducimus, unde corrupti aliquam.
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Understood</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : 'not found'
            }
        </>
    )
}

export default SingleCart

