import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';
import userEvent from '@testing-library/user-event';

const testColor = {
    color: 'crimson',
    code: { hex: '#f54269' },
    id: 1
}

const emptyColorList = []

test("Renders an empty list of colors without errors", () => {
    render(<ColorList color={emptyColorList} />)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList color={testColor}/>)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const setEditColor = jest.fn();

    render(<ColorList color={testColor} />);

    expect(setEditColor).not.toBeInTheDocument();

    const editing = screen.queryByTestId("color");
    userEvent.click(editing);

    expect(setEditColor).toBeInTheDocument();
});
