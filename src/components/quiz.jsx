function Quiz({ questionBank, userAnswers, setUserAnswers, currentQuestion, setCurrentQuestion, setIsQuizFinished }) {
    const selectedAnswer = userAnswers[currentQuestion];

    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;
        setUserAnswers(newUserAnswers);
    }

    function goToNext() {
        if (currentQuestion === questionBank.length - 1) {
            setIsQuizFinished(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function goToPrev() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    return (
        <div>
            <h2>Question {currentQuestion + 1}</h2>
            <p className="question">{questionBank[currentQuestion].question}</p>

            {questionBank[currentQuestion].options.map((option) => (
                <button
                    key={option}
                    className={"option" + (selectedAnswer === option ? " selected" : "")}
                    onClick={() => handleSelectOption(option)}
                >
                    {option}
                </button>
            ))}

            <div className="nav-buttons">
                <button onClick={goToPrev} disabled={currentQuestion === 0}>
                    Previous
                </button>
                <button onClick={goToNext} disabled={!selectedAnswer}>
                    {currentQuestion === questionBank.length - 1 ? "Submit" : "Next"}
                </button>
            </div>
        </div>
    );
}

export default Quiz;
