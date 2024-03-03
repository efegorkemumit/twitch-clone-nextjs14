import { create } from 'zustand'


interface SidebarStore{
    collapsed: boolean;
    onExpand:()=>void;
    onCollapsed:()=>void;
}

export const useSidebar = create<SidebarStore>((set)=>({
    collapsed:false,
    onExpand:()=>set(()=>({collapsed:false})),
    onCollapsed:()=>set(()=>({collapsed:true}))




}))