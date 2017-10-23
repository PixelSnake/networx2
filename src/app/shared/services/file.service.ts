import { Injectable } from '@angular/core'
import {Subject} from "rxjs/Subject";
import {File} from "../models/file.interface";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class FileService {

  files: File[] = [
    {
      filename: null,
      changed: false
    }
  ]
  files$: Subject<File[]> = new BehaviorSubject(this.files)

  constructor() {
  }

  openFile(filename: string) {
    this.files.push({
      filename: filename, // todo load it
      changed: false
    })
    this.files$.next(this.files)
  }

  closeFile(f: File) {
    this.files.slice(this.files.indexOf(f), 1)
    this.files$.next(this.files)
  }

}
