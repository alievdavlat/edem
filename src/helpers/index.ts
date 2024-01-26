
const url = process?.env?.SERVER_URL
const ImageUrl = process?.env?.IMAGE_URL



export const getEnv = (key:string) => {
  
  if (key === 'image') {
      return ImageUrl
  }

  if (key == 'server') {
    return url
  }
}