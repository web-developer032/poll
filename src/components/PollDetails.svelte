<script>
  import Button from "../shared/Button.svelte";
  import { tweened } from "svelte/motion";
  import Card from "../shared/Card.svelte";
  import PollStore from "../stores/PollStore";

  export let poll;
  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((poll.votesA / totalVotes) * 100);
  $: percentB = Math.floor((poll.votesB / totalVotes) * 100);

  const handleVote = (option, id) => {
    PollStore.update((prevData) => {
      const copiedPolls = [...prevData];
      const upvotedPoll = copiedPolls.find((poll) => poll.id === id);

      switch (option) {
        case "a":
          upvotedPoll.votesA++;
          break;

        case "b":
          upvotedPoll.votesB++;
          break;
        default:
          break;
      }
      return copiedPolls;
    });
  };

  const tweenedA = tweened(0);
  const tweenedB = tweened(0);

  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);

  const handleDelete = (id) => {
    PollStore.update((prevData) => prevData.filter((poll) => poll.id !== id));
  };
</script>

<Card>
  <article class="poll">
    <h3>{poll.question}</h3>
    <p>Total Votes: {totalVotes}</p>
    <div class="answer" on:click={() => handleVote("a", poll.id)}>
      <div class="percent percent-a" style="width: {$tweenedA}%;" />
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>

    <div class="answer" on:click={() => handleVote("b", poll.id)}>
      <div class="percent percent-b" style="width: {$tweenedB}%;" />
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
    <div class="delete">
      <Button flat={true} on:click={() => handleDelete(poll.id)}>Delete</Button>
    </div>
  </article>
</Card>

<style>
  .poll {
    font-size: 1.8rem;
  }
  h3 {
    color: #555;
  }
  p {
    margin: 0.6rem 0 3rem;
    font-size: 1.4rem;
    color: #aaa;
  }
  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 1px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    padding: 1rem 2rem;
  }
  .percent {
    height: 100%;
    position: absolute;
    transition: 0.3s;
  }
  .percent-a {
    border-left: 4px solid var(--clr-red);
    background: rgba(217, 27, 66, 0.2);
  }
  .percent-b {
    border-left: 4px solid var(--clr-green);
    background: rgba(69, 196, 150, 0.2);
  }

  .delete {
    margin-top: 3rem;
    text-align: center;
  }
</style>
