import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { I18nModule } from "@rocketsoftware/carbon-components-angular/i18n";
import { IconModule } from "@rocketsoftware/carbon-components-angular/icon";

import { Header } from "./header.component";
import { HeaderItem } from "./header-item.component";
import { HeaderMenu } from "./header-menu.component";
import { HeaderNavigation } from "./header-navigation.component";
import { HeaderGlobal } from "./header-global.component";
import { HeaderAction } from "./header-action.component";

import { Hamburger } from "./hamburger.component";
import { RouterModule } from "@angular/router";

export { HeaderItemInterface, NavigationItem } from "./header-navigation-items.interface";

export {
	Header,
	HeaderItem,
	HeaderMenu,
	HeaderNavigation,
	HeaderGlobal,
	HeaderAction,
	Hamburger
};

@NgModule({
	declarations: [
		Header,
		HeaderItem,
		HeaderMenu,
		HeaderNavigation,
		HeaderGlobal,
		HeaderAction,
		Hamburger
	],
	imports: [
		CommonModule,
		I18nModule,
		IconModule,
		RouterModule
	],
	exports: [
		Header,
		HeaderItem,
		HeaderMenu,
		HeaderNavigation,
		HeaderGlobal,
		HeaderAction,
		Hamburger
	]
})
export class HeaderModule { }
