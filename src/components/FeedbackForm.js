import { useState } from "react"

const FeedbackForm = ({onSubmit}) =>
{
    const [score, setScore] = useState("5")
    const [comment, setComment] = useState("")

    const isDisabled = Number(score) < 5 && comment.length <= 10

    const textAreaPlaceholder = isDisabled ? "Please prove a comment stating the reason for not having a good experience" : "Optional feedback"

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        onSubmit({score, comment})
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h3>Feedback Form</h3>
                    <label>Score: {score}</label>
                    <br/>
                    <input
                        type='range'
                        min='1'
                        max='10'
                        value={score}
                        onChange={e => setScore(e.target.value)}/>
                    <br/>
                    <label>Comments please:</label>
                    <br/>
                    <textarea
                        value={comment}
                        name="comment"
                        placeholder={textAreaPlaceholder}/>
                    <br/>
                    <button
                        type="submit"
                        disabled={isDisabled}>Submit</button>
                </fieldset>
            </form>
        </>
    )
}

export default FeedbackForm