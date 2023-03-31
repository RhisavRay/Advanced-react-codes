import { fireEvent, render, screen } from '@testing-library/react';
import FeedbackForm from './components/FeedbackForm';

describe("Feedback Form", () =>
{
  test("Submission will be disabld if score is less than 5 and there is no feedback provided", () =>
  {
    const handleSubmit = jest.fn()
    render(<FeedbackForm onSubmit={handleSubmit}/>)

    const rangeInput = screen.getAllByLabelText(/Score:/)
    fireEvent.change(rangeInput, { target: { value: "4" } })

    const submitButton = screen.getByRole("button")
    fireEvent.click(submitButton)

    expect(handleSubmit).not.toHaveBeenCalled()
    expect(submitButton).toHaveAttribute("disabled")
  })
})