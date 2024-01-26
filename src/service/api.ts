import { getEnv } from '@/helpers'
import axios from 'axios'
const baseURL = getEnv('server')


export const api = axios.create({baseURL})


'?populate=*'
export default {
  getFeedbackData: async () => {

    const response = await api.get('feedback-modal')

    const data  = response?.data?.data

    return data 
  },
  getTitles: async () => {

    const response = await api.get('titles')

    const data  = response?.data?.data

    return data 
  },
  getFaqs: async () => {

    const response = await api.get('faqs')

    const data  = response?.data?.data

    return data 
  },
  getTeams: async () => {
   
    const response = await api.get('our-teams?populate=*')

    const data  = response?.data?.data

    return  data 

  },
  getPopulars: async() => {
    const response = await api.get('popular-tours?populate=*')

    const data  = response?.data?.data

    return data 
  },
  getTours: async() => {
    const response = await api.get('tours-datas?populate=*')

    const data  = response?.data?.data

    return data
  },
  getToursById : async (id:any) => {
    const response = await api.get(`tours-datas/${id}?populate=*`)

    const data  = response?.data?.data

    return data 
  },
  getAboutData: async() => {
    const response = await api.get('about?populate=*')

    const data  = response?.data?.data?.attributes

    return data 
  },
  getOwnerData: async() => {
    const response = await api.get('owner-data?populate=*')

    const data  = response?.data?.data?.attributes

    return data 
  },
  getContactFormData: async () => {
    const response = await api.get('contact-form?populate=*')
    const data  = response?.data?.data?.attributes

    return data
  },
  getExclusive: async() => {
    const response = await api.get('exclusive-data?populate=*')

    const data  = response?.data?.data?.attributes

    return data
  },
  getHomeData: async() => {
    const response = await api.get('home')

    const data  = response?.data?.data?.attributes
    


    return data
  },
  getMainData: async() => {
    const response = await api.get('main-data?populate=*')

    const data  = response?.data?.data?.attributes

    return data
  },
  getSocialData: async() => {
    const response = await api.get('socials??populate=*')

    const data  = response?.data

    return data 
  },
  getToursPage: async() => {
    const response = await api.get('main-data')

    const data  = response?.data

    return { data }
  }
}