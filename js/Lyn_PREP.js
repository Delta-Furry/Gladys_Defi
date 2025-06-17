
import * as THREE from "./three.module.js"

export default function E04 ({x,y,z}) {


// 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄

 //plano
 var cuadro = new THREE.BoxGeometry(200, 0.1,200);
    var materialSuelo = new THREE.MeshBasicMaterial({color: 0x66ccff});
    var suelo = new THREE.Mesh(cuadro, materialSuelo);
    //scene.add(suelo);
    suelo.position.set(0, -10, 0);
    suelo.receiveShadow = true;
var fish = new THREE.Group();

// Cuerpo
var bodyGeometry = new THREE.SphereGeometry(3, 32, 32);
var bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x66ccff });
var body = new THREE.Mesh(bodyGeometry, bodyMaterial);
//fish.add(body);

// Cola
var tailGeometry = new THREE.ConeGeometry(2, 5, 6);
var tailMaterial = new THREE.MeshBasicMaterial({ color: 0x003366 });
var tail = new THREE.Mesh(tailGeometry, tailMaterial);
tail.position.set(-4, 0, 0);
tail.rotation.z = Math.PI / 2;
//fish.add(tail);

// Aleta superior
var topFinGeometry = new THREE.ConeGeometry(1.5, 3, 6);
var topFinMaterial = new THREE.MeshBasicMaterial({ color: 0x3399ff });
var topFin = new THREE.Mesh(topFinGeometry, topFinMaterial);
topFin.position.set(0, 3, 0);
topFin.rotation.x = Math.PI / 2;
//fish.add(topFin);

// Aletas laterales
var sideFinGeometry = new THREE.ConeGeometry(1.2, 2, 6);
var sideFinMaterial = new THREE.MeshBasicMaterial({ color: 0x0066cc });
var finSide1 = new THREE.Mesh(sideFinGeometry, sideFinMaterial);
finSide1.position.set(1.5, -0.5, 2.5);
finSide1.rotation.y = Math.PI / 2;
//fish.add(finSide1);

var finSide2 = finSide1.clone();
finSide2.position.set(1.5, -0.5, -2.5);
//fish.add(finSide2);

// Boca
var mouthGeometry = new THREE.CylinderGeometry(0.6, 1, 0.4, 16);
var mouthMaterial = new THREE.MeshBasicMaterial({ color: 0xFF6347 });
var mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
mouth.rotation.z = Math.PI / 2;
mouth.position.set(3.2, -0.2, 0);
//fish.add(mouth);

// Ojos
var eyeGeometry = new THREE.SphereGeometry(0.6, 16, 16);
var eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
var pupilMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

var eye1 = new THREE.Mesh(eyeGeometry, eyeMaterial);
eye1.position.set(2.5, 1, 2);
//fish.add(eye1);

var pupil1 = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), pupilMaterial);
pupil1.position.set(2.8, 1, 2.2);
//fish.add(pupil1);

var eye2 = eye1.clone();
eye2.position.set(2.5, 1, -2);
//fish.add(eye2);

var pupil2 = pupil1.clone();
pupil2.position.set(2.8, 1, -2.2);
//fish.add(pupil2);

fish.position.set(-40,10,0);
fish.rotation.set(0,5,0);
//scene.add(fish);

//piedras
//1
var piedraGeometry = new THREE.SphereGeometry(3, 32, 32);
var piedraMaterial = new THREE.MeshBasicMaterial({ color: 0x9b9b9b  });
var piedra = new THREE.Mesh(piedraGeometry,piedraMaterial);
//scene.add(piedra);
piedra.position.set(-15,-8,-10);
//2
var piedra1Geometry = new THREE.SphereGeometry(3, 32, 32);
var piedra1Material = new THREE.MeshBasicMaterial({ color: 0x4f4f4f  });
var piedra1 = new THREE.Mesh(piedra1Geometry,piedra1Material);
//scene.add(piedra1);
piedra1.position.set(10,-8,18);
//3
var piedra2Geometry = new THREE.SphereGeometry(3, 32, 32);
var piedra2Material = new THREE.MeshBasicMaterial({ color: 0x44f  });
var piedra2 = new THREE.Mesh(piedra2Geometry,piedra2Material);
//scene.add(piedra2);
piedra2.position.set(-45,-8,-25);

//4
var piedra3Geometry = new THREE.SphereGeometry(3, 32, 32);
var piedra3Material = new THREE.MeshBasicMaterial({ color: 0x4ff4f  });
var piedra3 = new THREE.Mesh(piedra3Geometry,piedra3Material);
//scene.add(piedra3);
piedra3.position.set(-40,-8,40);

//5
var piedra4Geometry = new THREE.SphereGeometry(3, 32, 32);
var piedra4Material = new THREE.MeshBasicMaterial({ color: 0x4ff4f  });
var piedra4 = new THREE.Mesh(piedra4Geometry,piedra4Material);
//scene.add(piedra4);
piedra4.position.set(-25,-8,25);
//6
var piedra5Geometry = new THREE.SphereGeometry(3, 32, 32);
var piedra5Material = new THREE.MeshBasicMaterial({ color: 0x4f4  });
var piedra5 = new THREE.Mesh(piedra5Geometry,piedra5Material);
//scene.add(piedra4);
piedra5.position.set(10,-8,5);
//7
var piedra6Geometry = new THREE.SphereGeometry(3, 32, 32);
var piedra6Material = new THREE.MeshBasicMaterial({ color: 0x4f44f  });
var piedra6 = new THREE.Mesh(piedra6Geometry,piedra6Material);
//scene.add(piedra6);
piedra6.position.set(28,-8,-34);

//8
var piedra7Geometry = new THREE.SphereGeometry(3, 32, 32);
var piedra7Material = new THREE.MeshBasicMaterial({ color: 0x4ff  });
var piedra7 = new THREE.Mesh(piedra7Geometry,piedra7Material);
//scene.add(piedra7);
piedra7.position.set(30,-8,30);

//9
var piedra5Geometry = new THREE.SphereGeometry(3, 32, 32);
var piedra5Material = new THREE.MeshBasicMaterial({ color: 0x4f4  });
var piedra5 = new THREE.Mesh(piedra5Geometry,piedra5Material);
//scene.add(piedra5);
piedra5.position.set(0,-8,38);
//10
var piedra6Geometry = new THREE.SphereGeometry(3, 32, 32);
var piedra6Material = new THREE.MeshBasicMaterial({ color: 0x4f44f  });
var piedra10 = new THREE.Mesh(piedra6Geometry,piedra6Material);
//scene.add(piedra10);
piedra10.position.set(45,-8,45);

//11
var piedra7Geometry = new THREE.SphereGeometry(3, 32, 32);
var piedra7Material = new THREE.MeshBasicMaterial({ color: 0x4ff  });
var piedra11 = new THREE.Mesh(piedra7Geometry,piedra7Material);
//scene.add(piedra11);
piedra11.position.set(-30,-8,40);

//barco
var barcoGeometry= new THREE.BoxGeometry(40,12,10);
var barcoMaterial = new THREE.MeshBasicMaterial({color:0xff6433226});
var barco= new THREE.Mesh(barcoGeometry,barcoMaterial);
//scene.add(barco);
barco.position.set(-20,-3,-30);

var puntaGeometry= new THREE.BoxGeometry(20,2,5);
var puntaMaterial = new THREE.MeshBasicMaterial({color:0xff6433226});
var barco1= new THREE.Mesh(puntaGeometry,puntaMaterial);
//scene.add(barco1);
barco1.position.set(2,2,-30);
barco1.rotation.set(0,0,0);

var punta2Geometry= new THREE.BoxGeometry(20,2,2);
var punta2Material = new THREE.MeshBasicMaterial({color:0xff6433226});
var barco2= new THREE.Mesh(punta2Geometry,punta2Material);
//scene.add(barco2);
barco2.position.set(7,2,-30);
barco2.rotation.set(0,0,0);

//vela
var velaGeometry= new THREE.BoxGeometry(2,25,2);
var velaMaterial = new THREE.MeshBasicMaterial({color:0x52463b});
var vela= new THREE.Mesh(velaGeometry,velaMaterial);
//scene.add(vela);
vela.position.set(-20,5,-30);
//velaa rriba

var plane = new THREE.BoxGeometry(3,20,20);
var material = new THREE.MeshBasicMaterial({ color: 0xfffffff, side: THREE.DoubleSide });
var mesh1 = new THREE.Mesh(plane, material);
mesh1.scale.set(1, 1, 1);
//scene.add(mesh1);
mesh1.position.set(-10,15,-28);

var plane = new THREE.BoxGeometry(3,24,27);
var material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
var mesh = new THREE.Mesh(plane, material);

//scene.add(mesh);
mesh.position.set(-20,18,-30);
//piedra_grand
var piedrag =new THREE.BoxGeometry(150,20,10);
var materialp = new THREE.MeshBasicMaterial({ color: 0xf, side: THREE.DoubleSide });
var gra = new THREE.Mesh(piedrag, materialp);

//scene.add(gra);
gra.position.set(0,0,-68);

var piedrag =new THREE.BoxGeometry(150,20,10);
var materialp = new THREE.MeshBasicMaterial({ color: 0xf, side: THREE.DoubleSide });
var gra1 = new THREE.Mesh(piedrag, materialp);

//scene.add(gra1);
gra1.position.set(0,30,-68);

var piedrag =new THREE.BoxGeometry(150,20,10);
var materialp = new THREE.MeshBasicMaterial({ color: 0xf, side: THREE.DoubleSide });
var gra2 = new THREE.Mesh(piedrag, materialp);

//scene.add(gra2);
gra2.position.set(0,60,-68);
//patas_pulpo
//1
var alga =new THREE.BoxGeometry(3,20,3);
var materialg = new THREE.MeshBasicMaterial({ color: 0x590088, side: THREE.DoubleSide });
var alg = new THREE.Mesh(alga, materialg);

//scene.add(alg);
alg.position.set(30,-2,2);
//2
var alga02 =new THREE.BoxGeometry(3,20,3);
var materialg = new THREE.MeshBasicMaterial({ color: 0x590088, side: THREE.DoubleSide });
var alg2 = new THREE.Mesh(alga02, materialg);

//scene.add(alg2);
alg.position.set(34,-2,2);
//3
var alga03 =new THREE.BoxGeometry(3,20,3);
var materialg = new THREE.MeshBasicMaterial({ color: 0x590088, side: THREE.DoubleSide });
var alg3 = new THREE.Mesh(alga03, materialg);

//scene.add(alg3);
alg3.position.set(30,-2,7);
//4
var alga05 =new THREE.BoxGeometry(3,20,3);
var materialg = new THREE.MeshBasicMaterial({ color: 0x590088, side: THREE.DoubleSide });
var alg5 = new THREE.Mesh(alga05, materialg);

//scene.add(alg5);
alg.position.set(34,-2,7);

//4
var pulpo =new THREE.BoxGeometry(10,10,10);
var materiall = new THREE.MeshBasicMaterial({ color: 0x590088, side: THREE.DoubleSide });
var pul = new THREE.Mesh(pulpo, materiall);

//scene.add(pul);
pul.position.set(32,7,4);

// Ojos
var eyeGeometry = new THREE.SphereGeometry(0.6, 16, 16);
var eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
var pupilMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

var eye1 = new THREE.Mesh(eyeGeometry, eyeMaterial);
eye1.position.set(30, 8, 9);
//scene.add(eye1);

var pupil1 = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), pupilMaterial);
pupil1.position.set(30, 8, 10);
//scene.add(pupil1);

var eye2 = eye1.clone();
eye2.position.set(34, 8, 9);
//scene.add(eye2);

var pupil2 = pupil1.clone();
pupil2.position.set(34, 8, 10);
//scene.add(pupil2);
//t
var geometry10 = new THREE.BoxGeometry(8,8,8);
   var texture= new THREE.TextureLoader();
   
  
var materials=[];
materials.push( new THREE.MeshPhongMaterial({
color: 0x90abed,
map:texture.load("./assets/b.jpg"),
transparent:true,
opacity:1
 }));


materials.push( new THREE.MeshPhongMaterial({
color: 0x90abed,
map:texture.load("./assets/b.jpg"),
transparent:true,
opacity:1
}));
   
   
materials.push( new THREE.MeshPhongMaterial({
color: 0x90aed,
map:texture.load("./assets/b.jpg"),
transparent:true,
opacity:1

   }));
  
materials.push( new THREE.MeshPhongMaterial({
color: 0x90ab,
map:texture.load("./assets/b.jpg"),
transparent:true,
opacity:1

   }));
   materials.push( new THREE.MeshPhongMaterial({
color: 0x90abe,
map:texture.load("./assets/b.jpg"),
transparent:true,
opacity:1

   }));

   materials.push( new THREE.MeshPhongMaterial({
color: 0x0ab,
map:texture.load("./assets/b.jpg"),
transparent:true,
opacity:1

   }));
   var mesh01= new THREE.Mesh(geometry10,materials);
   mesh01.castShadow=true;
   //scene.add(mesh01);
mesh01.position.set(-45,15,40);

var mesh02= new THREE.Mesh(geometry10,materials);
   mesh02.castShadow=true;
   //scene.add(mesh02);
mesh02.position.set(45,15,40);

//algas1
//1
var alga1 =new THREE.BoxGeometry(1,20,1);
var materialg1 = new THREE.MeshBasicMaterial({ color: 0x008000, side: THREE.DoubleSide });
var alg1 = new THREE.Mesh(alga1, materialg1);

//scene.add(alg1);
alg1.position.set(0,-2,60);
//2
var alga1 =new THREE.BoxGeometry(1,20,1);
var materialg1 = new THREE.MeshBasicMaterial({ color: 0x008000, side: THREE.DoubleSide });
var alg1 = new THREE.Mesh(alga1, materialg1);

//scene.add(alg1);
alg1.position.set(4,-2,60);

//3
var alga1 =new THREE.BoxGeometry(1,20,1);
var materialg1 = new THREE.MeshBasicMaterial({ color: 0x008000, side: THREE.DoubleSide });
var alg1 = new THREE.Mesh(alga1, materialg1);

//scene.add(alg1);
alg1.position.set(4,-2,65);

//4
var alga1 =new THREE.BoxGeometry(1,20,1);
var materialg1 = new THREE.MeshBasicMaterial({ color: 0x008000, side: THREE.DoubleSide });
var alg1 = new THREE.Mesh(alga1, materialg1);

//scene.add(alg1);
alg1.position.set(0,-2,65);


//algas2
//1
var alga1 =new THREE.BoxGeometry(1,20,1);
var materialg1 = new THREE.MeshBasicMaterial({ color: 0x008000, side: THREE.DoubleSide });
var alg1 = new THREE.Mesh(alga1, materialg1);

//scene.add(alg1);
alg1.position.set(-30,-2,0);
//2
var alga1 =new THREE.BoxGeometry(1,20,1);
var materialg1 = new THREE.MeshBasicMaterial({ color: 0x008000, side: THREE.DoubleSide });
var alg1 = new THREE.Mesh(alga1, materialg1);

//scene.add(alg1);
alg1.position.set(4,-2,0);

//3
var alga1 =new THREE.BoxGeometry(1,20,1);
var materialg1 = new THREE.MeshBasicMaterial({ color: 0x008000, side: THREE.DoubleSide });
var alg1 = new THREE.Mesh(alga1, materialg1);

//scene.add(alg1);
alg1.position.set(38,-2,-20);

//4
var alga1 =new THREE.BoxGeometry(1,20,1);
var materialg1 = new THREE.MeshBasicMaterial({ color: 0x008000, side: THREE.DoubleSide });
var alg1 = new THREE.Mesh(alga1, materialg1);

//scene.add(alg1);
alg1.position.set(0,-2,0);


//algas3
//1
var alga1 =new THREE.BoxGeometry(1,20,1);
var materialg1 = new THREE.MeshBasicMaterial({ color: 0x008000, side: THREE.DoubleSide });
var alg1 = new THREE.Mesh(alga1, materialg1);

//scene.add(alg1);
alg1.position.set(-55,-2,60);
//2
var alga1 =new THREE.BoxGeometry(1,20,1);
var materialg1 = new THREE.MeshBasicMaterial({ color: 0x008000, side: THREE.DoubleSide });
var alg1 = new THREE.Mesh(alga1, materialg1);

//scene.add(alg1);
alg1.position.set(55,-2,60);

//3
var alga1 =new THREE.BoxGeometry(1,20,1);
var materialg1 = new THREE.MeshBasicMaterial({ color: 0x008000, side: THREE.DoubleSide });
var alg1 = new THREE.Mesh(alga1, materialg1);

//scene.add(alg1);
alg1.position.set(-50,-2,-40);

//4
var alga1 =new THREE.BoxGeometry(1,20,1);
var materialg1 = new THREE.MeshBasicMaterial({ color: 0x008000, side: THREE.DoubleSide });
var alg1 = new THREE.Mesh(alga1, materialg1);

//scene.add(alg1);
alg1.position.set(-10,-2,40);

//algas4
//1
var alga1 =new THREE.BoxGeometry(1,20,1);
var materialg1 = new THREE.MeshBasicMaterial({ color: 0x008000, side: THREE.DoubleSide });
var alg1 = new THREE.Mesh(alga1, materialg1);

//scene.add(alg1);
alg1.position.set(55,-2,-60);
//2
var alga1 =new THREE.BoxGeometry(1,20,1);
var materialg1 = new THREE.MeshBasicMaterial({ color: 0x008000, side: THREE.DoubleSide });
var alg1 = new THREE.Mesh(alga1, materialg1);

//scene.add(alg1);
alg1.position.set(55,-2,-46);

//3
var alga1 =new THREE.BoxGeometry(1,20,1);
var materialg1 = new THREE.MeshBasicMaterial({ color: 0x008000, side: THREE.DoubleSide });
var alg1 = new THREE.Mesh(alga1, materialg1);

//scene.add(alg1);
alg1.position.set(-50,-2,-37);

//4
var alga1 =new THREE.BoxGeometry(1,20,1);
var materialg1 = new THREE.MeshBasicMaterial({ color: 0x008000, side: THREE.DoubleSide });
var alg1 = new THREE.Mesh(alga1, materialg1);

//scene.add(alg1);
alg1.position.set(-55,-2,30);

//AGRUPAR TODOS LOS MESH PARA EXPORTAR
   const ESC04 = new THREE.Group();
 ESC04.add(suelo, body, tail, topFin, finSide1, finSide2, mouth, eye1, pupil1, eye2, pupil2, fish, piedra, piedra1, piedra2, 
piedra3, piedra4, piedra4, piedra6, piedra7, piedra5, piedra10, piedra11, barco, barco1, barco2, vela,
mesh, mesh1, gra, gra2, gra1, alg, alg2, alg3, alg5, pul, eye1, pupil1, eye2, mesh01, mesh02, alg1); //MESH
 ESC04.position.set(x,y,z);

   return ESC04;
    }