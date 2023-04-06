import { create } from 'zustand'

export const useStore = create((set) => ({
  fabricCanvasRef:null,
  setFabricCanvasRef:(val)=>set(()=>({fabricCanvasRef:val})),
  activeObject: null ,
  setActiveObject:(val)=>set(()=>({activeObject:val})),
}))

