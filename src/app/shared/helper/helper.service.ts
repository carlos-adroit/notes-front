import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToasterComponent } from '../../components/toaster/toaster.component';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private snackBar: MatSnackBar
  ) { }


  /**
   * This is to show a toaster message anywhere in out app
   * @param message
   */
  createSnackBar(message: String) {
    this.snackBar.openFromComponent( ToasterComponent, {
      data: {
        message
      },
      duration: 3 * 1000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    })
  }
}
