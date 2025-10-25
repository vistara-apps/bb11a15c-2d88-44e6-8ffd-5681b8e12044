'use client'

import { type ReactNode } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatsCardProps {
  icon: ReactNode
  label: string
  value: string
  change: string
  positive?: boolean
}

export function StatsCard({ icon, label, value, change, positive = true }: StatsCardProps) {
  return (
    <div className="p-6 rounded-lg border border-primary/20 bg-surface/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-sm font-semibold ${positive ? 'text-success' : 'text-error'}`}>
          {positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          {change}
        </div>
      </div>
      <p className="text-2xl font-bold text-fg mb-1">{value}</p>
      <p className="text-sm text-fg/60">{label}</p>
    </div>
  )
}
