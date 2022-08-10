import { isClient, IsoPlayer, isServer, KahluaTable, sendClientCommand, sendServerCommand, triggerEvent } from "PipeWrench"
import { onClientCommand, onServerCommand } from "PipeWrench-Events"

type ClientCommand = (player: IsoPlayer, ...args: any[]) => void
type ServerCommand = (...args: any[]) => void

const CommandModule = "MyModID"

export class Client {
    static readonly Commands: {[command: string]: ServerCommand} = {}

    /** @noSelf */
    static Send(command: string, args: KahluaTable) {
        sendClientCommand(CommandModule, command, args)
    }
}

onServerCommand.addListener((module, command, args) => {
    if (module !== CommandModule) return
    if (Client.Commands[command]) {
        Client.Commands[command](args)
    }
})

export class Server {
    static readonly Module = "TestModAdvanced"
    static readonly Commands: {[command: string]: ClientCommand} = {}

    /** @noSelf */
    static SendTo(targetPlayer: IsoPlayer, command: string, args: KahluaTable) {
        if (!isClient() && !isServer()) {
            triggerEvent("OnServerCommand", CommandModule, command, args)
        }
        else {
            sendServerCommand(CommandModule, command, targetPlayer, args)
        }
    }

    /** @noSelf */
    static SendAll(command: string, args: KahluaTable) {
        if (!isClient() && !isServer()) {
            triggerEvent("OnServerCommand", CommandModule, command, args)
        }
        else {
            sendServerCommand(CommandModule, command, args)
        }
    }
}

onClientCommand.addListener((module, command, player, args) => {
    if (module !== CommandModule) return
    if (Server.Commands[command]) {
        Server.Commands[command](player, args)
    }
})
