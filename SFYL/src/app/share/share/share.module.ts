import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { SideBarComponent } from 'src/app/components/side-bar/side-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { DialogLoginComponent } from 'src/app/components/dialog-login/dialog-login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DialogRegisterComponent } from '../../components/dialog-register/dialog-register.component';
import { CheckEmailComponent } from 'src/app/components/check-email/check-email.component';
import { UserChatComponent } from 'src/app/components/user-chat/user-chat.component';
import { SigninSuccessComponent } from 'src/app/components/signin-success/signin-success.component';
import { DialogDeleteAccComponent } from '../../components/dialog-delete-acc/dialog-delete-acc.component';
import { DialogLogoutComponent } from '../../components/dialog-logout/dialog-logout.component';
import { RecoverAccountComponent } from 'src/app/components/recover-account/recover-account.component';
import { RoomChatComponent } from 'src/app/components/room-chat/room-chat.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    DialogLoginComponent,
    DialogRegisterComponent,
    CheckEmailComponent,
    SigninSuccessComponent,
    DialogDeleteAccComponent,
    DialogLogoutComponent,
    RecoverAccountComponent,
    UserChatComponent,
    RoomChatComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTooltipModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    PickerModule,
    MatAutocompleteModule
  ],
  exports: [
    UserChatComponent,
    ReactiveFormsModule,
    NavBarComponent,
    DialogRegisterComponent,
    SideBarComponent,
    CheckEmailComponent,
    SigninSuccessComponent,
    DialogDeleteAccComponent,
    DialogLogoutComponent,
    RecoverAccountComponent,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    RoomChatComponent,
    MatAutocompleteModule
  ],
})
export class ShareModule {}
