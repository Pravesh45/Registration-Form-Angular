import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import {uploadData} from '../user'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public url:any;
  public msg:string='';
  public size:number=0;
  public disableButton:boolean=true;

  public uploadData:uploadData=new uploadData('')

  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this.url=this._userService.getUploadData().url
    if(this.url)
    this.disableButton=false
  }

  selectFile(event:any) {
		if(!event.target.files[0] || event.target.files[0].length == 0) {
      this.url=''
      this.msg='Please select a file'
			return;
		}
		
    var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
      this.url=''
      this.msg='Invalid file(Only images allowed)'
			return;
    }
    
    this.size=(event.target.files[0].size)/(1024*1024);

    if(this.size>1)
    {
      this.url=''
      this.msg="File size should not be greater than 1MB"
      return;
    }
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
      this.url = reader.result
      this.uploadData.url=this.url
    }
    this.disableButton=false;
  }

  onClick()
  {
    this._userService.setUploadData(this.uploadData)
  }
}
