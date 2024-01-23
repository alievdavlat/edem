import React from 'react'

type Props = {}

const ReviewForm = (props: Props) => {
  return (
    <div className="container">

    <div className="section-title">
      <h2>
        Оставить отзыв
      </h2>
    </div>

    <form className="reviews-form">
      <div className="reviews-form__item" >
        <input type="text" className="form_name" />
        <p>Ваше имя</p>
      </div>
      <div className="reviews-form__item">
        <input type="text" className="form_name" />
        <p>Страна / Тур</p>
      </div>
      <div className="reviews-form__item" >
        <input type="text" className="form_date" />
        <p>Дата</p>
      </div>
      <div className="reviews-form__item reviews-form__message" >
        <textarea></textarea>
        <p>Отзыв</p>
      </div>
      
      <button className="btn" >Отправить отзыв</button>
    </form>
  </div>  )
}

export default ReviewForm