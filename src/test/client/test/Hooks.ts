import { ISTakePillAction, IsoPlayer, InventoryItem } from "PipeWrench"
import { hook } from "PipeWrench-Utils"

// Hook into ISTakePillAction:new
if (hook.into("ISTakePillAction", "new", (_new: Function, self: ISTakePillAction, character: IsoPlayer, item: InventoryItem, time: number) => {
    const obj = _new(self, character, item, time) as ISTakePillAction

    obj.maxTime = 300 // change action properties here

    return obj
})) {
    print("Hooked into ISTakePillAction:new successfuly")
}

// Hook into ISTakePillAction:perform
if (hook.into("ISTakePillAction", "perform", (_perform: Function, self: ISTakePillAction) => {
    const player = self.character as IsoPlayer
    const item = self.item as InventoryItem

    player.Say(`I took a ${item.getDisplayName()}!`)

    return _perform(self)
})) {
    print("Hooked into ISTakePillAction:perform successfuly")
}
