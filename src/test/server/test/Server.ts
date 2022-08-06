import { isClient, isServer, sendServerCommand, triggerEvent } from "PipeWrench"
import { onClientCommand } from "PipeWrench-Events"

onClientCommand.addListener((module, command, player, args) => {

    if (isClient()) return; // dont execute on clients

    if (module != "TestMod") return

    if (command == "ping") {
        print("Server received command ping!")

        if (isServer()) sendServerCommand(player, "TestMod", "pong", args) // send normally if server
        else triggerEvent("OnServerCommand", "TestMod", "pong", args) // send hack for single-player
    }

})