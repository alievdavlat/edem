import React from 'react'
import { faqs } from "@/constants";
import Accordion from '../accordion/Accordion';
import './faqSection.css'

type Props = {}

const FaqSection = (props: Props) => {
  const [activeIndex, setActiveIndex] = React.useState<any>(0);


  return (
    <div className="container">
      
    <div className="faqs-content">
    {faqs.faq.map((item, index: number) => (
      <Accordion
      key={item.id}
      answer={item.anwer_ru}
      question={item.question_ru}
      index={index}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      />
      ))}
      </div>
  </div>
  )
}

export default FaqSection