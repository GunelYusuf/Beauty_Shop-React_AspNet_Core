export const DetailBlock = ({ blocks }) => {

  return (
    <>
      <div className='wrapper'>
        <div className='detail-block__items'>
          {blocks?.map((block, index) => (
            <div key={index} className={`detail-block__item`}>
              <div className='detail-block__item-icon'>
                <img
                  src='/assets/img/main-text-decor.svg'
                  className='js-img'
                  style={{position:"absolute"}}
                  alt=''
                />
                <img style={{position:"absolute"}} src={block.iconUrl} className={block.icon}/>
              </div>
              <div className='detail-block__item-info'>
                <h6>{block.step}</h6>
                {block.title}
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};
