// Página de inicio del proxy: cambia los textos y pon una caja por servicio.
// Al añadir un servicio: su entrada aquí, su imagen en img/ y su bloque en nginx.conf.
// "ruta" es el enlace de la caja:
//   - servicio publicado por ruta:       ruta: '/quien/'
//   - servicio publicado por subdominio: ruta: 'http://archivos.localhost:8303/'  (la URL completa)

const PORTAL = {
  titulo: 'ALUMNO-3',
  subtitulo: 'Reverse proxy con nginx y Docker',
  pie: 'Examen Docker Bloque B · Ibai García',
};

const APPS = [
  {
    nombre: 'Principal',
    ruta: '/',
    imagen: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    descripcion: 'Página de inicio',
  },
  {
    nombre: 'Quién Soy',
    ruta: '/quien/',
    imagen: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    descripcion: 'Datos de la petición',
  },
  {
    nombre: 'Archivos',
    ruta: 'http://archivos.localhost:8303/',
    imagen: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
    descripcion: 'Gestor de ficheros',
  },
];
