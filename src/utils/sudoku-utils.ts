// Function to generate a solved Sudoku board
export function generateSolvedSudoku(): number[][] {
    const board: number[][] = Array(9)
      .fill(null)
      .map(() => Array(9).fill(0))
    solveSudoku(board)
    return board
  }
  
  // Function to create a Sudoku puzzle by removing numbers from a solved board
  export function generatePuzzle(solvedBoard: number[][], difficulty: number): number[][] {
    const puzzle: number[][] = JSON.parse(JSON.stringify(solvedBoard))
    const totalCells = 81
    const cellsToRemove = Math.floor(totalCells * difficulty)
  
    for (let i = 0; i < cellsToRemove; i++) {
      let row, col
      do {
        row = Math.floor(Math.random() * 9)
        col = Math.floor(Math.random() * 9)
      } while (puzzle[row][col] === 0)
      puzzle[row][col] = 0
    }
  
    return puzzle
  }
  
  // Function to check if a number can be placed in a given cell
  function isValid(board: number[][], row: number, col: number, num: number): boolean {
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num || board[x][col] === num) {
        return false
      }
    }
  
    const startRow = Math.floor(row / 3) * 3
    const startCol = Math.floor(col / 3) * 3
  
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i + startRow][j + startCol] === num) {
          return false
        }
      }
    }
  
    return true
  }
  
  // Function to solve the Sudoku puzzle using backtracking
  export function solveSudoku(board: number[][]): boolean {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(board, row, col, num)) {
              board[row][col] = num
              if (solveSudoku(board)) {
                return true
              }
              board[row][col] = 0
            }
          }
          return false
        }
      }
    }
    return true
  }
  
  // Function to check if the current board state is valid
  export function isValidSudoku(board: number[][]): boolean {
    for (let i = 0; i < 9; i++) {
      const row = new Set<number>()
      const col = new Set<number>()
      const box = new Set<number>()
  
      for (let j = 0; j < 9; j++) {
        const rowVal = board[i][j]
        const colVal = board[j][i]
        const boxVal = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]
  
        if (rowVal !== 0) {
          if (row.has(rowVal)) return false
          row.add(rowVal)
        }
  
        if (colVal !== 0) {
          if (col.has(colVal)) return false
          col.add(colVal)
        }
  
        if (boxVal !== 0) {
          if (box.has(boxVal)) return false
          box.add(boxVal)
        }
      }
    }
  
    return true
  }  