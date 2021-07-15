import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import axios from 'axios';
import { UserMdb } from 'src/app/models/UserMdb';
import {Router} from "@angular/router";
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  submitted = false;
  ChangeMdbForm: FormGroup;
  userNvMdb:UserMdb ={
  token:undefined,
    ancienmdb:undefined,
    nouveaumdb:undefined,
    repeter:undefined,
  };
  constructor(private router: Router) { }

  ngOnInit() {
    this.ChangeMdbForm = this.createFormGroup();
  }
  get f() { return this.ChangeMdbForm.controls; }
  createFormGroup(): FormGroup {
    return new FormGroup({
      ancienmdb: new FormControl("", [Validators.required, Validators.minLength(1)]),
      nouveaumdb: new FormControl("", [Validators.required, Validators.minLength(1),]),
      repeter: new FormControl("", [Validators.required, Validators.minLength(1),]),
     
    });
  }
  changerMdb(){
   
    this.submitted = true;
    if (this.ChangeMdbForm.invalid) {
    
  }
  this.userNvMdb.token = localStorage.getItem('token')
    this.userNvMdb.ancienmdb = this.ChangeMdbForm.value.ancienmdb
    this.userNvMdb.nouveaumdb = this.ChangeMdbForm.value.nouveaumdb
    this.userNvMdb.repeter = this.ChangeMdbForm.value.repeter
    if(this.userNvMdb.nouveaumdb != this.ChangeMdbForm.value.repeter){
      window.alert(" Mot de passe incorrect ")
    }
    axios.post('https://localhost:81/api/changePassword',this.userNvMdb,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} }).then((resp)=>{
   
      localStorage.setItem('user', resp.data.user.username);

      this.router.navigate(['/sport'])
    }).catch(err=>{
      window.alert(" Mot de passe incorrect ")
    })
}
}
