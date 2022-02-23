function Movie(props) {   
    const {Title, Poster, Type, Year} = props;

    return (
        <>
            <div className="col s3">
                <div className="card">
                    <div className="card-image">
                        <img className='max-height-img' src={Poster} alt='' />
                    </div>
                    <div className="card-content">
                        <p>{Title}</p>
                    </div>
                    <div className="card-action flex-space-bet">
                        <div>{Type}</div>
                        <div>{Year}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie;