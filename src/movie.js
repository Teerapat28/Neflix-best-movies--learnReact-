const Movie = (props) => {
    const { img, title, type , number} = props;
    // console.log(props);
    return (
        <article className='movie'>
            <span className='number'>#{number + 1}</span>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{type}</h4>
        </article>
    );
};
export default Movie ;