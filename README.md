# VibeCode Exchange

Social algorithmic trading for Farcaster – discover, share, and deploy multi-agent strategies gaslessly on Base.

## Features

- 🚀 **Gasless Trading**: Deploy and manage strategies without gas fees
- 👥 **Social Trading**: Fork strategies and collaborate with the Farcaster community
- 🔒 **Self-Custodial**: Maintain full control of your funds
- ⚡ **Base Integration**: Built on Base L2 for fast, low-cost transactions
- 🎯 **Multi-Agent Strategies**: Leverage sophisticated trading algorithms

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI**: React 19, Tailwind CSS
- **Blockchain**: Base (L2), OnchainKit
- **Social**: Farcaster MiniKit
- **Wallet**: Coinbase Wallet, WalletConnect

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/          # React components
│   ├── Providers.tsx   # OnchainKit & React Query providers
│   ├── StrategyCard.tsx
│   ├── ConnectWalletButton.tsx
│   └── ...
├── page.tsx            # Main page
├── layout.tsx          # Root layout
├── globals.css         # Global styles
└── loading.tsx         # Loading state

public/
└── .well-known/
    └── farcaster.json  # Farcaster manifest
```

## Deployment

Deploy to Vercel:

```bash
npm run build
```

## Learn More

- [Base Documentation](https://docs.base.org)
- [OnchainKit Documentation](https://onchainkit.xyz)
- [Farcaster Mini Apps](https://docs.farcaster.xyz/developers/frames/v2/mini-apps)

## License

MIT
