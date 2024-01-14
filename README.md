# Aplicación de prueba con sugerencias de buenas practicas y formas de estructurar un proyecto

## 1 Recursos necesarios

### 1.1  Crear el archivo ".env"
>Crear el archivo en la raiz del proyecto, es necesario ya que se esta usando la libreria
>>ng add @ngx-env/builder

>Dentro del archivo ".env" se deben incluir las siguiente variables, ya que se usa en los "environment.ts", no es necesario ponerle un valor ya por ahora solo se usa como pruebas
>>- NG_APP_TEXT=""
>>- NG_APP_API=""

## 2 Levantar el proyecto

>Se configuro algunos SCRIPTS para usar los environment
>>- npm run start
>>- npm run start-dev
>>- npm run start-qa
>>- npm run start-prod

>Es recomendable levantarlo con "npm run start" o "npm run start-dev"