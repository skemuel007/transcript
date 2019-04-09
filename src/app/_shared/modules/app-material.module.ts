import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatInputModule, MatPaginatorModule, MatSortModule,
    MatButtonModule, MatFormFieldModule, MatIconModule, MatTooltipModule,
    MatListModule, MatBadgeModule, MatExpansionModule, MatTabsModule,
    MatSelectModule, MatDatepickerModule, MatTableModule, MatProgressBarModule,
    MatCheckboxModule, MatRadioModule, MatCardModule
} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatInputModule, MatPaginatorModule, MatSortModule, MatCardModule,
        MatButtonModule, MatFormFieldModule, MatIconModule, MatTooltipModule,
        MatListModule, MatBadgeModule, MatExpansionModule, MatTabsModule,
        MatSelectModule, MatDatepickerModule, MatTableModule, MatProgressBarModule,
        MatCheckboxModule, MatRadioModule
    ],
    exports: [
        MatInputModule, MatPaginatorModule, MatSortModule, MatCardModule,
        MatButtonModule, MatFormFieldModule, MatIconModule, MatTooltipModule,
        MatListModule, MatBadgeModule, MatExpansionModule, MatTabsModule,
        MatSelectModule, MatDatepickerModule, MatTableModule, MatProgressBarModule,
        MatCheckboxModule, MatRadioModule
    ],
    providers: [ MatDatepickerModule ]
})

export class AppMaterialModule {

}
