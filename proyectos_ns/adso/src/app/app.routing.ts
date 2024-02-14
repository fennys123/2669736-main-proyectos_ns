import { HomeComponent } from "./components/home/home";
import { TiendaComponent } from "./components/tienda/tienda";
import { ReservasComponent } from "./components/reservas/reservas";
import { ProductosComponent } from "./components/productos/productos";
import { EventosComponent } from "./components/eventos/eventos";
import { CategoriasComponent } from "./components/categorias/categorias";
import { RegistrosComponent } from "./components/registros/registro";

export const appRoutes: any = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "tienda", component: TiendaComponent },
  { path: "eventos", component: EventosComponent },
  { path: "productos", component: ProductosComponent },
  { path: "reservas", component: ReservasComponent },
  { path: "categorias", component: CategoriasComponent },
  { path: "registros", component: RegistrosComponent },
];

export const appComponents: any = [
  HomeComponent,
  TiendaComponent,
  ReservasComponent,
  ProductosComponent,
  EventosComponent,
  CategoriasComponent,
  RegistrosComponent,
];
