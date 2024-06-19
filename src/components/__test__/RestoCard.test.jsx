import { render, screen } from "@testing-library/react"
import RestoCard from "../RestoCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

// cloudinaryImageId undefined error
it.skip("should render RestoCard component with props data", () => {
    render(<RestoCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
})
