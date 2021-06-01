import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  validar(formBar: NgForm) {
    console.log(formBar.value);
    try {
      if (formBar.value.age < 18) {
        throw 'La persona es menor de edad';
      }

      if (formBar.value.payCover === "false" && formBar.value.gender !== 'masculino') {
        throw `La persona ${formBar.value.name} no ha pago el cover`;
      }

      if (formBar.value.hour >= 3 && formBar.value.hour <= 19) {
        throw 'El bar esta cerrado';
      }

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ingreso Permitido',
        showConfirmButton: true,
      });
    } catch (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'No se puede ingresar',
        text: `${error}`,
        showConfirmButton: true,
      });
    }

    formBar.reset()
  }
}
