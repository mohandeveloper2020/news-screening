import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import title from '../src/images/news3.png';

const NewsList = (props) => {
    return(
        <div>
            <Carousel
                autoPlay
                infiniteLoop
                centerSlidePercentage={60} 
                showArrows={false}
                showThumbs={false} 
                showIndicators={false} 
                showStatus={false} 
                stopOnHover={false}
                interval={30000}
            >
                <div className={'merck-news'}>
                    <img src={title}/>
                </div>
                {props.list && props.list.length > 0 && props.list.map(
                    (news) => (
                        <div key={news.title} className={'news'}>
                            <div className={'news-image'}>
                                <img src={news.urlToImage} alt={'news images'}/>
                            </div>
                            <div className={'news-title'}>
                                {news.title}
                            </div>
                            <div className={'news-description'}>
                                {news.description}
                            </div>
                        </div>
                    )
                )}
            </Carousel>
        </div>
    )
}

export default NewsList;