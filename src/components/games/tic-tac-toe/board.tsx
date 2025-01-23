import type React from "react"
import Square from "./square"
import type { Board as BoardType } from "@/utils/tic-tac-toe-utils"

interface BoardProps {
  squares: BoardType
  onClick: (i: number) => void
}

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  )
}

export default Board

