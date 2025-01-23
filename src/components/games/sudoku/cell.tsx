import type React from "react"

interface CellProps {
  value: number
  isInitial: boolean
  onChange: (value: number) => void
}

const Cell: React.FC<CellProps> = ({ value, isInitial, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number.parseInt(e.target.value) || 0
    if (newValue >= 0 && newValue <= 9) {
      onChange(newValue)
    }
  }

  return (
    <input
      type="number"
      value={value === 0 ? "" : value}
      onChange={handleChange}
      className={`w-10 h-10 text-center border ${
        isInitial ? "font-bold bg-gray-100" : "bg-white"
      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
      readOnly={isInitial}
      min="1"
      max="9"
    />
  )
}

export default Cell