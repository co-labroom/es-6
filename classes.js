/**
 * Created by common on 2017/6/6.
 */
class Mesh {
  constructor(name) {
    this.name = name;
    this.bones = [];
  }

  update(camera) {
    console.log(camera);
  }
}
class SkinnerMesh extends Mesh {
  constructor(geometry, materials) {
    super(geometry);
    this.materials = materials;
    this.idMatrix = SkinnerMesh.defaultMatrix();
  }

  update(camera) {
    super.update(camera);
  }

  static defaultMatrix() {
    return new String('2');
  }
}

let skinnerMesh = new SkinnerMesh('zyj', 'front-end');
skinnerMesh.update('hello class');
console.log(skinnerMesh.name);
console.log(skinnerMesh);