import { getSpecificPlayer, ISContextMenu, IsoGridSquare, IsoPlayer, ISTimedActionQueue, sendClientCommand } from "PipeWrench"
import { onFillWorldObjectContextMenu } from "PipeWrench-Events"
import { TestAction } from "./TimedActions/TestAction"

function doTestAction(player: IsoPlayer, square: IsoGridSquare) {
    ISTimedActionQueue.add(TestAction(player, square))
}

function doSendPing(player: IsoPlayer) {
    player.Say("Sending command ping!")
    sendClientCommand("TestMod", "ping", {})
}

onFillWorldObjectContextMenu.addListener((playerNum: number, context: ISContextMenu, worldObjects: any, test: boolean) => {
    if (test) return

    const player = getSpecificPlayer(playerNum)

    if (player.getVehicle()) return

    context.addDebugOption("Do test action", player, doTestAction, player.getSquare())
    context.addDebugOption("Send ping to server", player, doSendPing)
})
