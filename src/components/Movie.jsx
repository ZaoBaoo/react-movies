function Movie(props) {   
    const {Title, Poster, Type, Year} = props;

    return (
        <>
                <div className="card hoverable">
                    <div className="card-image">
                    {/* Проверяем есть ли у фильма картинка для отображения */}
                    {
                        Poster === 'N/A' ? 
                        <img className={`img-max-size' src='https://via.placeholder.com/300x400?text=${Title}`} alt='' />
                        : 
                        <img className='img-max-size' src={Poster} alt='' />
                    }
                    </div>
                    <div className="card-content">
                        <p>{Title}</p>
                    </div>
                    <div className="card-action flex-space-bet">
                        <div className='right'>{Type}</div>
                        <div className='left'>{Year}</div>
                    </div>
                </div>
        </>
    )
}

export default Movie;