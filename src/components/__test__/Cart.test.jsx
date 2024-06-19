import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import RestaurantMenu from "../RestaurantMenu"
import Cart from "../Cart"
import { act } from "react-dom/test-utils" 
import MOCK_DATA from "../mocks/mockRestaurantMenuData.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)

it("should load Restaurant Menu Component", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ))

    const accordianHeader = screen.getByText("Recommended (5)")
    fireEvent.click(accordianHeader)
    expect(screen.getAllByTestId("foodItems").length).toBe(70) // total items = 75 - 5 (from recommended when it is clicked)

    const addBtns = screen.getAllByRole("button", {name: "+"})
    fireEvent.click(addBtns[0])
    fireEvent.click(addBtns[1])
    fireEvent.click(addBtns[2])
    // button is clicked 3 times
    expect(screen.getByText("3")).toBeInTheDocument()
    
    // Cart Items will have 3 after clicking on add, therefore 70 + 3
    expect(screen.getAllByTestId("foodItems").length).toBe(73)
    
    // After clearing cart items will return to 70
    const clearBtn = screen.getByRole("button", {name: "Clear Cart"})
    fireEvent.click(clearBtn)
    expect(screen.getAllByTestId("foodItems").length).toBe(70)

    expect(screen.getByText("Your cart is empty")).toBeInTheDocument()
})