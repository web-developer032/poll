<script>
  import Button from "../shared/Button.svelte";
  import { createEventDispatcher } from "svelte";
  import PollStore from "../stores/PollStore";

  const dispatch = createEventDispatcher();

  let fields = {
    question: "",
    answerA: "",
    answerB: "",
  };

  let errors = {
    question: "",
    answerA: "",
    answerB: "",
  };

  let valid = false;

  const submitHandler = () => {
    valid = true;
    // VALIDATE QUESTION
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "Question must be atleast 5 characters long.";
    } else {
      errors.question = "";
    }

    // VALIDATE ANSWER A
    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "Answer A cannot be empty.";
    } else {
      errors.answerA = "";
    }

    // VALIDATE QUESTION
    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = "Answer B cannot be empty.";
    } else {
      errors.answerB = "";
    }

    if (valid) {
      let poll = { ...fields, id: Math.random(), votesA: 0, votesB: 0 };
      PollStore.update((prevData) => [...prevData, poll]);
      dispatch("addPoll");
    }
  };
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll Question</label>
    <input
      type="text"
      name="question"
      id="question"
      bind:value={fields.question}
    />
    <div class="error">{errors.question}</div>
  </div>

  <div class="form-field">
    <label for="answer-a">Answer A</label>
    <input
      type="text"
      name="answer-a"
      id="answer-a"
      bind:value={fields.answerA}
    />
    <div class="error">{errors.answerA}</div>
  </div>

  <div class="form-field">
    <label for="answer-b">Answer B</label>
    <input
      type="text"
      name="answer-b"
      id="answer-b"
      bind:value={fields.answerB}
    />
    <div class="error">{errors.answerB}</div>
  </div>

  <Button type="secondary" flat={true}>Add Poll</Button>
</form>

<style>
  form {
    font-size: 1.6rem;
    width: 40rem;
    margin: 0 auto;
    text-align: center;
  }
  form .form-field {
    margin: 1.8em 0;
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
  form .form-field label {
    text-align: left;
  }
  form .form-field input {
    border-radius: 0.5rem;
  }
  .error {
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--clr-red);
  }
</style>
