import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event";
describe("Greeting Component",()=>{
    test("renders Hello World as a text",()=>{
        // Arrange
        render(<Greeting/>);
        // ACT
        // Nothing
        // Assert
       const helloWorldElement = screen.getByText("Hello World",{exact:false})
       expect(helloWorldElement).toBeInTheDocument()
    })
    test("renders It's Good to see you! if btn not clicked",()=>{
        render(<Greeting/>);
        const ItsGood = screen.getByText("It's good to see you!")
        expect(ItsGood).toBeInTheDocument()
    })
    test("Changed! when btn clicked",()=>{
        render(<Greeting/>);
        // Act
        const button = screen.getByRole("button")
        userEvent.click(button)
        // Assert
        const Changed = screen.getByText("Changed!",{exact:false})
        expect(Changed).toBeInTheDocument()
    })
    test("Paragraph not showing",()=>{
        render(<Greeting/>);
        // Act
        const button = screen.getByRole("button")
        userEvent.click(button)
        // Assert
        const Changed = screen.queryByText("It's good to see you!",{exact:false})
        expect(Changed).toBeNull()
    })
})