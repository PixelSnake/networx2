import {Station} from "../../models/station.interface";

export interface Connection {
  id?: number
  start: Station
  end: Station
}
