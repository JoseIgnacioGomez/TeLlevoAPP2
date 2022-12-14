import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'; // envia informacion
import { ToastController } from '@ionic/angular'; // Ventanas emergentes
import { AlumnosDataService } from '../services/alumnos-data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	user = {}
	usuario = ''
	password = ''
	buscarAlumno
	field = ''
	alumnos = []
	constructor(
		private router: Router,
		public toastController: ToastController,
		private alumnosService: AlumnosDataService
	) {}
  ngOnInit() {
		// Cuando este componente carge por primera vez se ejecutara esto ⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊
		// Tomos los datos de la API, los recorro y los guardo en la varible alumnos
		// donde alumnos es una lista que almacena muchos objetos (alumnos)
    this.alumnosService.getAlumnos().subscribe((resp) => {
			Object.values(resp).forEach((alumno) => {
				this.alumnos.push(...alumno)
				console.log(this.alumnos)
			})
		})
	}
  

  // Ingresar
  ingresar() {
		if (this.validarAlumno(this.usuario, this.password)) {
			this.presentToast('Bienvenido ' + this.usuario)
			let navigationExtras: NavigationExtras = {
				state: {
					user: { user: this.buscarAlumno }, // Al estado se asignamos un objeto con clave y valor
				},
			}
			this.router.navigate(['/home'], navigationExtras)
		}
	}
  validarAlumno(user: string, pass: string) {
		this.buscarAlumno = this.alumnos.find((alumno) => alumno.username === user)
		const buscarPassword = this.alumnos.find(
			(alumno) => alumno.password === pass
		)
		if (typeof this.buscarAlumno === 'undefined') {
			this.presentToast('Usuario invalido', 900)
			return false
		}
		if (typeof buscarPassword === 'undefined') {
			this.presentToast('Contraseña invalida', 900)
			return false
		}
		console.log(this.buscarAlumno)
		return true
	}
  
  //  Recuperar contraseña
  Olvidar() {
    this.router.navigate(['/register']);
  }

  // Validar el correo tengo @ y .
  validateEmail(email: string) {
    var re = /\S+@\S+.\S+/;
    return re.test(email);
  }

  // Present Toast
  async presentToast(message: string, duration?: number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration ? duration : 2000
    });
    toast.present();
  }

}
