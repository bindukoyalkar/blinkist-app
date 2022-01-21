import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from "../SearchBar"

const mockedFuntion = jest.fn(); 

it('should be able to type into input', () => {
    render(
        <SearchBar changeState={mockedFuntion} />
    );
    const textField= screen.getByRole('textbox')
    fireEvent.click(textField)
    fireEvent.change(textField, { target: { value: "Go Grocery Shopping" } })
    expect(textField.value).toBe("Go Grocery Shopping");
});