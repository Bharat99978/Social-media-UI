import { SocialIcon } from "@/components/SocialIcon"

interface SocialMedia {
  platform: "youtube" | "instagram" | "x" | "whatsapp"
  url: string
  personalUrl: string
}

interface SocialMediaWheelProps {
  socials: SocialMedia[]
  onSave: (platform: string, newUrl: string, newPersonalUrl: string) => void
}

export function SocialMediaWheel({ socials, onSave }: SocialMediaWheelProps) {
  return (
    <div className="absolute inset-0 animate-spin-slow pointer-events-none">
      <div className="relative w-full h-full">
        {socials.map((social, index) => {
          const angle = (index * 360) / socials.length
          const radius = 180 // Distance from center
          const x = Math.cos((angle - 45) * (Math.PI / 180)) * radius
          const y = Math.sin((angle - 45) * (Math.PI / 180)) * radius

          return (
            <div
              key={social.platform}
              className="absolute pointer-events-auto"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%) rotate(45deg)',
              }}
            >
              <div className="transform -rotate-45">
                <SocialIcon
                  platform={social.platform}
                  url={social.url}
                  personalUrl={social.personalUrl}
                  onSave={onSave}
                  size={48}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

