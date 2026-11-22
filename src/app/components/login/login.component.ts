import { Component, inject } from "@angular/core";
import { LoginService } from "../../services/login.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
    username: string = "";
    password: string = "";
    loginService = inject(LoginService);

    login() {
        this.loginService.authenticate(this.username, this.password).subscribe((isAuthenticated) => {
            if (isAuthenticated) {
                console.log("Login successful!");
            } else {
                console.error("Login failed!");
            }
        });
    }
}