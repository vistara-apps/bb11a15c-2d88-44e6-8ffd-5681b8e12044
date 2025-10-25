'use client'

import { AlertCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-error/10 flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-error" />
        </div>
        <h2 className="text-2xl font-bold text-fg mb-4">Something went wrong!</h2>
        <p className="text-fg/70 mb-6">{error.message || 'An unexpected error occurred'}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-primary hover:bg-accent text-white rounded-lg font-semibold transition-all duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
