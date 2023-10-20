import { render, screen } from "@testing-library/react"
import Async from "./components/Async"

describe("Async Component",()=>{
    test("Renders Posts if succeeds", async ()=>{
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async ()=>[{id:1,title:"first post"}],
        })
        render(<Async/>)

       const listItem = await screen.findAllByRole("listitem")
       expect(listItem).not.toHaveLength(0)
    })
})