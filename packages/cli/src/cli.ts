import { defineCommand, runMain } from 'citty'
import initCommand from './commands/init.js'

const mainCommand = defineCommand({
  meta: {
    name: 'vuefy',
    description: 'Vuefy CLI — scaffold and manage Vue UI components',
  },
  subCommands: {
    init: initCommand,
  },
})

runMain(mainCommand)
