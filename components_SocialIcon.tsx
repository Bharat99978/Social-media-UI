import { useState } from 'react'
import Image from 'next/image'
import { EditUrlDialog } from "@/components/EditUrlDialog"
import { Pencil } from 'lucide-react'

interface SocialIconProps {
  platform: "youtube" | "instagram" | "x" | "whatsapp"
  url: string
  personalUrl: string
  onSave: (platform: string, newUrl: string, newPersonalUrl: string) => void
  size: number
}

export function SocialIcon({ platform, url, personalUrl, onSave, size }: SocialIconProps) {
  const [isEditing, setIsEditing] = useState(false)

  const icons = {
    youtube: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png",
    instagram: "https://www.omnicoreagency.com/wp-content/uploads/2018/09/Instagram-Logo-PNG-2018.png.webp",
    x: "https://freepnglogo.com/images/all_img/1691832581twitter-x-icon-png.png",
    whatsapp: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open(personalUrl || url, '_blank')
  }

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsEditing(true)
  }

  const handleSave = (newUrl: string, newPersonalUrl: string) => {
    onSave(platform, newUrl, newPersonalUrl)
    setIsEditing(false)
  }

  return (
    <div className="relative group">
      <a
        href={personalUrl || url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        onClick={handleClick}
      >
        <Image 
          src={icons[platform]} 
          alt={platform}
          width={size} 
          height={size}
          className="rounded-sm"
        />
      </a>
      <button
        onClick={handleEditClick}
        className="absolute -top-1 -right-1 p-1 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <Pencil size={16} />
      </button>
      <EditUrlDialog
        platform={platform}
        currentUrl={url}
        currentPersonalUrl={personalUrl}
        open={isEditing}
        onOpenChange={setIsEditing}
        onSave={handleSave}
      />
    </div>
  )
}

