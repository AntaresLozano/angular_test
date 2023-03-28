import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent {

  
  formulario!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      mensaje: ['', Validators.required]
    })
  }

  enviar() {
    if (this.formulario.valid) {
      // aquí puedes enviar los datos del formulario a través de un servicio
      console.log(this.formulario.value);
    }
  }

}
