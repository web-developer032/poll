<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<button class={type} class:flat class:inverse on:click>
  <slot />
</button>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 0.5rem;
    padding: 0.8rem 1.2rem;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
  .primary {
    background: var(--clr-red);
    color: #fff;
  }
  .secondary {
    background: var(--clr-green);
    color: #fff;
  }
  .flat {
    box-shadow: none;
  }
  .primary.inverse {
    background: #fff;
    color: var(--clr-red);
    border: 2px solid;
  }
  .secondary.inverse {
    background: #fff;
    color: var(--clr-green);
    border: 2px solid;
  }
</style>
