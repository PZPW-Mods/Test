import { EventEmitter } from 'PipeWrench-Events'

// Define/Export a listener type
export type MusicTrackUpdateListener = (
    track: string,
    volume: number
) => void

// Create/Export the event
export const MusicTrackUpdateEvent = new EventEmitter<MusicTrackUpdateListener>('MusicTrackUpdate')
