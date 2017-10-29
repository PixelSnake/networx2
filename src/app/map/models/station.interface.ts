import {Locatable} from './locatable.interface'
import {StationLabel} from './station-label.interface'

export interface Station extends Locatable {
  id?: number
  label: StationLabel

  selected?: boolean
}

