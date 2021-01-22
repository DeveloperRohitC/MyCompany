import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SharedService } from "src/app/shared.service";

@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrls: ['./show-dept.component.css']
})
export class ShowDeptComponent implements OnInit {

  constructor(private service: SharedService) { }

  departmentList: any = [];
  modalTitle: string = "";
  ActivateAddEditDepComp: boolean = false;
  dep: any;

  ngOnInit(): void {
    this.refreshDeptList();
  }

  addClick() {
    debugger;
    this.dep = {
      departmentID: 0,
      departmentName: ""
    }
    this.modalTitle = "Add Department";
    this.ActivateAddEditDepComp = true;
  }

  editClick(data) {
    this.dep = data;
    this.modalTitle = "Edit Department";
    this.ActivateAddEditDepComp = true;
  }

  closeClick() {
    this.ActivateAddEditDepComp = false;
    this.refreshDeptList();
  }

  refreshDeptList() {
    this.service.getDeptList().subscribe(data => {
      this.departmentList = data;
    });
  }
}
