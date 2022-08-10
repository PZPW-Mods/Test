import { isClient, isServer, sendServerCommand, triggerEvent } from "PipeWrench"
import { onClientCommand } from "PipeWrench-Events"

onClientCommand.addListener((module, command, player, args) => {

    if (isClient()) return; // dont execute on clients

    if (module != "TestModBasic") return

    if (command == "ping") {
        print("Server received command ping!")

        if (isServer()) sendServerCommand(player, "TestModBasic", "pong", args) // send normally if server
        else triggerEvent("OnServerCommand", "TestModBasic", "pong", args) // send hack for single-player
    }

})