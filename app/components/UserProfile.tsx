'use client'

import { User } from 'lucide-react'

export function UserProfile() {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-primary/20 bg-surface/50">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
        <User className="w-4 h-4 text-white" />
      </div>
      <div className="hidden md:block">
        <p className="text-sm font-semibold text-fg">@trader</p>
        <p className="text-xs text-fg/60">FID: 9152</p>
      </div>
    </div>
  )
}
