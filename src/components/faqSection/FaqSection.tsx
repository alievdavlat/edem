import React from 'react'

import Accordion from '../accordion/Accordion';
import './faqSection.css'
import { useLocale } from '@/hooks/useLocale';
import api from '@/service/api';

type Props = {}

const FaqSection = (props: Props) => {
  const [activeIndex, setActiveIndex] = React.useState<any>(0);
  const [faqs , setFaqs] = React.useState<any>([]);
  const locale = useLocale()

  React.useEffect(() => {
    const getData = async () => {
      const HotTours = await api.getFaqs();
      setFaqs(HotTours);
    };

    getData();
  }, []);

  
  
  return (
    <div className="container">
      
    <div className="faqs-content">
    {faqs.map((item:any, index: number) => (
      <Accordion
      key={item.id}
      answer={locale == 'uz' ? item?.attributes.anwer_uz : item?.attributes.anwer_ru}
      question={locale == 'uz' ? item?.attributes.question_uz :item?.attributes.question_ru}
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