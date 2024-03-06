import { HomeComponent } from "./components/home/home";
import { TiendaComponent } from "./components/tienda/tienda";
import { ReservasComponent } from "./components/reservas/reservas";
import { ProductosComponent } from "./components/productos/productos";
import { EventosComponent } from "./components/eventos/eventos";
import { CategoriasComponent } from "./components/categorias/categorias";
import { RegistrosComponent } from "./components/registros/registro";
import { IndexComponent } from "./components/index/index";
import { LoginComponent } from "./components/login/login";
import { GaleriaComponent } from "./components/galeria/galeria";
import { AcercaDeComponent } from "./components/acerca de/acerca de";

export const appRoutes: any = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "tienda", component: TiendaComponent },
  { path: "eventos", component: EventosComponent },
  { path: "productos", component: ProductosComponent },
  { path: "reservas", component: ReservasComponent },
  { path: "categorias", component: CategoriasComponent },
  { path: "registros", component: RegistrosComponent },
  { path: "index", component: IndexComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "galeria", component: GaleriaComponent },
  { path: "acerca de", component: AcercaDeComponent },
];

export const appComponents: any = [
  HomeComponent,
  TiendaComponent,
  ReservasComponent,
  ProductosComponent,
  EventosComponent,
  CategoriasComponent,
  RegistrosComponent,
  IndexComponent,
  LoginComponent,
];
