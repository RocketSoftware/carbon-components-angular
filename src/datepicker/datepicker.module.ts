import { DatePickerInputModule } from "@rocketsoftware/carbon-components-angular/datepicker-input";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePicker } from "./datepicker.component";
import { UtilsModule } from "@rocketsoftware/carbon-components-angular/utils";
import { I18nModule } from "@rocketsoftware/carbon-components-angular/i18n";

@NgModule({
	declarations: [
		DatePicker
	],
	exports: [
		DatePicker,
		DatePickerInputModule
	],
	imports: [
		CommonModule,
		DatePickerInputModule,
		UtilsModule,
		I18nModule
	]
})
export class DatePickerModule { }
