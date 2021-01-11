import { Injectable } from '@angular/core';
import {personalData,academicData,workData,uploadData} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData:personalData=new personalData('','','','','',null,'','','','','','',null)

  private academicData:academicData=new academicData('','','',null,null,'','No','No','No',true)

  private workData:workData=new workData('',null,'',null,null,'','','','','','',null)

  private uploadData:uploadData=new uploadData('')

  constructor() { }

  getUserData()
  {
    return this.userData;
  }

  setUserData(obj:personalData)
  {
    this.userData=obj;
  }

  getAcademicData()
  {
    return this.academicData
  }

  setAcademicData(obj:academicData)
  {
    this.academicData=obj
  }

  getWorkData()
  {
    return this.workData
  }

  setWorkData(obj:workData)
  {
    this.workData=obj
  }

  getUploadData()
  {
    return this.uploadData
  }

  setUploadData(obj:uploadData)
  {
    this.uploadData=obj
  }
}
