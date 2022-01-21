import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from "../Dropdown"

const mockedFuntion = jest.fn(); 

it('expand explore dropdown on click', () => {
    render(
        <Dropdown changeState={mockedFuntion} setSearchTerm={mockedFuntion}/>
    );
    const logo=screen.getByRole('img')
    expect(logo).toHaveAttribute('src',"logo.png")

    const myLibrary= screen.getByText('My Library');
    expect(myLibrary.textContent).toBe('My Library')

    const explore= screen.getByText('Explore');
    expect(explore.textContent).toBe('Explore')
    fireEvent.click(explore)
    const entrepreneurship= screen.getByText('Entrepreneurship')
    expect(entrepreneurship).toBeVisible()
    fireEvent.click(explore)
    expect(entrepreneurship).not.toBeVisible()

    const searchIcon=screen.getByTestId('SearchOutlinedIcon')
    fireEvent.click(searchIcon)
    const textBox=screen.getByRole('textbox')
    expect(textBox).toBeVisible()
    
    fireEvent.click(textBox)
    fireEvent.change(textBox, { target: { value: "Go Grocery Shopping" } })
    expect(textBox.value).toBe("Go Grocery Shopping");

    const closeIcon=screen.getByTestId('CloseIcon')
    fireEvent.click(closeIcon)
    expect(textBox).not.toBeVisible()
});