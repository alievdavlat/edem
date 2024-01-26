export const setItemToStorage = ( key:string , value:any ) => {
  window.localStorage.setItem(key, JSON.stringify(value))

}


export const getItemAtStorage = ( key:string ) => {
  const data = (window?.localStorage as any).getItem(key)
  return JSON.parse(data)
}

export const removeItemAtStorage = ( key:string ) => {
  window.localStorage.removeItem(key)
}