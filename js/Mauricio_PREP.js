import * as THREE from "./three.module.js"

export default function E03 ({x,y,z}) {

// Suelo arenoso
var suelo = new THREE.Mesh(
  new THREE.PlaneGeometry(200,200),
  new THREE.MeshBasicMaterial({ color: 0x665533, side:THREE.DoubleSide })
);
suelo.rotation.x = -1.57; suelo.position.y = -10;
//scene.add(suelo);

// Volcán submarino
var baseVol = new THREE.Mesh(
  new THREE.CylinderGeometry(10,10,4,16),
  new THREE.MeshBasicMaterial({ color: 0x443322 })
);
baseVol.position.set(0,-10,0);
//scene.add(baseVol);

var conoVol = new THREE.Mesh(
  new THREE.ConeGeometry(8,20,16),
  new THREE.MeshBasicMaterial({ color: 0x332211 })
);
conoVol.position.set(0,-2,0);
//scene.add(conoVol);

// Lava
var lava = new THREE.Mesh(
  new THREE.SphereGeometry(3,24,24),
  new THREE.MeshBasicMaterial({ color: 0xff2200 })
);
lava.position.set(0,6,0);
//scene.add(lava);

// Aros de erupción
var eruptRings = [];


var aro1 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.2, 0.2, 6, 8),
  new THREE.MeshBasicMaterial({ color: 0xff3300 })
);
aro1.position.set(5, 6, 0);
aro1.rotation.x = 1.57;
//scene.add(aro1);

var aro2 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.2, 0.2, 6, 8),
  new THREE.MeshBasicMaterial({ color: 0xff3300 })
);
aro2.position.set(3.5, 6, 3.5);
aro2.rotation.x = 1.57;
aro2.rotation.z = 0.7;
//scene.add(aro2);

var aro3 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.2, 0.2, 6, 8),
  new THREE.MeshBasicMaterial({ color: 0xff3300 })
);
aro3.position.set(0, 6, 5);
aro3.rotation.x = 1.57;
aro3.rotation.z = 1.57;
//scene.add(aro3);

var aro4 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.2, 0.2, 6, 8),
  new THREE.MeshBasicMaterial({ color: 0xff3300 })
);
aro4.position.set(-3.5, 6, 3.5);
aro4.rotation.x = 1.57;
aro4.rotation.z = 2.3;
//scene.add(aro4);

var aro5 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.2, 0.2, 6, 8),
  new THREE.MeshBasicMaterial({ color: 0xff3300 })
);
aro5.position.set(-5, 6, 0);
aro5.rotation.x = 1.57;
aro5.rotation.z = 3.14;
//scene.add(aro5);

var aro6 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.2, 0.2, 6, 8),
  new THREE.MeshBasicMaterial({ color: 0xff3300 })
);
aro6.position.set(-3.5, 6, -3.5);
aro6.rotation.x = 1.57;
aro6.rotation.z = 3.8;
//scene.add(aro6);

var aro7 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.2, 0.2, 6, 8),
  new THREE.MeshBasicMaterial({ color: 0xff3300 })
);
aro7.position.set(0, 6, -5);
aro7.rotation.x = 1.57;
aro7.rotation.z = 4.7;
//scene.add(aro7);

var aro8 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.2, 0.2, 6, 8),
  new THREE.MeshBasicMaterial({ color: 0xff3300 })
);
aro8.position.set(3.5, 6, -3.5);
aro8.rotation.x = 1.57;
aro8.rotation.z = 5.4;
//scene.add(aro8);


// Pez 1
var pez1Cuerpo = new THREE.Mesh(
  new THREE.SphereGeometry(3,24,24),
  new THREE.MeshBasicMaterial({ color: 0xffff66 })
);
pez1Cuerpo.position.set(25, 5, -30);
//scene.add(pez1Cuerpo);

var pez1Cola = new THREE.Mesh(
  new THREE.ConeGeometry(1.5,3,6),
  new THREE.MeshBasicMaterial({ color: 0xff8800 })
);
pez1Cola.rotation.z = 3.1416;
pez1Cola.position.set(21.5, 5, -30);
//scene.add(pez1Cola);

var pez1Aleta1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5,2,5),
  new THREE.MeshBasicMaterial({ color: 0xff8800 })
);
pez1Aleta1.rotation.z = 0.5;
pez1Aleta1.position.set(25, 5, -25);
//scene.add(pez1Aleta1);

var pez1Aleta2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5,2,5),
  new THREE.MeshBasicMaterial({ color: 0xff8800 })
);
pez1Aleta2.rotation.z = -0.5;
pez1Aleta2.position.set(25, 5, -35);
//scene.add(pez1Aleta2);

// Pez 2
var pez2Cuerpo = new THREE.Mesh(
  new THREE.SphereGeometry(2.5,24,24),
  new THREE.MeshBasicMaterial({ color: 0x66ffff })
);
pez2Cuerpo.position.set(-25, 8, -25);
//scene.add(pez2Cuerpo);

var pez2Cola = new THREE.Mesh(
  new THREE.ConeGeometry(1.2,2.5,6),
  new THREE.MeshBasicMaterial({ color: 0x0099cc })
);
pez2Cola.rotation.z = 3.1416;
pez2Cola.position.set(-27.2, 8, -25);
//scene.add(pez2Cola);

var pez2Aleta1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.4,1.5,4),
  new THREE.MeshBasicMaterial({ color: 0x0099cc })
);
pez2Aleta1.rotation.z = 0.6;
pez2Aleta1.position.set(-25, 8, -21);
//scene.add(pez2Aleta1);

var pez2Aleta2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.4,1.5,4),
  new THREE.MeshBasicMaterial({ color: 0x0099cc })
);
pez2Aleta2.rotation.z = -0.6;
pez2Aleta2.position.set(-25, 8, -29);
//scene.add(pez2Aleta2);

// Pez 3
var pez3Cuerpo = new THREE.Mesh(
  new THREE.SphereGeometry(2.8,24,24),
  new THREE.MeshBasicMaterial({ color: 0xff33cc })
);
pez3Cuerpo.position.set(0, 12, -20);
//scene.add(pez3Cuerpo);

var pez3Cola = new THREE.Mesh(
  new THREE.ConeGeometry(1.4,2.8,6),
  new THREE.MeshBasicMaterial({ color: 0xaa0055 })
);
pez3Cola.rotation.z = 3.1416;
pez3Cola.position.set(-1.9, 12, -20);
//scene.add(pez3Cola);

var pez3Aleta1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5,1.8,4),
  new THREE.MeshBasicMaterial({ color: 0xaa0055 })
);
pez3Aleta1.rotation.z = 0.4;
pez3Aleta1.position.set(0, 12, -16);
//scene.add(pez3Aleta1);

var pez3Aleta2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5,1.8,4),
  new THREE.MeshBasicMaterial({ color: 0xaa0055 })
);
pez3Aleta2.rotation.z = -0.4;
pez3Aleta2.position.set(0, 12, -24);
//scene.add(pez3Aleta2);

// Burbujas
var bubbleGeo = new THREE.SphereGeometry(0.7,12,12);
var bubbleMat = new THREE.MeshBasicMaterial({ color:0x99ccff });
var b1 = new THREE.Mesh(bubbleGeo,bubbleMat); b1.position.set(10,15,5); 
//scene.add(b1);
var b2 = new THREE.Mesh(bubbleGeo,bubbleMat); b2.position.set(-10,18,-5); 
//scene.add(b2);

// Pez 4
var pez4Cuerpo = new THREE.Mesh(
  new THREE.SphereGeometry(2.5, 24, 24),
  new THREE.MeshBasicMaterial({ color: 0xffaa00 })
);
pez4Cuerpo.position.set(10, 3, -15);
//scene.add(pez4Cuerpo);

var pez4Cola = new THREE.Mesh(
  new THREE.ConeGeometry(1.2, 3, 6),
  new THREE.MeshBasicMaterial({ color: 0xcc8800 })
);
pez4Cola.rotation.z = 3.1416;
pez4Cola.position.set(6.5, 3, -15);
//scene.add(pez4Cola);

var pez4Aleta1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.4, 2, 4),
  new THREE.MeshBasicMaterial({ color: 0xcc8800 })
);
pez4Aleta1.rotation.z = 0.6;
pez4Aleta1.position.set(10, 3, -11);
//scene.add(pez4Aleta1);

var pez4Aleta2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.4, 2, 4),
  new THREE.MeshBasicMaterial({ color: 0xcc8800 })
);
pez4Aleta2.rotation.z = -0.6;
pez4Aleta2.position.set(10, 3, -19);
//scene.add(pez4Aleta2);

// Pez 5
var pez5Cuerpo = new THREE.Mesh(
  new THREE.SphereGeometry(3, 24, 24),
  new THREE.MeshBasicMaterial({ color: 0x66ff66 })
);
pez5Cuerpo.position.set(-5, 7, -10);
//scene.add(pez5Cuerpo);

var pez5Cola = new THREE.Mesh(
  new THREE.ConeGeometry(1.5, 3, 6),
  new THREE.MeshBasicMaterial({ color: 0x44cc44 })
);
pez5Cola.rotation.z = 3.1416;
pez5Cola.position.set(-8.5, 7, -10);
//scene.add(pez5Cola);

var pez5Aleta1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 2.5, 5),
  new THREE.MeshBasicMaterial({ color: 0x44cc44 })
);
pez5Aleta1.rotation.z = 0.4;
pez5Aleta1.position.set(-5, 7, -6);
//scene.add(pez5Aleta1);

var pez5Aleta2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 2.5, 5),
  new THREE.MeshBasicMaterial({ color: 0x44cc44 })
);
pez5Aleta2.rotation.z = -0.4;
pez5Aleta2.position.set(-5, 7, -14);
//scene.add(pez5Aleta2);

// Pez 6
var pez6Cuerpo = new THREE.Mesh(
  new THREE.SphereGeometry(2, 24, 24),
  new THREE.MeshBasicMaterial({ color: 0x9966ff })
);
pez6Cuerpo.position.set(0, 12, -5);
//scene.add(pez6Cuerpo);

var pez6Cola = new THREE.Mesh(
  new THREE.ConeGeometry(1, 2, 6),
  new THREE.MeshBasicMaterial({ color: 0x6633cc })
);
pez6Cola.rotation.z = 3.1416;
pez6Cola.position.set(-2.5, 12, -5);
//scene.add(pez6Cola);

var pez6Aleta1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3, 1.5, 3),
  new THREE.MeshBasicMaterial({ color: 0x6633cc })
);
pez6Aleta1.rotation.z = 0.5;
pez6Aleta1.position.set(0, 12, -2);
//scene.add(pez6Aleta1);

var pez6Aleta2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3, 1.5, 3),
  new THREE.MeshBasicMaterial({ color: 0x6633cc })
);
pez6Aleta2.rotation.z = -0.5;
pez6Aleta2.position.set(0, 12, -8);
//scene.add(pez6Aleta2);

// Pez 7
var pez7Cuerpo = new THREE.Mesh(
  new THREE.SphereGeometry(1, 16, 16),
  new THREE.MeshBasicMaterial({ color: 0xffaa00 })
);
pez7Cuerpo.position.set(15, 2, -10);
//scene.add(pez7Cuerpo);

var pez7Cola = new THREE.Mesh(
  new THREE.ConeGeometry(0.6, 1.5, 6),
  new THREE.MeshBasicMaterial({ color: 0xcc8800 })
);
pez7Cola.rotation.z = 3.1416;
pez7Cola.position.set(13.4, 2, -10);
//scene.add(pez7Cola);

// Pez 8
var pez8Cuerpo = new THREE.Mesh(
  new THREE.SphereGeometry(0.8, 16, 16),
  new THREE.MeshBasicMaterial({ color: 0x66ff66 })
);
pez8Cuerpo.position.set(-10, 4, -15);
//scene.add(pez8Cuerpo);

var pez8Cola = new THREE.Mesh(
  new THREE.ConeGeometry(0.5, 1.2, 6),
  new THREE.MeshBasicMaterial({ color: 0x44cc44 })
);
pez8Cola.rotation.z = 3.1416;
pez8Cola.position.set(-11.4, 4, -15);
//scene.add(pez8Cola);

// Pez 9
var pez9Cuerpo = new THREE.Mesh(
  new THREE.SphereGeometry(1.2, 16, 16),
  new THREE.MeshBasicMaterial({ color: 0x9966ff })
);
pez9Cuerpo.position.set(5, 8, -5);
//scene.add(pez9Cuerpo);

var pez9Cola = new THREE.Mesh(
  new THREE.ConeGeometry(0.7, 1.8, 6),
  new THREE.MeshBasicMaterial({ color: 0x6633cc })
);
pez9Cola.rotation.z = Math.PI;
pez9Cola.position.set(3.7, 8, -5);
//scene.add(pez9Cola);

// Pez 10
var pez10Cuerpo = new THREE.Mesh(
  new THREE.SphereGeometry(0.9, 16, 16),
  new THREE.MeshBasicMaterial({ color: 0xff33cc })
);
pez10Cuerpo.position.set(-20, 12, -8);
//scene.add(pez10Cuerpo);

var pez10Cola = new THREE.Mesh(
  new THREE.ConeGeometry(0.5, 1.5, 6),
  new THREE.MeshBasicMaterial({ color: 0xaa0055 })
);
pez10Cola.rotation.z = 3.1416;
pez10Cola.position.set(-21.4, 12, -8);
//scene.add(pez10Cola);

// Rocas en el piso
var rocaGeo = new THREE.DodecahedronGeometry(2, 0);
var rocaMat = new THREE.MeshBasicMaterial({ color: 0x555555 });

var roca1 = new THREE.Mesh(rocaGeo, rocaMat);
roca1.position.set(-10, -11, 5);
//scene.add(roca1);

var roca2 = new THREE.Mesh(rocaGeo, rocaMat);
roca2.position.set(15, -11, -8);
//scene.add(roca2);

var roca3 = new THREE.Mesh(rocaGeo, rocaMat);
roca3.position.set(0, -11, 15);
//scene.add(roca2);

var roca4 = new THREE.Mesh(rocaGeo, rocaMat);
roca4.position.set(-20, -11, -15);
//scene.add(roca4);

var roca5 = new THREE.Mesh(rocaGeo, rocaMat);
roca5.position.set(20, -11, 10);
//scene.add(roca5);

// Barco hundido
var cascoGeo = new THREE.BoxGeometry(20, 5, 8);
var cascoMat = new THREE.MeshBasicMaterial({ color: 0x663300 });
var casco = new THREE.Mesh(cascoGeo, cascoMat);
casco.rotation.z = 0.3;
casco.position.set(0, -9, -30);
//scene.add(casco);

var mastilGeo = new THREE.CylinderGeometry(0.3, 0.3, 12, 8);
var mastilMat = new THREE.MeshBasicMaterial({ color: 0x222222 });
var mastil = new THREE.Mesh(mastilGeo, mastilMat);
mastil.position.set(-2, -4, -30);
//scene.add(mastil);

var velaGeo = new THREE.PlaneGeometry(6, 8);
var velaMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
var vela = new THREE.Mesh(velaGeo, velaMat);
vela.rotation.y = 1.2;
vela.position.set(-2, 0, -30);
//scene.add(vela);

//AGRUPAR TODOS LOS MESH PARA EXPORTAR
   const ESC03 = new THREE.Group();
 ESC03.add(suelo, baseVol, conoVol, lava, aro1, aro2, aro3, aro4, aro5, aro6, aro7, 
    aro8, pez1Cuerpo, pez1Cola, pez1Aleta1, pez1Aleta2, pez2Cuerpo, pez2Cola, 
    pez2Aleta1, pez2Aleta2, pez3Cuerpo, pez3Cola, pez3Aleta1, pez3Aleta2, b1, b2, 
    pez4Cuerpo, pez4Cola, pez4Aleta1, pez4Aleta2, pez5Cuerpo, pez5Cola, pez5Aleta1,
     pez5Aleta2, pez6Cuerpo, pez6Cola, pez6Aleta1, pez6Aleta2, pez7Cuerpo, 
     pez7Cola, pez8Cuerpo, pez8Cola, pez9Cuerpo, pez9Cola, pez10Cuerpo, pez10Cola
    , roca1, roca2, roca2, roca3, roca4, roca5, casco, mastil, vela); //MESH
 ESC03.position.set(x,y,z);

   return ESC03;
    }