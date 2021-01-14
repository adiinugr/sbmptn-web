import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const quizzes = [
  {
    question: "Siapakah aku?",
    answers: ["Adi", "Budi", "Joko", "Wawan"],
    correctAnswer: "Adi",
  },
  {
    question: "Ibukota Indonesia?",
    answers: ["Bandung", "Jakarta", "Jepang", "Pacitan"],
    correctAnswer: "Jakarta",
  },
  {
    question: "Presiden kita?",
    answers: ["Jokowi", "Ridwan Kamil", "Prabowo", "Subianto"],
    correctAnswer: "Jokowi",
  },
  {
    question: "Kapan Indonesia Merdeka?",
    answers: [
      "19 Desember 2001",
      "6 Januari 1992",
      "17 Agustus 1945",
      "17 November 1965",
    ],
    correctAnswer: "17 Agustus 1945",
  },
];

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer] = useState([]);
  const [isRagu] = useState([]);
  const [date] = useState(Date.now() + 20000);

  const prevButtonHandler = () => {
    if (currentQuestion === 0) {
      return null;
    } else {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const nextButtonHandler = () => {
    if (currentQuestion === quizzes.length - 1) {
      return null;
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRaguRagu = () => {
    isRagu[currentQuestion] = "yes";
  };
  const handleYakin = () => {
    isRagu[currentQuestion] = "no";
  };

  const handleChangeAnswer = (event) => {
    currentAnswer[currentQuestion] = event.target.value;
  };

  const timerRenderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="flex justify-center px-12 py-4">
          <div>Waktu Habis</div>
        </div>
      );
    } else {
      return (
        <div className="flex justify-between px-12 py-4">
          <div className="text-center">
            <p className="text-lg font-semibold">{hours}</p>
            <p>Jam</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold">{minutes}</p>
            <p>Menit</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold">{seconds}</p>
            <p>Detik</p>
          </div>
        </div>
      );
    }
  };

  const handleSubmitTest = () => {
    const correctAnswer = () => {
      let values = [];

      quizzes.forEach((quiz) => {
        values.push(quiz.correctAnswer);
      });

      return values;
    };

    const userAnswer = currentAnswer;
    const quizAnswer = correctAnswer();

    const uniqueAnswer = userAnswer.filter((obj) => {
      return quizAnswer.indexOf(obj) == -1;
    });

    const rightAnswerCount = quizzes.length - uniqueAnswer.length;

    console.log(rightAnswerCount);
  };

  return (
    <div className="lg:bg-gray-100 h-screen">
      <div className="bg-green-600 flex items-center justify-between px-8 text-white w-full header shadow-sm p-3">
        <div className="font-medium hidden lg:flex">Adi Nugroho</div>
        <div className="font-medium text-center lg:text-left">
          Try Out Skolastik Kuantitatif 1 Bla Masyarakat Indonesia
        </div>
        <div className=""></div>
      </div>
      <div className="lg:flex content p-3">
        <div className="lg:w-3/4 flex flex-col mb-4 lg:mb-0 justify-between bg-white h-full p-5 rounded-md">
          <div>
            <div className="font-semibold border-b border-gray-200 pb-2 mb-3">
              Pertanyaan {currentQuestion + 1}
            </div>
            <div className="mb-4">{quizzes[currentQuestion].question}</div>
            <div>
              {quizzes[currentQuestion].answers.map((answer, index) => (
                <div className="mb-2" key={answer}>
                  <input
                    type="radio"
                    className="mr-2"
                    name="answer"
                    value={answer}
                    defaultChecked={currentAnswer[currentQuestion] === answer}
                    onChange={handleChangeAnswer}
                    id={answer}
                  />
                  <label htmlFor={answer}>{answer}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className="flex justify-between">
              <div className="my-3">
                <button
                  className="bg-gray-500 text-white mt-2  disabled:opacity-50 rounded-md px-2 py-1 lg:px-3 lg:py-2 mr-2"
                  onClick={prevButtonHandler}
                  disabled={currentQuestion === 0}
                >
                  Prev
                </button>
                <button
                  className="bg-gray-500 text-white  mt-2 disabled:opacity-50 rounded-md px-2 py-1 lg:px-3 lg:py-2 mr-4"
                  onClick={nextButtonHandler}
                  disabled={currentQuestion === quizzes.length - 1}
                >
                  Next
                </button>
                <button
                  className="bg-yellow-500 mr-2 text-white  mt-2 rounded-md px-2 py-1 lg:px-3 lg:py-2"
                  onClick={handleRaguRagu}
                >
                  Ragu-ragu
                </button>
                <button
                  className="bg-green-600 text-white  mt-2 rounded-md px-2 py-1 lg:px-3 lg:py-2"
                  onClick={handleYakin}
                >
                  Yakin
                </button>
              </div>
              <div className="my-3">
                <button
                  className="bg-green-600 text-white mt-2 rounded-md px-2 py-1 lg:px-3 lg:py-2"
                  onClick={handleSubmitTest}
                >
                  Akhiri Test
                </button>
              </div>
            </div>
            <div className="text-sm md:px-32 flex p-3 justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-600 mr-2 rounded-full" />
                <div>Terjawab</div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-500 mr-2 rounded-full" />
                <div>Belum Dijawab</div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 mr-2 rounded-full" />
                <div>Ragu-ragu</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 lg:ml-3 bg-white rounded-md overflow-hidden">
          <div className="font-medium bg-green-600 px-3 py-2 text-white">
            Waktu Tersisa
          </div>
          <Countdown date={date} renderer={timerRenderer} />
          <div className="font-medium border-b-2 px-3 py-2 bg-green-600 text-white">
            Nomer Soal
          </div>
          <div className="p-4 grid grid-cols-6 gap-4">
            {quizzes.map((quiz, index) => {
              const quizNumberClass = () => {
                if (isRagu[index] === "yes") {
                  return "py-2 bg-yellow-500 text-white rounded-md";
                } else if (currentAnswer[index] || isRagu[index] === "no") {
                  return "py-2 bg-green-600 text-white rounded-md";
                } else {
                  return "py-2 bg-gray-500 text-white rounded-md";
                }
              };
              return (
                <button
                  className={quizNumberClass()}
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
