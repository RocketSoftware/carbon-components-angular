// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { CheckboxModule } from "@rocketsoftware/carbon-components-angular/checkbox";
import { ToggleModule } from "@rocketsoftware/carbon-components-angular/toggle";
import { RadioModule } from "@rocketsoftware/carbon-components-angular/radio";
import { InputModule } from "@rocketsoftware/carbon-components-angular/input";
import { ButtonModule } from "@rocketsoftware/carbon-components-angular/button";

@NgModule({
	exports: [
		CheckboxModule,
		ToggleModule,
		RadioModule,
		InputModule,
		ButtonModule
	],
	imports: [
		CommonModule,
		FormsModule,
		CheckboxModule,
		ToggleModule,
		RadioModule,
		InputModule,
		ButtonModule
	]
})
export class NFormsModule { }
