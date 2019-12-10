import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor() { }

  // public getModule(): Module[] {
  //   let retModule: Module[] = [];
  //   moduleData.modules.forEach(mod => {
  //     retModule.push(new Module().deserialize(mod));
  //   });
  //   return retModule;
  // }
}
