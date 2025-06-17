import * as THREE from "./three.module.js"

export default function E02 ({x,y,z}) {

var piso = new THREE.Mesh(
  new THREE.BoxGeometry(200, 1, 200),
  new THREE.MeshBasicMaterial({color: 0x004466})
);
piso.position.set(0, -10, 0);
//escena.add(piso);

var barco = new THREE.Mesh(
  new THREE.BoxGeometry(20, 6, 6),
  new THREE.MeshBasicMaterial({color: 0x553322})
);
barco.position.set(-20, -4, 0);
//escena.add(barco);

var mastil = new THREE.Mesh(
  new THREE.CylinderGeometry(0.5, 0.5, 15),
  new THREE.MeshBasicMaterial({color: 0x222222})
);
mastil.position.set(-20, 4, 0);
//escena.add(mastil);

var vela = new THREE.Mesh(
  new THREE.PlaneGeometry(8, 10),
  new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide})
);
vela.position.set(-20, 5, 0);
vela.rotation.y = 1.57;
//escena.add(vela);

var cuerpoPulpo = new THREE.Mesh(
  new THREE.SphereGeometry(4, 16, 16),
  new THREE.MeshBasicMaterial({color: 0x880088})
);
cuerpoPulpo.position.set(20, -2, 0);
//escena.add(cuerpoPulpo);

var ojo1 = new THREE.Mesh(
  new THREE.SphereGeometry(0.7, 8, 8),
  new THREE.MeshBasicMaterial({color: 0xffffff})
);
ojo1.position.set(18, 0.5, 3);
//escena.add(ojo1);

var pupila1 = new THREE.Mesh(
  new THREE.SphereGeometry(0.3, 8, 8),
  new THREE.MeshBasicMaterial({color: 0x000000})
);
pupila1.position.set(18, 0.5, 4);
//escena.add(pupila1);

var ojo2 = new THREE.Mesh(
  new THREE.SphereGeometry(0.7, 8, 8),
  new THREE.MeshBasicMaterial({color: 0xffffff})
);
ojo2.position.set(22, 0.5, 3);
//escena.add(ojo2);

var pupila2 = new THREE.Mesh(
  new THREE.SphereGeometry(0.3, 8, 8),
  new THREE.MeshBasicMaterial({color: 0x000000})
);
pupila2.position.set(22, 0.5, 4);
//escena.add(pupila2);

var tentaculo1 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.5, 0.8, 12, 6),
  new THREE.MeshBasicMaterial({color: 0x550055})
);
tentaculo1.position.set(16, -6, 0);
tentaculo1.rotation.z = 0.7;
//escena.add(tentaculo1);

var tentaculo2 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.5, 0.8, 12, 6),
  new THREE.MeshBasicMaterial({color: 0x550055})
);
tentaculo2.position.set(24, -6, 0);
tentaculo2.rotation.z = -0.7;
//escena.add(tentaculo2);

var tentaculo3 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.5, 0.8, 12, 6),
  new THREE.MeshBasicMaterial({color: 0x550055})
);
tentaculo3.position.set(20, -6, 4);
tentaculo3.rotation.x = 0.7;
//escena.add(tentaculo3);

var tentaculo4 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.5, 0.8, 12, 6),
  new THREE.MeshBasicMaterial({color: 0x550055})
);
tentaculo4.position.set(20, -6, -4);
tentaculo4.rotation.x = -0.7;
//escena.add(tentaculo4);

var coral1 = new THREE.Mesh(
  new THREE.ConeGeometry(2, 6, 8),
  new THREE.MeshBasicMaterial({color: 0xff6699})
);
coral1.position.set(-30, -11, 30);
//escena.add(coral1);

var coral2 = new THREE.Mesh(
  new THREE.ConeGeometry(1.5, 5, 6),
  new THREE.MeshBasicMaterial({color: 0xff3366})
);
coral2.position.set(0, -11, -30);
//escena.add(coral2);

var pez1Cuerpo = new THREE.Mesh(
  new THREE.SphereGeometry(1.2, 12, 12),
  new THREE.MeshBasicMaterial({color: 0xffcc00})
);
pez1Cuerpo.position.set(10, 0, -20);
//escena.add(pez1Cuerpo);

var pez1Cola = new THREE.Mesh(
  new THREE.ConeGeometry(0.6, 1.5, 4),
  new THREE.MeshBasicMaterial({color: 0xff9900})
);
pez1Cola.rotation.z = 3.14;
pez1Cola.position.set(8.5, 0, -20);
//escena.add(pez1Cola);

var pez2Cuerpo = new THREE.Mesh(
  new THREE.SphereGeometry(1, 12, 12),
  new THREE.MeshBasicMaterial({color: 0x00ccff})
);
pez2Cuerpo.position.set(-15, 5, 10);
//escena.add(pez2Cuerpo);

var pez2Cola = new THREE.Mesh(
  new THREE.ConeGeometry(0.5, 1.2, 4),
  new THREE.MeshBasicMaterial({color: 0x0099cc})
);
pez2Cola.rotation.z = 3.14;
pez2Cola.position.set(-16.2, 5, 10);
//escena.add(pez2Cola);

//AGRUPAR TODOS LOS MESH PARA EXPORTAR
   const ESC02 = new THREE.Group();
 ESC02.add(piso, barco, mastil, vela, cuerpoPulpo,ojo1,
     pupila1, ojo2, pupila2, tentaculo1, tentaculo2,
     tentaculo3, tentaculo4, coral1, coral2, pez1Cuerpo,
    pez1Cola, pez2Cuerpo, pez2Cola); //MESH
 ESC02.position.set(x,y,z);

   return ESC02;
    }