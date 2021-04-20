var rpc = require("discord-rpc");
const client = new rpc.Client({ transport: "ipc" });
client.on("ready", () => {
  client.request("SET_ACTIVITY", {
    pid: process.pid,
    activity: {
      details: "Ohayo! Muhammad Rizki Syahputra",
      assets: {
        large_image: "Image",
        large_text: "Just Penetration Tester", // THIS WILL SHOW AS "Playing <Status>" from the outisde
      },
      buttons: [
        { label: "Instagram", url: "https://instagram.com/madriztra" },
        { label: "Join Discord Server", url: "https://discord.gg/uS4nKznM" },
      ],
    },
  });
});
client.login({ clientId: "831473464061853706" }).catch(console.error);
