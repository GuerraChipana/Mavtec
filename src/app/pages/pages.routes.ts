import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home";
import { NosotrosComponent } from "./nosotros/nosotros";
import { CategoriasComponent } from "./categorias/categorias";
import { Contactanos } from "./contactanos/contactanos";


export const PAGES_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component:NosotrosComponent  },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'contactanos', component: Contactanos }
];
