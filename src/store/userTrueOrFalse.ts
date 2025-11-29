import { create } from "zustand"

type trueOrFalse = {
  isOpen: boolean
  setIsOpen: (v:boolean) => void
}
 export const useTrueOrFalse =create<trueOrFalse>((set)=>({
    isOpen:false,
    setIsOpen:(v)=>set(()=>({isOpen:v}))
}))
