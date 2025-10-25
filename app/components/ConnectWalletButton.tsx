'use client'

import { useState } from 'react'
import { Wallet } from 'lucide-react'

export function ConnectWalletButton() {
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = () => {
    // In production, this would use OnchainKit's ConnectWallet component
    setIsConnected(!isConnected)
  }

  return (
    <button
      onClick={handleConnect}
      className="px-4 py-2 bg-primary hover:bg-accent text-white rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 glow-primary"
    >
      <Wallet className="w-4 h-4" />
      {isConnected ? 'Connected' : 'Connect Wallet'}
    </button>
  )
}
