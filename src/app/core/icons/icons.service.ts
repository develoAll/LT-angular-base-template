import { Injectable, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  constructor(
    private matIconRegistry: MatIconRegistry  // esto es un servicio
  ) {
    const domSanitizer = inject(DomSanitizer);  // esto es un servicio

    // Registro de ruta de iconos
    matIconRegistry.addSvgIconSetInNamespace('heroicons_outline',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/heroicons-outline.svg'));

    matIconRegistry.addSvgIconSetInNamespace('heroicons_solid',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/heroicons-solid.svg'));
      
    matIconRegistry.addSvgIconSetInNamespace('heroicons_mini', 
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/heroicons-mini.svg'));
  }
}
