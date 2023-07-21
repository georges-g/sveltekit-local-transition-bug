import {createId} from '$lib/helpers';
import {writable} from 'svelte/store';

export let MessageStore = () => {
    //
    // Store for form messages
    // Messages use a dotted path as a location identifier in the DOM
    //
    let {set, subscribe, update} = writable(0);

    let addMsg = (className, content, path) => {
        let id = createId();
        update(data => {
            if (!(path in data)) {
                data[path] = [];
            }
            data[path].push({className, content, id});
            return data;
        });
    };

    let clear = () => {
        set({});
    }

    let deleteMsg = (id) => {
        update(data => {
            for (let [path, msgs] of Object.entries(data)) {
                msgs = msgs.filter(msg => msg.id !== id);
                data[path] = msgs;
            }
            return data;
        });
    };

    set({});

    return {
        addMsg,
        clear,
        deleteMsg,
        set,
        subscribe,
        update
    }
}
