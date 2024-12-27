import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
 export const storeLocalData = async(key:any,value:any)=>{
   return  await localStorage.setItem(key,JSON.stringify(value))
 
}


export const getLocalData = async(key:any)=>{
     const data  = await localStorage.getItem(key)
     return data ? JSON.parse(data) : null
}

export const removeLocalData = async(key:any)=>{
    return await localStorage.removeItem(key)
}

export const iconMapping: Record<string, IconProp> = {
  house: faHouse,
};