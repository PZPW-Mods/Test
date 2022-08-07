import { LuaEventManager, triggerEvent } from 'PipeWrench'
import { EventEmitter } from 'PipeWrench-Events'

// Define/Export a listener type
export type MusicTrackUpdateListener = (
    track: string,
    volume: number
) => void

// Create/Export the event
export const MusicTrackUpdateEvent = new EventEmitter<MusicTrackUpdateListener>('MusicTrackUpdate')

// Add the event to Lua Event Manager
LuaEventManager.AddEvent(MusicTrackUpdateEvent.id)

// Create an event listener
const onMusicTrackUpdate: MusicTrackUpdateListener = (track, volume) => {
    print(`Playing Track: ${track} (Volume: ${volume})`)
}

// Add event listener
MusicTrackUpdateEvent.addListener(onMusicTrackUpdate)

// Trigger the event
triggerEvent(MusicTrackUpdateEvent.id, "track01", 1.0)

// Remove event listener
MusicTrackUpdateEvent.removeListener(onMusicTrackUpdate)
