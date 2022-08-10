import { Server } from "../../../shared/test/ModCommands";

Server.Commands.ping = (player, args) => {
    print(`Received ping from ${player.getUsername()} client!`)
    Server.SendTo(player, "pong", {})
}
