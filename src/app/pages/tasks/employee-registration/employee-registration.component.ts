import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent {

  currentTab: string = 'Basic';
  cityList: string [] = ["Pune","Nagpur","Solapur"];
  identityProofList: string [] = ["Aadhar Card","Driving Licence","Pan Card"];
  employeeObj: any = {
    fname:'',
    mName: '',
    lName:'',
    fullName: '',
    city:'',
    empId: '',
    otherCity: '',
    pinCode: '',
    contactNo:'',
    altContactNo: '',
    email: '',
    isWorking: false,
    workEmail:'',
    identityType: '',
    otherIdentityType: '',
    identityNo: ''
  }

  generateFullName() {
    this.employeeObj.fullName = this.employeeObj.fname + ' '+ this.employeeObj.mName + ' '+ this.employeeObj.lName;
    this.employeeObj.empId = "EMP-" +this.employeeObj.fname.toUpperCase()+'-' + new Date().getMonth();
  }
  checkPinCode() {
    if(this.employeeObj.pinCode != '' && this.employeeObj.pinCode.length !== 6) {
      return true;
    } else {
      return false;
    }
  }
}
