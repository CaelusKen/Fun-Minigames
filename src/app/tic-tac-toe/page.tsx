import TicTacToe from "@/components/games/tic-tac-toe/tic-tac-toe";
import GameLayout from "@/layout/game-layout";

export default function TicTacToePage() {
    return (
      <GameLayout title="Tic Tac Toe">
        <TicTacToe />
      </GameLayout>
    )
  }