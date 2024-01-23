import React from 'react'
import sunWithStar from '../../assets/images/sunWithStar.svg'
type Props = {}

const SingleTourLeftPeculiarities = (props: Props) => {
  return (
    <div className='singleTourLeft-peculiarities'>
       <div className="section-title2">
        <h2>Особенности</h2>
      </div>

      <ul>
        <li>
          <div>
            <img src={sunWithStar.src} alt="ico" />
          </div>
          <span>Прямые рейсы с авиаперелетом из Ташкента</span>
        </li>

        <li>
          <div>
            <img src={sunWithStar.src} alt="ico" />
          </div>
          <span>Приятные цены, возможность забронировать только проживание или проживание + трансфер, выгодная стоимость пакетных туров</span>
        </li>

        <li>
          <div>
            <img src={sunWithStar.src} alt="ico" />
          </div>
          <span>План питания «Все включено»</span>
        </li>

        <li>
          <div>
            <img src={sunWithStar.src} alt="ico" />
          </div>
          <span>Отели на любой вкус – от бюджетных 4* до премиальных 5*</span>
        </li>

        <li>
          <div>
            <img src={sunWithStar.src} alt="ico" />
          </div>
          <span>Удобный подбор тура и поддержка туристов 24/7</span>
        </li>

        <li>
          <div>
            <img src={sunWithStar.src} alt="ico" />
          </div>
          <span>ВИП туры, виллы - под запрос!</span>
        </li>
      </ul>
    </div>
  )
}

export default SingleTourLeftPeculiarities