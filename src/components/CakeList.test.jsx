import { render, screen, waitFor } from "@testing-library/react"
import CakeList from "./CakeList.jsx"
import axios from "axios"
import { vi, describe, test, expect } from "vitest";
import "@testing-library/jest-dom"
 
// ✅ Mock modules using `vi` (Vitest)
vi.mock("axios")
 
vi.mock("./Loader", () => ({
  default: () => <div data-testid="loader">Loading...</div>
}))
 
vi.mock("./Cake", () => ({
  default: ({ data }) => <div data-testid="cake">{data.name}</div>
}))
 
// ✅ Test data
const mockCakes = [
  { name: "Chocolate Cake", price: 500 },
  { name: "Vanilla Cake", price: 400 }
]
 
describe("Cakelist Component", () => {
  test("renders loader while fetching cakes", async () => {
    // Keep promise pending to simulate loading
    axios.mockImplementationOnce(() => new Promise(() => {}))
    render(<CakeList />)
    expect(screen.getByTestId("loader")).toBeInTheDocument()
  })
 
  test("renders cake list after API fetch", async () => {
    axios.mockResolvedValueOnce({ data: { data: mockCakes } })
    render(<CakeList />)
 
    // Wait for cake items to appear
    const cakeItems = await screen.findAllByTestId("cake")
    expect(cakeItems.length).toBe(mockCakes.length)
 
    // Optional: check names are rendered
    mockCakes.forEach((cake) => {
      expect(screen.getByText(cake.name)).toBeInTheDocument()
    })
  })
 
  test("handles API error without crashing", async () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {})
    axios.mockRejectedValueOnce(new Error("API failed"))
 
    render(<CakeList />)
 
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith("Error from all caeks api", expect.any(Error))
    })
 
    consoleSpy.mockRestore()
  })
})
 
 