import React from 'react';

const texts = [
  ['Nieko tokio, viskas bus gera'],
  ['Gerai, nujaučiu, kad greitu metu jausitės puikiai'],
  ['Smagu girdėti, taip ir toliau'],
  ['answer 4'],
];

const answers = [
  ['Jaučiuosi prastai :('],
  ['Jaučiuosi normaliai : |'],
  ['Jaučiuosi puikiai :)'],
  ['question'],
];

class MoodChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedText: [],
      message: ['Kaip jautiesi ciuveli???'],
    };
  }

  handleClick = (i) => {
    this.setState({ clickedText: answers[i] });
  };
  handleAnswer = (i) => {
    this.setState({ message: texts[i] });
  };

  render() {
    let { clickedText, message } = this.state;
    /////////////////////////////////////////////////////

    ///////////////////////////
    return (
      <div>
        <h2>{message}</h2>

        {answers.map((answer, i) => (
          <button key={`answer-${i}`} onClick={() => this.handleAnswer(i)}>
            {answers[i]} {i + 1}
          </button>
        ))}
        {clickedText.length > 0 && <p>Atsakymas:</p>}

        <ul>
          {clickedText.map((t, i) => (
            <li key={`text-${i}`}>{t}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MoodChanger;
