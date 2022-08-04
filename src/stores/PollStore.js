import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "Python or JS?",
    answerA: "Python",
    answerB: "JS",
    votesA: 1,
    votesB: 2,
  },
]);

export default PollStore;
