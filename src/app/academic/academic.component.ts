import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import {academicData} from '../user';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {

  public academicData:academicData=new academicData('','','',null,null,'','No','No','No',true)

  public hasError=0

  public years:number[]=Array(121).fill(0).map((x,i)=>i+1900)

  validateCGPA(value:number)
  {
      if(value==null)
      {
        this.hasError=1
        return;
      }

      if(value>10)
      {
        this.hasError=2;
        return;
      }

      this.hasError=0;
  }

  onClick()
  {
    this._userService.setAcademicData(this.academicData)
    console.log(this._userService.getAcademicData())
  }

  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this.academicData=this._userService.getAcademicData()
  }

}
