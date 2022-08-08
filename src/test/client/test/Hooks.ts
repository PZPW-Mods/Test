import { ISTakePillAction, IsoPlayer, InventoryItem } from "PipeWrench"
import { hookInto } from "PipeWrench-Utils"

// Hook into ISTakePillAction:new
hookInto("ISTakePillAction:new", (_new: Function, self: ISTakePillAction, character: IsoPlayer, item: InventoryItem, time: number) => {
    const obj = _new(self, character, item, time) as ISTakePillAction

    obj.maxTime = 300 // change action properties here

    return obj
})

// Hook into ISTakePillAction:perform
hookInto("ISTakePillAction:perform", (_perform: Function, self: ISTakePillAction) => {
    const player = self.character as IsoPlayer
    const item = self.item as InventoryItem

    player.Say(`I took a ${item.getDisplayName()}!`)

    return _perform(self)
})
