import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientService } from 'src/app/services/http-client.service';

export interface Hobby {
  name: string;
}
@Component({
  selector: 'app-setting-profile',
  templateUrl: './setting-profile.component.html',
  styleUrls: ['./setting-profile.component.scss'],
})
export class SettingProfileComponent implements OnInit {
  form!: FormGroup;
   constructor(public httpSv: HttpClientService, public FormBuilder:FormBuilder) {
    this.form = this.FormBuilder.group({
      gioitinh: ['', Validators.required],
      noio:['',Validators.required],
      ngaysinh:['',Validators.required],
      sothich:['', Validators.required],
    

    });
  }
 

  ngOnInit(): void {}

  value = 'Clear all';
  value1 = 'Clear all';
  value2 = 'Clear all';
  value3 = 'Clear all';

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  hobbies: Hobby[] = [
    { name: 'Shopping' },
    { name: 'Football' },
    { name: 'Woman' },
  ];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.hobbies.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(hobby: Hobby): void {
    const index = this.hobbies.indexOf(hobby);

    if (index >= 0) {
      this.hobbies.splice(index, 1);
    }
  }
  // public gioitinh = '';
  // public noisong = '';
  // public ngaysinh = '';
  // public sothich = '';
  public async test() {
    let form = this.form.value;
    if (this.form.valid) {
      console.log(this.form.valid);
      alert(
       `gioitinh:${form.gioitinh}\n noio:${form.noio}\n ngaysinh:${form.ngaysinh}\n sothich:${form.sothich}\n}`
      );
    }
  }

}
