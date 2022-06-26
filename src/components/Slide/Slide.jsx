import React from 'react'

export const Slide = () => {
    return (
        <div
            id="carouselExampleControls"
            className="carousel slide"
            style={{ maxHeight: '60vh' }}
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src='https://images.unsplash.com/photo-1613239203506-913be3e2c6f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80'
                        className="d-block w-100"
                        style={{ maxHeight: '60vh', objectFit: 'cover', objectPosition: 'center' }}
                        alt="img1"
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='display-3 fw-bold'>Lorem ipsum dolor</h5>
                        <p className='display-6 p-3'>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src='https://images.unsplash.com/photo-1596097509399-a08e159a7bd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80'
                        className="d-block w-100"
                        style={{ maxHeight: '60vh', objectFit: 'cover', objectPosition: 'center' }}
                        alt="img2"
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='display-3 fw-bold'>Excepteur occaecat</h5>
                        <p className='display-6 p-3'>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src='https://images.unsplash.com/photo-1593252535744-43380a93d600?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80'
                        className="d-block w-100"
                        style={{ maxHeight: '60vh', objectFit: 'cover', objectPosition: 'center' }}
                        alt="img2"
                    />
                    <div className="carousel-caption d-none d-md-block fa">
                        <h5 className='display-3 fw-bold'>Ut enim ad minim</h5>
                        <p className='display-6 p-3'>Dignissim suspendisse in est ante magna eget est lorem dolor sit.</p>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}
