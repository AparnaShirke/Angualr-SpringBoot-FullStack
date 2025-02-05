import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { FormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component'
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { GlobalErrorHandlerService } from './services/global-error-handler.service'; 


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG, 
      serverLogLevel: NgxLoggerLevel.ERROR, 
      serverLoggingUrl: '/api/logs', 
      disableConsoleLogging: false,
      timestampFormat: 'short',
    }),
  ],
  providers: [
    { provide: ErrorHandler, 
      useClass: GlobalErrorHandlerService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
