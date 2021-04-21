import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BookmarksPage } from "./pages/bookmarks/bookmarks.page";
import { HomePage } from "./pages/home/container/home/home.page";


const routes: Routes = [
    { path: '', component: HomePage},
    { path:'bookmark',component:BookmarksPage}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}