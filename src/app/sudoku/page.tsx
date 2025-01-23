import Sudoku from "@/components/games/sudoku/sudoku";
import GameLayout from "@/layout/game-layout";

export default function SudokuPage() {
    return (
      <GameLayout title="Sudoku">
        <Sudoku />
      </GameLayout>
    )
  }