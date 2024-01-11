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

    matIconRegistry.addSvgIcon('facebook_icon', 
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/social-networks/facebook-icono.svg'));
    matIconRegistry.addSvgIcon('correo_icon', 
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/social-networks/correo-icono.svg'));
    matIconRegistry.addSvgIcon('linkedin_icon', 
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/social-networks/linkedin-icono.svg'));
    matIconRegistry.addSvgIcon('whatsapp_icon', 
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/social-networks/whatsapp-icono.svg'));
    matIconRegistry.addSvgIcon('youtube_icon', 
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/social-networks/youtube-icono.svg'));
  }
}
