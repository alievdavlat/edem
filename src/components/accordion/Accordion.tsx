import React from "react";
import "./accordion.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

type Props = {
  answer: string;
  question: string;
  index: number;
  activeIndex: any;
  setActiveIndex: (activeIndex: any) => void;
};

const Accordion: React.FC<Props> = ({
  answer,
  question,
  activeIndex,
  index,
  setActiveIndex,
}) => {


  const [collapse , setCollapse] = React.useState(false)

  const handleActiveAccordion  = (index:number) => {
    setActiveIndex(index)
    setCollapse(!collapse)
  } 

  const handleDisActiveAccordion = (index:number) => {
    setActiveIndex(null)
    setCollapse(!collapse)
  }
  return (
    <div
      className={`accordion`}
      >
      <div className="accordion-head">
        <h4>{answer}</h4>
        {
          !collapse 
          ? 
          <div
            onClick={() => handleActiveAccordion(index)}
            className={`accordion-head-arrow ${
              index == activeIndex  && "arrowActive"
            }`}
          >
             <IoIosArrowUp />            
          </div>
          : 
          <div
            onClick={() => handleDisActiveAccordion(index)}
            className={`accordion-head-arrow ${
              index == activeIndex  && "arrowActive"
            }`}
          >
            <IoIosArrowDown />
          </div>
        }
      </div>

      <div className={`${index == activeIndex  ?  "activeAccordionBody fadeIn" :'accordion-bottom' }`}>
        <p>{question}</p>
      </div>
    </div>
  );
};

export default Accordion;
