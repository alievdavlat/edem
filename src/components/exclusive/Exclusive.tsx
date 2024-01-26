import React from "react";
import leafImage from "../../assets/images/leaf.png";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { ExclusiveMobile } from "..";
import "./exclusive.css";
import { useLocale } from "@/hooks/useLocale";
import api from "@/service/api";
import { getEnv } from "@/helpers";


const Exclusive = () => {

  const [exclusiveData , setExclusiveData] = React.useState<any>([])
  const locale = useLocale()
  const imageUrl = getEnv('image')
	React.useEffect(() => {
	
    const getData = async () => {
			
      const data =  await api.getExclusive()     
      setExclusiveData(data);
		}	
		getData()

	}, [])


  return (
    <section className="exclusive">
      <div className="exclusive-leaf">
        <img src={leafImage.src} alt="leaf" />
      </div>

      <div className="container">
        <div className='exclusive-content' style={{backgroundImage:`url(${imageUrl + exclusiveData?.bg?.data?.attributes?.url})`}}>

              <div className='exclusive-content-tooltip'>
              {
                locale === 'uz'
                ? exclusiveData?.main_title_uz
                : exclusiveData?.main_title_ru
              }
              </div>
              <div className='exclusive-content-bottom'>
                <div className='exclusive-content-bottom-text'>
                  <h3>
                  
                    {
                      locale === 'uz'
                      ? exclusiveData?.title_uz
                      : exclusiveData?.title_ru
                    }
                  </h3>
                  <h5>
                     {
                      locale === 'uz'
                      ? exclusiveData?.day_uz
                      : exclusiveData?.day_ru
                    }
                  </h5>

                  <p>
                    {
                      locale === 'uz'
                      ? exclusiveData?.descr_uz
                      : exclusiveData?.descr_ru
                    }
                  </p>

                </div>

                 
            <button>
            <span>
                {
                  locale === 'uz'
                  ? exclusiveData?.btnText_uz
                  : exclusiveData?.btnText_ru
                }
          </span>
              <div>
              <HiOutlineArrowUpRight />
              </div>
            </button>
              </div>
            </div>

        <ExclusiveMobile/>
      </div>
    </section>
  );
};

export default Exclusive;
