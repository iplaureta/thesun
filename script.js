const quizEl = document.getElementById("quiz");
const shuffle = document.getElementById("shuffle");

const questions = [
  {
    id: "q1",
    content: "What do I have now that I have wished for in the past?",
  },
  { id: "q2", content: "My dream life is…" },
  {
    id: "q3",
    content: "What would I feel if I had everything I need and want?",
  },
  {
    id: "q4",
    content:
      "I am on my way to reaching my goals. This is important to me because…",
  },
  { id: "q5", content: "I believe in myself because…" },
  {
    id: "q6",
    content:
      "What is one thing I can do today that will help me get one step closer to my goals and dreams?",
  },
  { id: "q7", content: "Write a thank-you letter to yourself" },
  {
    id: "q8",
    content:
      "A list of things I am ready to receive (be as specific or vague as you please)",
  },
  {
    id: "q9",
    content:
      "Describe yourself a year from now. What are you doing? What do you look like? What are your values?",
  },
  { id: "q10", content: "I deserve abundance because…" },
  { id: "q11", content: "Describe the love you deserve" },
  {
    id: "q12",
    content:
      "Write a letter to the universe as if you are co-creating your life with it",
  },
  {
    id: "q13",
    content: "What’s the most recent miracle you’ve experienced or witnessed?",
  },
  {
    id: "q14",
    content: "Describe 3 people in your life that sends you to high vibrations",
  },
  {
    id: "q15",
    content: "What are some boundaries I can set to protect my energy?",
  },
  {
    id: "q16",
    content: "List down some of your small habits that make your day better",
  },
  {
    id: "q17",
    content: "What is my intention for today? What will I do to manifest this?",
  },
  {
    id: "q18",
    content:
      "What qualities do I have now that makes me deserving of my manifestations?",
  },
  {
    id: "q19",
    content:
      "What qualities do I have now that are holding me back from having my dream life?",
  },
  {
    id: "q20",
    content:
      "What decisions do I have to make in order to manifest my dream life?",
  },
  {
    id: "q21",
    content:
      "List down the challenges you’ve overcome in the past. How did you overcome them?",
  },
  {
    id: "q22",
    content:
      "Create a list of what’s holding you back. What steps are you taking to get rid of these?",
  },
  { id: "q23", content: "Happiness is…" },
  { id: "q24", content: "I am enough because…" },
  { id: "q25", content: "Write a letter to yourself" },
];

const randomNumber = (arrayLength) => {
  return Math.floor(Math.random() * arrayLength);
};

let quiz = randomNumber(questions.length);

quizEl.textContent = `${questions[quiz].content}`;

const generateRandomQuiz = () => {
  quizEl.textContent = `${questions[quiz].content}`;
};

shuffle.addEventListener("click", () => {
  quiz = randomNumber(questions.length);
  generateRandomQuiz();
});
