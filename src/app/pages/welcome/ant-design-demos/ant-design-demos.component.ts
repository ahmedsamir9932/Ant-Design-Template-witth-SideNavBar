import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ant-design-demos',
  templateUrl: './ant-design-demos.component.html',
  styleUrls: ['./ant-design-demos.component.scss']
})
export class AntDesignDemosComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
  }

  // for loading spinner with button
  isLoadingOne = false;
  isLoadingTwo = false;

  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);
  }

  loadTwo(): void {
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 5000);
  }




  // for date picker
  // date = null;
  // isEnglish = false;

  // onChange(result: Date): void {
  //   console.log('onChange: ', result?.toISOString().split('T')[0]);
  // }




  // for autocomplete
  inputValue?: string;
  filteredOptions: string[] = [];
  options = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
  constructor() {
    this.filteredOptions = this.options;
  }
  onChange(value: string): void {
    this.filteredOptions = this.options.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

}
