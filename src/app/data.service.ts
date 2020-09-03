import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {id: 1, name: "João da Silva", description: "Cliente Vip", email: "c001@email.com"},
    {id: 2, name: "Maria das Dores", description: "Entrou em contato pelo app", email: "c002@email.com"},
    {id: 3, name: "Pedro Pedreira", description: "Pediu cancelamento", email: "c003@email.com"},
    {id: 4, name: "Morgana Adams", description: "Deseja comprar uma casa", email: "c004@email.com"}
    ];
    

  constructor(private http: HttpClient) { }

  public getContacts():Observable<any>{
    return this.http.get("http://localhost:8080/contact");
  }

  public createContact(contact: {id, name, description, email}) : Observable<any>{
    return this.http.post("http://localhost:8080/contact", contact);
  }
}
