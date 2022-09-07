import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('datepickerFooter', { static: false })
  datepickerFooter!: ElementRef;
  @ViewChild('datepickerFooter1', { static: false })
  datepickerFooter1!: ElementRef;
  @ViewChild('picker', { static: false })
  picker!: MatDatepicker<any>;
  startDate: Date | null = null;
  endDate: Date | null = null;
  selectedValue: Date | null = null;
  name = 'Angular ' + VERSION.major;

  today() {
    this.startDate = new Date();
    this.endDate = new Date();
    this.picker.close();
  }
  yestarday() {
    let today = new Date();
    this.startDate = new Date(today.setDate(today.getDate() - 1));
    this.endDate = new Date();
    this.picker.close();
  }
  lmonth() {
    let today = new Date();
    let lastmonthstart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    let lastmonthend = new Date(today.getFullYear(), today.getMonth(), 0);
    this.startDate = lastmonthstart;
    this.endDate = lastmonthend;
    this.picker.close();
  }
  thismonth() {
    let today = new Date();
    let currentmonthstart = new Date(today.getFullYear(), today.getMonth(), 1);
    let currentmonthend = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    );
    this.startDate = currentmonthstart;
    this.endDate = currentmonthend;
    this.picker.close();
  }
  last_7_days() {
    let today = new Date();
    this.startDate = new Date(today.setDate(today.getDate() - 7));
    this.endDate = new Date();
    this.picker.close();
  }
  onOpen() {
    this.appendFooter();
  }
  cancel() {
    this.picker.close();
  }
  private appendFooter() {
    const matCalendar = document.getElementsByClassName(
      'mat-datepicker-content'
    )[0] as HTMLElement;
    matCalendar.appendChild(this.datepickerFooter.nativeElement);
    matCalendar.appendChild(this.datepickerFooter1.nativeElement);
  }
  submit() {}
}
