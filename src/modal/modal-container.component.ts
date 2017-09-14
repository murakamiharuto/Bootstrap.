import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer
} from '@angular/core';
import {
  CLASS_NAME,
  DISMISS_REASONS,
  ModalOptions,
  TRANSITION_DURATIONS
} from './modal-options.class';
import { BsModalService } from './bs-modal.service';
import { isBs3 } from '../utils/theme-provider';

@Component({
  selector: 'modal-container',
  template: `
    <div [class]="'modal-dialog' + (config.class ? ' ' + config.class : '')" role="document">
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  host: {
    class: 'modal',
    role: 'dialog',
    tabindex: '-1'
  }
})
export class ModalContainerComponent implements OnInit, OnDestroy {
  config: ModalOptions;
  isShown = false;
  level: number;
  isAnimated: boolean;
  private isModalHiding = false;

  constructor(options: ModalOptions,
              protected _element: ElementRef,
              private bsModalService: BsModalService,
              private _renderer: Renderer) {
    this.config = Object.assign({}, options);
  }

  ngOnInit(): void {
    if (this.isAnimated) {
      this._renderer.setElementClass(
        this._element.nativeElement,
        CLASS_NAME.FADE,
        true
      );
    }
    this._renderer.setElementStyle(
      this._element.nativeElement,
      'display',
      'block'
    );
    setTimeout(() => {
      this.isShown = true;
      this._renderer.setElementClass(
        this._element.nativeElement,
        isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW,
        true
      );
    }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);
    if (document && document.body) {
      if (this.bsModalService.getModalsCount() === 1) {
        this.bsModalService.checkScrollbar();
        this.bsModalService.setScrollbar();
      }
      this._renderer.setElementClass(document.body, CLASS_NAME.OPEN, true);
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: any): void {
    if (
      this.config.ignoreBackdropClick ||
      this.config.backdrop === 'static' ||
      event.target !== this._element.nativeElement
    ) {
      return;
    }
    this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
    this.hide();
  }

  @HostListener('window:keydown.esc')
  onEsc(): void {
    if (
      this.config.keyboard &&
      this.level === this.bsModalService.getModalsCount()
    ) {
      this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);
      this.hide();
    }
  }

  ngOnDestroy(): void {
    if (this.isShown) {
      this.hide();
    }
  }

  hide(): void {
    if (this.isModalHiding || !this.isShown) {
      return;
    }
    this.isModalHiding = true;
    this._renderer.setElementClass(
      this._element.nativeElement,
      isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW,
      false
    );
    setTimeout(() => {
      this.isShown = false;
      if (
        document &&
        document.body &&
        this.bsModalService.getModalsCount() === 1
      ) {
        this._renderer.setElementClass(document.body, CLASS_NAME.OPEN, false);
      }
      this.bsModalService.hide(this.level);
      this.isModalHiding = false;
    }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
  }
}
