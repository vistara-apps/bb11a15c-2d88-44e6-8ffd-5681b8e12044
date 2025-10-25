'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, Zap, Users, Shield, ArrowRight, Activity } from 'lucide-react'
import { StrategyCard } from './components/StrategyCard'
import { ConnectWalletButton } from './components/ConnectWalletButton'
import { UserProfile } from './components/UserProfile'
import { StatsCard } from './components/StatsCard'

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

const mockStrategies: Strategy[] = [
  {
    id: '1',
    name: 'DeFi Momentum Alpha',
    creator: '@cryptowhale',
    performance: 24.5,
    rating: 4.8,
    deployments: 1247,
    description: 'Multi-agent strategy leveraging DeFi yield opportunities with momentum indicators',
    tags: ['DeFi', 'Momentum', 'High-Yield']
  },
  {
    id: '2',
    name: 'Base Blue Chip',
    creator: '@basebuilder',
    performance: 18.2,
    rating: 4.9,
    deployments: 2103,
    description: 'Conservative strategy focusing on established Base ecosystem tokens',
    tags: ['Conservative', 'Base', 'Long-term']
  },
  {
    id: '3',
    name: 'Volatility Harvester',
    creator: '@quantmaster',
    performance: 31.7,
    rating: 4.6,
    deployments: 892,
    description: 'Advanced volatility arbitrage across multiple DEX pools',
    tags: ['Arbitrage', 'Advanced', 'High-Risk']
  },
  {
    id: '4',
    name: 'Social Sentiment Trader',
    creator: '@vibecheck',
    performance: 15.8,
    rating: 4.7,
    deployments: 1456,
    description: 'Trades based on Farcaster social sentiment analysis and trending topics',
    tags: ['Social', 'AI', 'Sentiment']
  }
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="animate-pulse text-primary text-xl">Loading VibeCode Exchange...</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-bg grid-bg">
      {/* Header */}
      <header className="border-b border-primary/20 backdrop-blur-sm sticky top-0 z-50 bg-bg/80">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-fg">VibeCode Exchange</h1>
                <p className="text-xs text-fg/60">Social Algorithmic Trading</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <UserProfile />
              <ConnectWalletButton />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Discover. Deploy. Dominate.
          </h2>
          <p className="text-lg text-fg/80 max-w-2xl mx-auto mb-8">
            Social algorithmic trading for Farcaster – discover, share, and deploy multi-agent strategies gaslessly on Base.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 bg-primary hover:bg-accent text-white rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 glow-primary">
              Explore Strategies <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-6 py-3 border border-primary/50 hover:border-primary text-fg rounded-lg font-semibold transition-all duration-200">
              Create Strategy
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatsCard
            icon={<TrendingUp className="w-6 h-6" />}
            label="Total Volume"
            value="$12.4M"
            change="+24.5%"
            positive
          />
          <StatsCard
            icon={<Users className="w-6 h-6" />}
            label="Active Traders"
            value="5,247"
            change="+18.2%"
            positive
          />
          <StatsCard
            icon={<Activity className="w-6 h-6" />}
            label="Live Strategies"
            value="1,893"
            change="+31.7%"
            positive
          />
          <StatsCard
            icon={<Shield className="w-6 h-6" />}
            label="Gas Saved"
            value="$48.2K"
            change="+15.8%"
            positive
          />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg border border-primary/20 bg-surface/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-200">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-fg">Gasless Trading</h3>
            <p className="text-fg/70 text-sm">
              Deploy and manage strategies without worrying about gas fees. All transactions sponsored on Base.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-primary/20 bg-surface/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-200">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-fg">Social Trading</h3>
            <p className="text-fg/70 text-sm">
              Fork strategies, share performance, and collaborate with the Farcaster community.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-primary/20 bg-surface/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-200">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-fg">Self-Custodial</h3>
            <p className="text-fg/70 text-sm">
              Maintain full control of your funds. All strategies execute with transparent, auditable parameters.
            </p>
          </div>
        </div>

        {/* Trending Strategies */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-fg">Trending Strategies</h3>
            <button className="text-primary hover:text-accent transition-colors duration-200 flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockStrategies.map((strategy) => (
              <StrategyCard key={strategy.id} strategy={strategy} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-fg/80 text-sm">Powered by Base & Farcaster</span>
            </div>
            <div className="flex gap-6 text-sm text-fg/60">
              <a href="#" className="hover:text-primary transition-colors duration-200">Docs</a>
              <a href="#" className="hover:text-primary transition-colors duration-200">Discord</a>
              <a href="#" className="hover:text-primary transition-colors duration-200">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
