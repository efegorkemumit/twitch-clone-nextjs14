import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const avatarSizes = cva("",
{
    variants:{
        size:{
            default:"h-10 w-10",
            lg:"h-14 w-14"
        }
    },
    defaultVariants:{
        size:"default"
    }
}
    

)


interface UserAvatarProps extends VariantProps<typeof avatarSizes>{
    
    username : string;
    imageUrl:string;
    isLive?:boolean;
    showBadge?:boolean;
}

const UserAvatar = ({imageUrl,username,isLive,showBadge, size}:UserAvatarProps) => {
  return (
    <div className='relative'>

    <Avatar className={cn(isLive && "ring-2 ring-mycolor-300 border border-mycolor-200",
    avatarSizes({size}))}>
      <AvatarImage src={imageUrl} alt={username} />
      <AvatarFallback>
        {username[0]}
        {username[username.length-1]}
        </AvatarFallback>
    </Avatar>


    </div>
  )
}

export default UserAvatar