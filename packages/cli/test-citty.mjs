import { runMain, defineCommand } from 'citty';

const main = defineCommand({
  meta: { name: 'test' },
  subCommands: {
    hello: defineCommand({
      meta: { name: 'hello', description: 'say hello' },
      async run() {
        console.log('hello!');
      }
    })
  }
});

runMain(main);
