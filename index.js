const { Client } = require('photop-client')
const client = new Client({ username: `QABot`, password: process.env['Pass'] })
client.onPost = (post) => {
  if (post.text.match(`qa`, `Qa`, 'qA')) {
    post.connect()
    post.chat(`qa`)
    console.log(`chat qa`)
  }
  post.onChat = (chat) => {
    if (chat.text.match(`qa like`)) {
      chat.post.like()
      chat.reply(`qa has liked the post`)
      console.log(`liked qaa
    `)}
  if (chat.text.match(`qa cult`)) {
    client.post(`Join the qa cult! All you have to do is join the server below and change your username/nickname to qa or something related to the phrase "qa"! https://discord.gg/qtDH2m7EeQ (this was requested by ${chat.author.username})`)
    console.log(`cult qa`)
  }
}
}
require('http').createServer((req, res) => res.end('running')).listen(3000)
