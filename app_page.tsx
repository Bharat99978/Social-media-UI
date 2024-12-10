'use client'

import { useState } from "react"
import { toast } from "sonner"
import { ProfileImage } from "@/components/ProfileImage"
import { SocialMediaWheel } from "@/components/SocialMediaWheel"

interface SocialMedia {
  platform: "youtube" | "instagram" | "x" | "whatsapp"
  url: string
  personalUrl: string
}

const DEFAULT_SOCIALS: SocialMedia[] = [
  { platform: "youtube", url: "https://youtube.com", personalUrl: "" },
  { platform: "instagram", url: "https://instagram.com", personalUrl: "" },
  { platform: "x", url: "https://x.com", personalUrl: "" },
  { platform: "whatsapp", url: "https://whatsapp.com", personalUrl: "" },
]

export default function SocialMediaProfile() {
  const [title, setTitle] = useState("Social Media Accounts")
  const [socials, setSocials] = useState<SocialMedia[]>(DEFAULT_SOCIALS)
  const [isEditingTitle, setIsEditingTitle] = useState(false)

  const handleTitleDoubleClick = () => {
    setIsEditingTitle(true)
  }

  const handleTitleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditingTitle(false)
      toast.success("Title updated successfully")
    }
  }

  const handleUrlSave = (platform: string, newUrl: string, newPersonalUrl: string) => {
    setSocials((prev) =>
      prev.map((social) =>
        social.platform === platform
          ? { ...social, url: newUrl, personalUrl: newPersonalUrl }
          : social
      )
    )
    toast.success(`${platform} URLs updated successfully`)
  }

  return (
    <div className="min-h-screen py-12 px-4">
      {isEditingTitle ? (
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleTitleChange}
          onBlur={() => setIsEditingTitle(false)}
          className="page-title bg-transparent border-b border-primary/20 outline-none text-center w-full mb-8"
          autoFocus
        />
      ) : (
        <h1 onDoubleClick={handleTitleDoubleClick} className="page-title text-4xl font-bold text-center mb-8">
          {title}
        </h1>
      )}

      <div className="relative w-[400px] h-[400px] mx-auto">
        <ProfileImage />
        <SocialMediaWheel 
          socials={socials} 
          onSave={handleUrlSave}
        />
      </div>
    </div>
  )
}

