import {Locatable} from './locatable.interface'
import {StationLabel} from './station-label.interface'

export interface Station extends Locatable {
  label: StationLabel
}

