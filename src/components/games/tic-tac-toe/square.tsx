import type React from "react"
import type { Player } from "@/utils/tic-tac-toe-utils"

interface SquareProps {
  value: Player
  onClick: () => void
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
      className="w-20 h-20 text-4xl font-bold bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Square