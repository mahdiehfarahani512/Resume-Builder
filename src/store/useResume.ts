import { set } from "react-hook-form"
import { create } from "zustand"

type Todo = {
  title:string,
  setTitle:(v:string)=>void

}
 export const useTitle=create<Todo>()((set)=>({
    title:"",
    setTitle:(v)=>set(()=>({title:v}))
}))