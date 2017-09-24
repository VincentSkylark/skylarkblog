import { NgModule } from '@angular/core';
import { MdInputModule, MdPaginatorModule } from '@angular/material';

@NgModule({
    imports: [
        MdInputModule,
        MdPaginatorModule

    ],
    exports: [
        MdInputModule,
        MdPaginatorModule

    ]
})

export class MaterialModules { }
