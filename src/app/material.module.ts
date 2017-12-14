import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
      MatInputModule,
      MatPaginatorModule

    ],
    exports: [
      MatInputModule,
      MatPaginatorModule

    ]
})

export class MaterialModules { }
