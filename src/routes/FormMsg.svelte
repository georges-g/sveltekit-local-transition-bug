<script>
    import {fade} from 'svelte/transition';

    export let messageStore;
    export let msgId;

    $: msg = processStore($messageStore, msgId);

    let processStore = (data, id) => {
        for (let [path, msgs] of Object.entries(data)) {
            for (let msg of msgs) {
                if (msg.id === id) {
                    return msg;
                }
            }
        }
    }

    let handleClose = () => {
        messageStore.deleteMsg(msgId);
    }
</script>

<!--
    The transition here does not work, whether as local or global

    Global would be a problem anyways as, if some messages are alive, it would
    slow down a navigation due to clicking on the link to the other page
-->
{#if msg}
    <div
        class='form-message {msg.className}'
        transition:fade|local={{duration: 1000}}
    >
        {msg.content}
        <span class='close' on:click={handleClose}>✕</span>
    </div>
{/if}
