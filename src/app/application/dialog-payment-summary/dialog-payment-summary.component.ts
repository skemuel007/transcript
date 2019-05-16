import {Component, Inject, OnInit} from '@angular/core';
import {PaymentService} from '../../_shared/services/payment.service';
import {ToastrService} from 'ngx-toastr';
import {MatDialogRef} from '@angular/material';
import {PaymentHistoryComponent} from '../payment-history/payment-history.component';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-dialog-payment-summary',
  templateUrl: './dialog-payment-summary.component.html',
  styleUrls: ['./dialog-payment-summary.component.sass']
})
export class DialogPaymentSummaryComponent implements OnInit {

  constructor(private paymentService: PaymentService,
              private toastr: ToastrService,
              private dialogRef: MatDialogRef<PaymentHistoryComponent>) { }

  ngOnInit() {
  }


  print() {


    let doc = new jsPDF('p', 'pt', 'a4');
    const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    const img = './../../assets/img/logo.png';

    doc.addImage(img, 'PNG', pageWidth / 2, 40, 170, 150);

    doc.setFontSize(40);
    doc.text('Bowen University', pageWidth / 2, 200);

    // add water mark to the page
    doc = this.addWaterMark(doc);
    // auto print: not works only in chrome, firefox and acrobat reader
    doc.autoPrint();
    doc.save(this.paymentService.form.get('name').value + '-receipt.pdf');
  }

  addWaterMark(doc) {

    // get total number of pages
    const totalPages = doc.internal.getNumberOfPages();
    const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    const imgData = './../../assets/img/logo.png';

    for (let i = 1; i < totalPages; i++) {
      doc.setPage(i);
      doc.addImage(imgData, 'PNG', pageWidth / 2, pageHeight / 2, 100, 100, 'BOWEN UNIVERSITY RECEIPT');
    }

    return doc;
  }

  close(): void {
    this.dialogRef.close(false);
  }

}
