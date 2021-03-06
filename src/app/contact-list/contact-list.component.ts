import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts;
  selectedContact;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getContacts().subscribe(resultado => {this.contacts = resultado});
  }
  public selectContact(contact) {
    this.selectedContact = contact;
  }

}
