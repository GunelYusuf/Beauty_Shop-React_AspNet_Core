export const Card = ({ review }) => {
  const {message, rating,commentDate  } = review;
  return (
    <>
      <div className='review-item'>
        <div className='review-item__head'>
          <div className='review-item__author'>
            {/*<img src={author.image} className='js-img' alt='' />*/}
            {/*<span className='review-item__name'>{author.name}</span>*/}
            <span className='review-item__date'>{
              new Date(commentDate).toDateString().split(" ")[1] + " " +
              new Date(commentDate).toDateString().split(" ")[2] + ", "+
              new Date(commentDate).toDateString().split(" ")[3]
            }</span>
          </div>
          <div className='review-item__rating'>
            <ul className='star-rating'>
              {[...Array(rating >= 20 ? rating / 20 : rating)].map((star, index) => {
                return (
                  <li key={index}>
                    <i className='icon-star'/>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className='review-item__content'>{message}</div>
      </div>
    </>
  );
};
