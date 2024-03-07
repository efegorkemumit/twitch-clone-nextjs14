import { create } from 'zustand'


interface CreatorSidebarStore{
    collapsed: boolean;
    onExpand:()=>void;
    onCollapsed:()=>void;
}

export const useCreatorSidebar = create<CreatorSidebarStore>((set)=>({
    collapsed:false,
    onExpand:()=>set(()=>({collapsed:false})),
    onCollapsed:()=>set(()=>({collapsed:true}))




}))