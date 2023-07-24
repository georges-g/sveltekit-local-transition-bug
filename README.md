# SvelteKit transition bug

This repo demonstrates a bug with Svelte 4.1.1, Svelte Kit 1.22.3.

You can check [the bug page](https://github.com/sveltejs/kit/issues/10417).

To use it:
```
npm install -D
```

Then:
```
npm run dev
```

Go to the home page, click on Submit

You see error messages appearing, they should have a fading transition, but it
is not working.

If you set the transition to global, you can see how it slows down navigation by
clicking on the other page link after the messages appeared.
