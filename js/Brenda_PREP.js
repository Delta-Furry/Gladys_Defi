import * as THREE from "./three.module.js"

export default function E01 ({x,y,z}) {

// FORMAS

var solGeometry = new THREE.CircleGeometry(5, 32);
var solMaterial = new THREE.MeshBasicMaterial({color: 0xFFFF00});

var sol = new THREE.Mesh(solGeometry, solMaterial);
sol.position.set(-30, 30, -80);
sol.rotation.x = -1.57;
//scene.add(sol);

var lagoGeometry = new THREE.CircleGeometry(30, 32);
var lagoMaterial = new THREE.MeshBasicMaterial({color: 0x4682B4,transparent: true,opacity: 0.8});

var lago = new THREE.Mesh(lagoGeometry, lagoMaterial);
lago.rotation.x = -1.57;
lago.position.y = 0;
//scene.add(lago);

var pastoGeometry = new THREE.PlaneGeometry(200, 200);
var pastoMaterial = new THREE.MeshBasicMaterial({
    color: 0x7CFC00
});

var pasto = new THREE.Mesh(pastoGeometry, pastoMaterial);
pasto.rotation.x = -1.57;
pasto.position.y = -0.1;
//scene.add(pasto);
var cascoGeometry = new THREE.CylinderGeometry(1, 3, 6, 16);
var cascoMaterial = new THREE.MeshBasicMaterial({color: 0x8B4513});

var casco = new THREE.Mesh(cascoGeometry, cascoMaterial);
casco.rotation.z = 1.57;
casco.position.set(0, 1, 0);
//scene.add(casco);

var mastilGeometry = new THREE.CylinderGeometry(0.2, 0.2, 5, 8);
var mastilMaterial = new THREE.MeshBasicMaterial({color: 0x8B4513});

var mastil = new THREE.Mesh(mastilGeometry, mastilMaterial);
mastil.position.set(0, 4.5, 0);
//scene.add(mastil);

var velaGeometry = new THREE.PlaneGeometry(3, 4);
var velaMaterial = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF, 
    side: THREE.DoubleSide
});

var vela = new THREE.Mesh(velaGeometry, velaMaterial);
vela.position.set(0, 5, 0);
vela.rotation.y = 1.57;
//scene.add(vela);

// Árbol 1
var tronco1Geometry = new THREE.CylinderGeometry(0.5, 0.5, 5, 8);
var tronco1Material = new THREE.MeshBasicMaterial({color: 0x8B4513});

var tronco1 = new THREE.Mesh(tronco1Geometry, tronco1Material);
tronco1.position.set(-20, 2.5, -15);
//scene.add(tronco1);

var copa1Geometry = new THREE.ConeGeometry(3, 4, 8);
var copa1Material = new THREE.MeshBasicMaterial({color: 0x228B22});

var copa1 = new THREE.Mesh(copa1Geometry, copa1Material);
copa1.position.set(-20, 6, -15);
//scene.add(copa1);

// Árbol 2
var tronco2Geometry = new THREE.CylinderGeometry(0.5, 0.5, 5, 8);
var tronco2Material = new THREE.MeshBasicMaterial({color: 0x8B4513});

var tronco2 = new THREE.Mesh(tronco2Geometry, tronco2Material);
tronco2.position.set(25, 2.5, -10);
//scene.add(tronco2);

var copa2Geometry = new THREE.SphereGeometry(3, 8, 8);
var copa2Material = new THREE.MeshBasicMaterial({color: 0x228B22});

var copa2 = new THREE.Mesh(copa2Geometry, copa2Material);
copa2.position.set(25, 6, -10);
//scene.add(copa2);

// Cabeza
var cabezaGeometry = new THREE.SphereGeometry(0.5, 16, 16);
var cabezaMaterial = new THREE.MeshBasicMaterial({color: 0xFFD700});

var cabeza = new THREE.Mesh(cabezaGeometry, cabezaMaterial);
cabeza.position.set(-10, 1.5, -25);
//scene.add(cabeza);

// Cuerpo
var cuerpoGeometry = new THREE.CylinderGeometry(0.4, 0.4, 1.5, 16);
var cuerpoMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000});

var cuerpo = new THREE.Mesh(cuerpoGeometry, cuerpoMaterial);
cuerpo.position.set(-10, 0.5, -25);
//scene.add(cuerpo);

var pezCuerpoGeometry = new THREE.ConeGeometry(0.8, 2, 16);
var pezCuerpoMaterial = new THREE.MeshBasicMaterial({color: 0xFF6347});

var pezCuerpo = new THREE.Mesh(pezCuerpoGeometry, pezCuerpoMaterial);
pezCuerpo.position.set(5, 0, 5);
pezCuerpo.rotation.y = -1.57;
//scene.add(pezCuerpo);

//AGRUPAR TODOS LOS MESH PARA EXPORTAR
   const ESC01 = new THREE.Group();
 ESC01.add( sol, lago, pasto,
casco,mastil,vela,tronco1,copa1,
 tronco2, copa2, cabeza, cuerpo, pezCuerpo); //MESH
 ESC01.position.set(x,y,z);

   return ESC01;
    }