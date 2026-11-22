import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, map, Observable, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private http = inject(HttpClient);

  authenticate(username: string, password: string): Observable<boolean> {
    return this.http.post("/auth/api/authenticate", { username, password }).pipe(
      tap((response) => console.log("Authentication successful:", response)),
      map(() => true),
      catchError((error) => {
        console.error("Authentication failed:", error);
        return of(false);
      })
    );
  }
}
