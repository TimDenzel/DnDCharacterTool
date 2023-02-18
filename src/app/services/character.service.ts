import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";

import {Character} from "../interfaces/character";
import {MessageService} from "./message.service";

@Injectable({providedIn: 'root'})

export class CharacterService {

  private charactersUrl = 'https://localhost:5000'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {  }

  getCharacter(id: number): Observable<Character> {
    const url = `${this.charactersUrl}/character?id=${id}`;
    return this.http.get<Character>(url).pipe(
      tap(_ => this.log(`fetched character id=${id}`)),
      catchError(this.handleError<Character>(`getCharacter id=${id}`))
    );
  }

  /** GET characters form the server */
  getCharacters(): Observable<Character[]> {

    return this.http.get<Character[]>(`${this.charactersUrl}/characters?name=`)
      .pipe(
        tap(_ => this.log('CharacterService: fetched characters')),
        catchError(this.handleError<Character[]>('getCharacters', []))
      );
  }

  /* GET characters whose name contains search term */
  searchCharacters(term: string): Observable<Character[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Character[]>(`${this.charactersUrl}/characters?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found characters matching "${term}"`) :
        this.log(`no characters matching "${term}"`)),
      catchError(this.handleError<Character[]>('searchCharacters', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new character to the server */
  addCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(`${this.charactersUrl}/character`, character, this.httpOptions).pipe(
      tap((newCharacter: Character) => this.log(`added character w/ id=${newCharacter.id}`)),
      catchError(this.handleError<Character>('addCharacter'))
    );
  }

  /** PUT: update the chracter on the server */
  updateCharacter(character: Character): Observable<any> {
    return this.http.put(`${this.charactersUrl}/character?id=${character.id}`, character, this.httpOptions).pipe(
      tap(_ => this.log(`updated character id=${character.id}`)),
      catchError(this.handleError<any>('updateCharacter'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteCharacter(id: number): Observable<Character> {
    const url = `${this.charactersUrl}/character?id=${id}`;

    return this.http.delete<Character>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted character id=${id}`)),
      catchError(this.handleError<Character>('deleteCharacter'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  /** Log a CharcterService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CharacterService: ${message}`)
  }
}
