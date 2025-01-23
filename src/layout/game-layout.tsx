import Link from "next/link"
import { Button } from "@/components/ui/button"

interface GameLayoutProps {
  children: React.ReactNode
  title: string
}

export default function GameLayout({ children, title }: GameLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      {children}
      <Link href="/" className="mt-8">
        <Button variant="outline">Back to Game Selection</Button>
      </Link>
    </main>
  )
}