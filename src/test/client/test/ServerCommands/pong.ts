import { Client } from "../../../shared/test/ModCommands";

Client.Commands.pong = () => {
    print(`Received pong from server!`)
}
