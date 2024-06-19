import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockRestoListData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should render the body component with search", async () => {
    await act(async() => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))

    const searchBtn = screen.getByRole("button", {name: "🔍"})
    // console.log(searchBtn)

    // const searchInput = screen.getByTestId("searchInput")
    // console.log(searchInput)
    // fireEvent.change(searchInput, {target: {value: "Pizza"}});
    // fireEvent.click(searchBtn);

    // screen should load 2 res cards
    // const cards = screen.findAllByTestId("resCard");

    expect(searchBtn).toBeInTheDocument();
    // expect(cards.length).toBeInTheDocument(4);

})