import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimePickerSelect } from "./timepicker-select.component";
import { SelectModule } from "@rocketsoftware/carbon-components-angular/select";
import { IconModule } from "@rocketsoftware/carbon-components-angular/icon";

@NgModule({
	declarations: [
		TimePickerSelect
	],
	exports: [
		TimePickerSelect
	],
	imports: [
		SelectModule,
		CommonModule,
		IconModule
	]
})
export class TimePickerSelectModule { }
