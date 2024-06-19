import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"

it("should render header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});
    // const loginButton = screen.getByText("Login")

    expect(loginButton).toBeInTheDocument();
})

it("should render header component with Cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cart = screen.getByText("🛒")

    expect(cart).toBeInTheDocument();
})

it("should render header component with Stat text included", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const stat = screen.getByText(/Stat/) // regex

    expect(stat).toBeInTheDocument();
})

it("should render header component with Stat text included", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"})

    fireEvent.click(loginButton);  // clicking a button

    const logoutButton = screen.getByRole("button", {name: "Logout"})

    expect(logoutButton).toBeInTheDocument();
})

