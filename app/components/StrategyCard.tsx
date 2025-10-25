'use client'

import { TrendingUp, Users, Star, Copy, ExternalLink } from 'lucide-react'

interface Strategy {
  id: string
  name: string
  creator: string
  performance: number
  rating: number
  deployments: number
  description: string
  tags: string[]
}

interface StrategyCardProps {
  strategy: Strategy
}

export function StrategyCard({ strategy }: StrategyCardProps) {
  return (
    <div className="p-6 rounded-lg border border-primary/20 bg-surface/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-200 animate-fade-in group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-fg mb-1 group-hover:text-primary transition-colors duration-200">
            {strategy.name}
          </h4>
          <p className="text-sm text-fg/60">{strategy.creator}</p>
        </div>
        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-success/10 border border-success/20">
          <TrendingUp className="w-4 h-4 text-success" />
          <span className="text-sm font-semibold text-success">+{strategy.performance}%</span>
        </div>
      </div>

      <p className="text-sm text-fg/70 mb-4 line-clamp-2">{strategy.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {strategy.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4 pb-4 border-b border-primary/10">
        <div className="flex items-center gap-4 text-sm text-fg/60">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-warning fill-warning" />
            <span>{strategy.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{strategy.deployments.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 px-4 py-2 bg-primary hover:bg-accent text-white rounded-lg font-semibold transition-all duration-200 text-sm glow-primary">
          Deploy Strategy
        </button>
        <button className="px-4 py-2 border border-primary/50 hover:border-primary text-fg rounded-lg transition-all duration-200">
          <Copy className="w-4 h-4" />
        </button>
        <button className="px-4 py-2 border border-primary/50 hover:border-primary text-fg rounded-lg transition-all duration-200">
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
