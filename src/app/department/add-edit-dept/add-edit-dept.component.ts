import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dept',
  templateUrl: './add-edit-dept.component.html',
  styleUrls: ['./add-edit-dept.component.css']
})
export class AddEditDeptComponent implements OnInit {

  constructor(private service: SharedService) { }
  
  @Input() dep: any;
  departmentID: string;
  departmentName: string;

  ngOnInit(): void {
    //debugger;
    this.departmentID = this.dep.departmentID;
    this.departmentName = this.dep.departmentName;
  }
  addDepartment() {
    var data = {
      departmentName: this.departmentName
    };
    this.service.addDept(data).subscribe(res => {
      alert(res["departmentName"] + " added successfully");
      this.departmentName="";
    });
  }

  updateDepartment() {
    debugger;
    var data = {
      departmentID: this.departmentID,
      departmentName: this.departmentName
    };
    this.service.updateDept(data).subscribe(res => {
      alert(res.toString());
    });

  }

}
