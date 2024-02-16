export const setItemToStorage = ( key:string , value:any ) => {
  localStorage.setItem(key, JSON.stringify(value))

}


export const getItemAtStorage = ( key:string ) => {
  return JSON.parse((localStorage as any).getItem(key))
}

export const removeItemAtStorage = ( key:string ) => {
  localStorage.removeItem(key)
}