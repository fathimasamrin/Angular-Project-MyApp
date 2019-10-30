import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl='http://localhost:8383/employeeRestApi/api';

  constructor(private http:HttpClient) {  }

    getEmployee(id:number):Observable<any>{
      return this.http.get(this.baseUrl+'/employeebyid/'+id);
      
    }

    getEmployeesList():Observable<any>
    {
      return this.http.get(this.baseUrl+'/employeedetails');
    }

    CreateEmployee(employee:Object):Observable<Object>
    {
        return this.http.post(this.baseUrl+'/insertemployee',employee);
    }

    updateEmployee(id:number,employee:Employee):Observable<any>
    {
      return this.http.put(this.baseUrl+'/updateemployeebyid/'+id,employee);
    }

    deleteEmployee(id:number,employee:Employee):Observable<any>
    {
      return this.http.put(this.baseUrl+'/disableemployee/'+id,employee);
    }
}
