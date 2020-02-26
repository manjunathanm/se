import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ListComponent } from './component/list/list.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { FormModalComponent } from './shared/form-modal/form-modal.component'
import { SetCardSizeDirective } from './shared/directive/set-card-size.directive';
import { DetailComponent } from './component/detail/detail.component';
import { InfoModalComponent } from './shared/info-modal/info-modal.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    PageNotFoundComponent,
    FormModalComponent,
    SetCardSizeDirective,
    DetailComponent,
    InfoModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  entryComponents: [FormModalComponent, InfoModalComponent],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
