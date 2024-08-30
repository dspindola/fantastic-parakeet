const [app, command] = Bun.argv.slice(2)

console.log(app, command)

await Bun.$`bun scripts/${command}.bun.sh`.cwd(app)