import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FileUploader } from "./file-uploader.component";
import { FileComponent } from "./file.component";
import { ButtonModule } from "@rocketsoftware/carbon-components-angular/button";
import { LoadingModule } from "@rocketsoftware/carbon-components-angular/loading";
import { IconModule } from "@rocketsoftware/carbon-components-angular/icon";

@NgModule({
	declarations: [FileUploader, FileComponent],
	exports: [FileUploader, FileComponent],
	imports: [
		CommonModule,
		ButtonModule,
		LoadingModule,
		IconModule
	]
})
export class FileUploaderModule { }
