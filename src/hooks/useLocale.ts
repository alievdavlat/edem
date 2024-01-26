import { useSelector } from "react-redux"



export const useLocale = () => {
const { lang } = useSelector((state:any) => state.locale)

  return lang ? lang : 'ru'
}

