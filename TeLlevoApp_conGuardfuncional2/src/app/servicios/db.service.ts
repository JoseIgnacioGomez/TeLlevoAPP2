import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private sqllite: SQLite) { 

    this.sqllite.create({
      name: 'mibasedatos.db'
    }).then ((db: SQLiteObject) => {

      console.log("Base de datos fue creada");
    })

  }
}
