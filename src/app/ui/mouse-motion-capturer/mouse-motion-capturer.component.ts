import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core'
import {Position} from '../../map/models/position.interface'

@Component({
  selector: 'app-mouse-motion-capturer',
  templateUrl: './mouse-motion-capturer.component.html',
  styleUrls: ['./mouse-motion-capturer.component.scss']
})
export class MouseMotionCapturerComponent implements OnInit {

  @Input()
  stopPropagation = false

  @Output()
  mouseMoved: EventEmitter<Position> = new EventEmitter<Position>()
  @Output()
  mouseDown: EventEmitter<Position> = new EventEmitter<Position>()
  @Output()
  mouseUp: EventEmitter<Position> = new EventEmitter<Position>()
  isMouseDown: boolean

  constructor() { }

  ngOnInit() {
  }

  get classes() {
    const classes = ['mouseMotionCapturer']
    if (this.isMouseDown) { classes.push('fullSize') }
    return classes.join(' ')
  }

  positionFromEvent(event): Position {
    return {
      x: event.movementX,
      y: event.movementY
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseup(event: MouseEvent) {
    this.isMouseDown = false
    this.mouseUp.emit(this.positionFromEvent(event))
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if (this.isMouseDown) {
      this.mouseMoved.emit(this.positionFromEvent(event))
    }
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {
    this.isMouseDown = true
    this.mouseDown.emit(this.positionFromEvent(event))
  }

}
