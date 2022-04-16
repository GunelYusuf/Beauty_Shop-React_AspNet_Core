import Link from 'next/link';

export const PostContent = ({ blog }) => {
  console.log(blog,"sakka")
  return (
    <>
      <div className='post-top'>
        <h2>{blog.title}</h2>
        <p>What is actually on your table?</p>
        <img src={blog.imageUrl} className='js-img' alt='' />
        <ul className='post-top__info'>
          <li className='post-top__date'>
            <i className='icon-date'/>
            <span>{new Date(blog.created).toDateString().split(" ")[1]}</span> {new Date(blog.created).toDateString().split(" ")[2]}

          </li>
          <li className='post-top__user'>
            <i className='icon-user2'/>
            <a href='#/'>by Melissa Jones</a>
          </li>
          <li className='post-top__watch'>
            <i className='icon-eye'/>
            114
          </li>
          <li className='post-top__comment'>
            <i className='icon-comment'/>
           50
          </li>
        </ul>
      </div>
      <div className='post-content'>
        <p>{blog.description}</p>

        <h6>About Sustainability</h6>
        <p>It would seem that everything is clear here: the higher the concentration of aromatic components - the more stable the aroma. But not everything is so simple: even if in the laboratory the aroma stays calm for a day or more, in life it is influenced by humidity and temperature, skin condition and the aroma of your body. Therefore, experts advise to apply fragrances on a clean, moisturizing body lotion. But even this does not guarantee that super-concentrated perfumes will last longer than perfumed or eau de toilette. It all depends on the volatility of the ingredients themselves.</p>
        <blockquote className='blockquote'>
          “Fruity notes are considered the lightest, but sandalwood and amber - the strongest. This does not mean that fruit flavors should be forgotten. First, they have a good plume, and secondly, history knows many cases where the aroma was much more stable than required by the situation.”
          <span className='blockquote-author'>Melissa Jones</span>
        </blockquote>
        <ul className='post-list'>
        </ul>

        <p>Ea amet ex sunt culpa mollit. Aliquip proident ullamco do laboris eiusmod aute ullamco. Duis cupidatat magna excepteur laborum consectetur tempor nulla consectetur dolor consequat incididunt. Veniam ut ut aliquip voluptate fugiat velit laboris. Amet cupidatat nulla voluptate cillum sint nostrud amet aute duis labore minim ipsum. Adipisicing veniam laboris non irure in esse ex aliqua duis eiusmod anim ea. Nostrud consectetur veniam ea officia. Id eu cillum quis ullamco eiusmod in ullamco officia in incididunt sit amet. Anim ullamco excepteur in nisi irure in pariatur. Incididunt anim pariatur pariatur sunt mollit excepteur esse ea sint sit Lorem enim. Consectetur occaecat ut consequat tempor anim proident eu mollit exercitation mollit proident Lorem. Reprehenderit amet ipsum.</p>
      </div>
      <div className='post-bottom'>
        <div className='post-bottom__info'>
          <div className='post-bottom__tags'>
            <span>Tags:</span>
            <ul>
              {blog.blogTags.map((tag, index) => (
                <li key={index}>
                  <Link href='#/'>
                    <a>{tag.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='contacts-info__social'>
            <span>Share:</span>
            <ul>
              <li>
                <a href='#/'>
                  <i className='icon-facebook'/>
                </a>
              </li>
              <li>
                <a href='#/'>
                  <i className='icon-twitter'/>
                </a>
              </li>
              <li>
                <a href='#/'>
                  <i className='icon-insta'/>
                </a>
              </li>
              <li>
                <a href='#/'>
                  <i className='icon-in'/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='post-bottom__nav'>
          <a href='#/'>
            <i className='icon-arrow'/>previous post
          </a>
          <a href='#/'>
            next post<i className='icon-arrow'/>
          </a>
        </div>
      </div>
    </>
  );
};
