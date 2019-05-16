import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthenticationService} from '../../_shared/services/authentication.service';
import {PaymentService} from '../../_shared/services/payment.service';
import {Title} from '@angular/platform-browser';
import {filter, map, mergeMap} from 'rxjs/operators';
import {DialogPaymentSummaryComponent} from '../dialog-payment-summary/dialog-payment-summary.component';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.sass']
})
export class PaymentHistoryComponent implements OnInit {
  // loading property
  tableLoading = false;

  tableMessage = '';
  tableError = false;

  searchKey: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  paymentData: MatTableDataSource<any>;
  displayColumns: string[] = ['name', 'mat_no', 'amount', 'status', 'paymenttype', 'txRef', 'dest', 'orderStatus', 'date', 'actions'];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private authService: AuthenticationService,
              private titleService: Title,
              private paymentService: PaymentService,
              private dialog: MatDialog) {
    this.setTitle();
  }

  ngOnInit() {
    this.getPaymentRecord();
  }

  setTitle() {
    this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route: any) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route: any) => route.data)).subscribe((event) => {
          this.titleService.setTitle(event['title']);
    });
  }

  getPaymentRecord() {
    this.tableLoading = true;
    this.tableMessage = `No Data!`;

    this.paymentData = null;

    this.paymentService.getPayments()
        .subscribe(
            (result): any => {
              this.paymentData = new MatTableDataSource<any>(result);
              this.paymentData.sort = this.sort;
              this.paymentData.paginator = this.paginator;
              this.paymentData.filterPredicate = (data, filteredData) => {
                return this.displayColumns.some( ele => {
                  return ele !== 'actions' && data[ele].toLowerCase().indexOf(filteredData) !== -1;
                });
              };

              this.tableLoading = false;
            },
            (error) => {
              this.tableLoading = false;
              this.paymentData = new MatTableDataSource([]);
              if ( error.status === undefined) {
                this.tableError = true;
                this.tableMessage = `Check your network connection and then click the 'Refresh' button to load data again!`;
                this.toastr.error('Error connecting to server', 'Network connection error');
              } else {
                this.tableError = false;
                this.tableMessage = `No data!`;
                this.toastr.error('Error: ' + error.message, 'Error');
              }
            }
        );
  }

  preview(row) {
    console.log(row);

    const rowData = {
      id: row.id,
      name: row.name,
      mat_no: row.mat_no,
      apptype: row.apptype,
      amount: row.amount,
      status: row.status,
      paymenttype: row.paymenttype,
      txRef: row.txRef,
      dest: row.dest,
      orderStatus: row.orderStatus,
      date: row.date
    };

    this.paymentService.populateForm(rowData);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    const dialogRef = this.dialog.open(DialogPaymentSummaryComponent, dialogConfig);

    dialogRef.afterClosed().subscribe( result => {
      const data: boolean = result;
    });

  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  isKeyEmpty(): boolean {
    return this.searchKey === '' || this.searchKey === null ? true : false;
  }

  applyFilter() {
    this.paymentData.filter = this.searchKey.trim().toLowerCase();
  }

}
