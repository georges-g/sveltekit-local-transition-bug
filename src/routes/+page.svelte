<script>
    import {MessageStore} from '$lib/forms';
    import {fade} from 'svelte/transition';

    let active = true;

    let messageStore = MessageStore();

    let handleForm = (e) => {
        e.preventDefault();

        // Imagine processing the form here and sending data to server
        // Then, you get the response and you want to fill the form with
        // messages

        messageStore.clear();

        messageStore.addMsg(
            'error', 'Generic error message 1', 'generic-errors');
        messageStore.addMsg(
            'error', 'Generic error message 2', 'generic-errors');

        messageStore.addMsg(
            'error', 'Name field error message 1', 'field-errors.name');
        messageStore.addMsg(
            'error', 'Name field error message 2', 'field-errors.name');
    }
</script>

<h1>Form page</h1>
<p>
    Link to the <a href="/other-page">other page</a>.
</p>
<form on:submit={handleForm}>
    <div>
        <label>Name</label>
        <input name='name' type='text'/>
        <div class='field-errors'>
            {#if $messageStore['field-errors.name']}
                {#each $messageStore['field-errors.name'] as msg (msg.id)}
                    <div
                        class='form-message {msg.className}'
                        transition:fade={{duration: 1000}}
                    >
                        {msg.content}
                        <span
                            class='close'
                            on:click={messageStore.deleteMsg(msg.id)}
                        >✕</span>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
    <div>
        <label>Email</label>
        <input name='email' type='email'/>
    </div>
    <div>
        <input type='submit'/>
    </div>
    <div class='generic-errors'>
        {#if $messageStore['generic-errors']}
            {#each $messageStore['generic-errors'] as msg (msg.id)}
                <div
                    class='form-message {msg.className}'
                    transition:fade={{duration: 1000}}
                >
                    {msg.content}
                    <span
                        class='close'
                        on:click={messageStore.deleteMsg(msg.id)}
                    >✕</span>
                </div>
            {/each}
        {/if}
    </div>
</form>
