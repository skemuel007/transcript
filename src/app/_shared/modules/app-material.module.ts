import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatInputModule, MatPaginatorModule, MatSortModule,
    MatButtonModule, MatFormFieldModule, MatIconModule, MatToolTipModule,
    MatListModule, MatBadgeModule, MatExpansionModule, MatTabsModule,
    MatSelectModule, MatDatepickerModule, MatTableModule, MatProgressBarModule,
    MatCheckboxModule, MatRadioModule } from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatInputModule, MatPaginatorModule, MatSortModule,
        MatButtonModule, MatFormFieldModule, MatIconModule, MatToolTipModule,
        MatListModule, MatBadgeModule, MatExpansionModule, MatTabsModule,
        MatSelectModule, MatDatepickerModule, MatTableModule, MatProgressBarModule,
        MatCheckboxModule, MatRadioModule
    ],
    exports: [
        MatInputModule, MatPaginatorModule, MatSortModule,
        MatButtonModule, MatFormFieldModule, MatIconModule, MatToolTipModule,
        MatListModule, MatBadgeModule, MatExpansionModule, MatTabsModule,
        MatSelectModule, MatDatepickerModule, MatTableModule, MatProgressBarModule,
        MatCheckboxModule, MatRadioModule
    ],
    providers: [ MatDatepickerModule ]
})

export class AppMaterialModule {

}
