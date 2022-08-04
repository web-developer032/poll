<script>
  import CreatePollForm from "./components/CreatePollForm.svelte";

  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import PollList from "./components/PollList.svelte";
  import Tabs from "./shared/Tabs.svelte";

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const tabChange = (e) => {
    activeItem = e.detail;
  };

  const addPoll = (e) => {
    activeItem = "Current Polls";
  };
</script>

<Header />

<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <PollList />
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:addPoll={addPoll} />
  {/if}
</main>

<Footer />

<style>
  main {
    max-width: 96rem;
    margin: 4rem auto;
  }
</style>
