<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let items;
    export let activeItem;
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click={() => dispatch("tabChange", item)}>
                <div class:active={item === activeItem}>{item}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        font-size: 1.6rem;
        margin-bottom: 4rem;
    }
    ul {
        display: flex;
        gap: 2rem;
        justify-content: center;
        list-style: none;
        cursor: pointer;
    }
    li {
        color: #555;
    }
    .active {
        color: #d91b42;
        border-bottom: 2px solid;
        padding-bottom: 0.8rem;
    }
</style>
