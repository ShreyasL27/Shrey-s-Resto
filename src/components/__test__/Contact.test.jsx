import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("Contact us Page Test Cases", () => {
   test('should load heading in contact us component', () => { 
      render(<Contact />);
  
      const heading = screen.getByRole("heading");
  
      expect(heading).toBeInTheDocument();
   })
  
  test('should load any button in contact us component', () => { 
      render(<Contact />);
  
      const button = screen.getByRole("button");
  
      expect(button).toBeInTheDocument();
   })
  
  it('should load Submit button in contact us component', () => { 
      render(<Contact />);
  
      const submit = screen.getByText("Submit");
  
      expect(submit).toBeInTheDocument();
   })
  
  it('should load 2 input boxes in contact us component', () => { 
  
     render(<Contact />);
  
     // Querying
     const inputBoxes = screen.getAllByRole("textbox")
     // console.log(inputBoxes);        // this prints React Element
     // console.log(inputBoxes.length)  // 2 as there are 2 input boxes
  
     expect(inputBoxes.length).toBe(2)
  })
})

