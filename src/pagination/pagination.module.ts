import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { Pagination } from "./pagination.component";
import { I18nModule } from "@rocketsoftware/carbon-components-angular/i18n";
import { ExperimentalModule } from "@rocketsoftware/carbon-components-angular/experimental";
import { PaginationNav } from "./pagination-nav/pagination-nav.component";
import { PaginationNavItem } from "./pagination-nav/pagination-item.component";
import { PaginationOverflow } from "./pagination-nav/pagination-overflow.component";
import { IconModule } from "@rocketsoftware/carbon-components-angular/icon";

@NgModule({
	declarations: [
		Pagination,
		PaginationNav,
		PaginationNavItem,
		PaginationOverflow
	],
	exports: [
		Pagination,
		PaginationNav,
		PaginationNavItem,
		PaginationOverflow
	],
	imports: [
		CommonModule,
		FormsModule,
		I18nModule,
		ExperimentalModule,
		IconModule
	]
})
export class PaginationModule {}
