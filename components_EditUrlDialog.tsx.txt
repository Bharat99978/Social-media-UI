import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface EditUrlDialogProps {
  platform: string
  currentUrl: string
  currentPersonalUrl: string
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (newUrl: string, newPersonalUrl: string) => void
}

export function EditUrlDialog({
  platform,
  currentUrl,
  currentPersonalUrl,
  open,
  onOpenChange,
  onSave,
}: EditUrlDialogProps) {
  const [url, setUrl] = useState(currentUrl)
  const [personalUrl, setPersonalUrl] = useState(currentPersonalUrl)

  const handleSave = () => {
    onSave(url, personalUrl)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit {platform} URLs</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label htmlFor="defaultUrl" className="block text-sm font-medium text-gray-700">
              Default URL
            </label>
            <Input
              id="defaultUrl"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={`Enter ${platform} URL`}
            />
          </div>
          <div>
            <label htmlFor="personalUrl" className="block text-sm font-medium text-gray-700">
              Personal URL
            </label>
            <Input
              id="personalUrl"
              value={personalUrl}
              onChange={(e) => setPersonalUrl(e.target.value)}
              placeholder={`Enter personal ${platform} URL`}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

