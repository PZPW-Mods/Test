import { MusicTrackUpdateListener, MusicTrackUpdateEvent } from "./CustomEvents/OnCustomEvent"

// Create an event listener
const onMusicTrackUpdate: MusicTrackUpdateListener = (track, volume) => {
    print(`Playing Track: ${track} (Volume: ${volume})`)
}

// Add event listener
MusicTrackUpdateEvent.addListener(onMusicTrackUpdate)

// Trigger the event
MusicTrackUpdateEvent.trigger("track01", 1.0)

// Remove event listener
MusicTrackUpdateEvent.removeListener(onMusicTrackUpdate)
