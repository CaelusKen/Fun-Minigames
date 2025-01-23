import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Three Games Project</h1>
      <div className="flex space-x-4">
        <Link href="/tic-tac-toe">
          <Button>Tic Tac Toe</Button>
        </Link>
        <Link href="/memory">
          <Button>Memory Game</Button>
        </Link>
        <Link href="/sudoku">
          <Button>Sudoku</Button>
        </Link>
      </div>
    </main>
  );
}
