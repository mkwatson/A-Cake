AFRAME.registerShader('phong', {
    init: function() {
        this.material = new THREE.MeshPhongMaterial({
            shininess: 100
        });
        this.material.color.setRGB(255, 0, 0);
    }
});
