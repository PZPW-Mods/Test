import { getPlayer } from "PipeWrench"
import { onServerCommand } from "PipeWrench-Events"

onServerCommand.addListener((module, command, args) => {

    if (module != "TestModBasic") return

    if (command == "pong") {
        getPlayer().Say("Received command pong!")
    }

})
