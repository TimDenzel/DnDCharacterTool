import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DnD Character Tool';

  private serverUrl = 'http://127.0.0.1:5000'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) {
  }

  //TODO: Herausfinden, warum es bei neuladen der Seite den Server schließt
  /*@HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event: Event): void {
    let pageReloaded = window.performance
      .getEntriesByType('navigation')
      .map((nav) => (nav as any).type)
      .includes('reload');

    if(!pageReloaded) { // The pageReloaded boolean we set earlier
      // @ts-ignore
      let tabCount = parseInt(localStorage.getItem('tabCount'));
      --tabCount;
      if(tabCount <= 0) {
        this.serverShutdown();
      }
      localStorage.setItem('tabCount', tabCount.toString());

    }else{

    }
  }*/


  ngOnInit(): void {
    // @ts-ignore
    let tabCount = parseInt(localStorage.getItem(("windowCount")));

    tabCount = Number.isNaN(tabCount) ? 1 : ++tabCount;
    console.log(tabCount);
    localStorage.setItem('tabCount', tabCount.toString());
  }

  serverShutdown() {
    const url = `${this.serverUrl}/shutdown`;
    let response = this.http.get<String>(url).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.log("shutdown failed");
      }
    })
  }
}


