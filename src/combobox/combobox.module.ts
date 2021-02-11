import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComboBox } from "./combobox.component";
import { DropdownModule, DropdownService } from "@rocketsoftware/carbon-components-angular/dropdown";
import { I18nModule } from "@rocketsoftware/carbon-components-angular/i18n";
import { UtilsModule } from "@rocketsoftware/carbon-components-angular/utils";
import { IconModule } from "@rocketsoftware/carbon-components-angular/icon";

@NgModule({
	declarations: [
		ComboBox
	],
	exports: [
		ComboBox,
		DropdownModule
	],
	imports: [
		CommonModule,
		DropdownModule,
		I18nModule,
		UtilsModule,
		IconModule
	],
	providers: [ DropdownService ]
})
export class ComboBoxModule {}
