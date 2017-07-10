import {
	Component,
	OnInit,
	ElementRef,
	Input,
	HostListener,
	ContentChild
} from "@angular/core";
import { AbstractDropdownView } from "./../dropdown/abstract-dropdown-view.class";

@Component({
	selector: "n-dropdown-button",
	template: `
		<div class="combo-button-wrapper">
			<button
				role="button"
				class="combo-button"
				[ngStyle]="{
					height: open?null:'30px'
				}"
				(click)="toggleDropdown()">
				<svg
					class="icon"
					[ngClass]="{
						open: open
					}"
					width="16"
					height="16">
					<use xlink:href="#chevron_down_16"></use>
				</svg>
			</button>
		</div>
		<div class="dropdown-wrapper">
			<div
				class="dropdown-menu"
				style="position: relative;"
				[ngClass]="{
					open: open
				}">
				<ng-content></ng-content>
			</div>
		</div>
	`,
})
export class DropdownButton {
	private dropdown;
	@Input() open = false;
	@ContentChild(AbstractDropdownView) view: AbstractDropdownView;

	constructor(private _elementRef: ElementRef) {}

	ngAfterViewInit() {
		this.dropdown = this._elementRef.nativeElement.querySelector(".dropdown-menu");
		document.addEventListener("click", (ev) => {
			if (!this._elementRef.nativeElement.contains(ev.target)) {
				// this.open = false;
			}
		});
	}

	@HostListener("keydown", ["$event"])
	private keyDown(ev: KeyboardEvent) {
		if (ev.key === "Tab") {
			this.open = false;
		}
		if (ev.key === "ArrowDown" && !this.dropdown.contains(ev.target)) {
			ev.stopImmediatePropagation();
			this.view.getCurrentElement().focus();
		}
	}

	public toggleDropdown() {
		this.open = !this.open;
	}
}