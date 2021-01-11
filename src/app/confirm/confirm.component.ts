import { personalData, academicData, workData, uploadData } from './../user';
import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  public personalData:any;
  public academicData:any;
  public workData:any;
  public uploadData:any

  constructor(private _userService:UserService) { }

  public personalKey:string[]=['url','lastName']

  ngOnInit(): void {
      this.personalData=this._userService.getUserData()
      this.academicData=this._userService.getAcademicData()
      this.workData=this._userService.getWorkData()
      this.uploadData=this._userService.getUploadData()
  }
}
