import { defineCommand, runMain } from 'citty'
import initCommand from './commands/init.js'
import addCommand from './commands/add.js'

const mainCommand = defineCommand({
  meta: {
    name: 'vuefy',
    description: 'Vuefy CLI — scaffold and manage Vue UI components',
  },
  subCommands: {
    init: initCommand,
    add: addCommand,
  },
})

runMain(mainCommand)
