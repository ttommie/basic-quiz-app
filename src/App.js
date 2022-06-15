const questionJSON = require('../src/questions.json');

function App() {
  return (
    <div className="App">
      { false ? (<div className="totalScore">You scored 1 out of {questionJSON.length}</div>) : 
      (
        <>
          <div className="questionSection">
            <div className="questionCount">
              <span>Question 1</span>/{questionJSON.length}
            </div>
            <div className="questionText">This is where the question should go</div>
          </div>
          <div className="answerSection">
              <button>Answer 1</button>
              <button>Answer 2</button>
              <button>Answer 3</button>
              <button>Answer 4</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
