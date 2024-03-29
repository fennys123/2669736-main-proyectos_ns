import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router";
import { ApiService } from './api.service';
import { ItemEventData } from "@nativescript/core/ui/list-view";
import { Dialogs } from '@nativescript/core'
@Component({
    selector: 'ns-registro',
    templateUrl: './registro.html',
    styleUrls: ['./registro.css']
})
export class RegistrosComponent {
    registro: any[];
    nombre: string;
    email: string;
    password: string;
    fechaNacimiento: Date;
    telefono: string;
    mayorEdad: boolean;
    registros: any[];

    public constructor(private router: Router, private apiService: ApiService) {
        // Use the component constructor to inject providers.
        this.obtenerTodos();
    }

    public obtenerTodos() {
        this.apiService.getRegisters().subscribe((data: any[]) => {
            //console.log(data);
            this.registros = data;
        });
    }

    onItemTap(args: ItemEventData) {
        let register = this.registros[args.index]
        //console.log(`Index: ${args.index}; Item: ${register.id}`);
        //console.log(`ID: ${register.id} - NOMBRE: ${register.nombre_cat} - DESCRCIPCIÓN: ${register.desc} `)

        //Consultar por ID en la API
        this.apiService.getRegisterById(register.id).subscribe((res) => {
            Dialogs.alert({
                title: 'Detalles!',
                message: `ID: ${res.id}\nNOMBRE: ${res.nombre_cat}\nDESCRCIPCIÓN: ${res.desc} `,
                okButtonText: 'OK',
                cancelable: true,
            });
            console.info(res)
        });
    }

    public eliminarCat(item) {
        Dialogs.confirm({
            title: 'Confirmación',
            message: 'Está seguro de eliminar este registro ?',
            okButtonText: 'SI',
            cancelButtonText: 'No',
            neutralButtonText: 'Cancelar',
        })
            .then((result) => {
                console.log(result);
                if (result) {
                    this.apiService.deleteRegister(item.id).subscribe((res: string) => {
                        Dialogs.alert({
                            title: 'Respuesta:',
                            message: "Categoría eliminada correctamente!!",
                            okButtonText: 'OK',
                            cancelable: true,
                        });
                        this.obtenerTodos();
                    }, error => {
                        console.log(error.status)
                        if (error.status == 400) {
                            Dialogs.alert({
                                title: 'Respuesta:',
                                message: error.error.message,
                                okButtonText: 'OK',
                                cancelable: true,
                            });
                        }
                        else {
                            Dialogs.alert({
                                title: 'Respuesta:',
                                message: error.message,
                                okButtonText: 'OK',
                                cancelable: true,
                            });
                        }

                    });
                }
            });

    }

    public editarCat(item) {
        console.log(`Editar cat: ${item.id}`)
        this.router.navigate(['categorias-editar'], { queryParams: { id: item.id } });
    }

    onRegistro(): void {
        this.router.navigate(["/index"]);
    }

    onLogin(): void {
        this.router.navigate(["/login"]);
    }
}