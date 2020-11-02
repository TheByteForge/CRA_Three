import React, { Component } from "react";
import * as THREE from "three";
import OrbitControls from "orbit-controls-es6";

class Scene extends Component {
  render() {
    return <div id="three" />;
  }

  componentDidMount() {
    const width = 600;
    const height = width;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff, 1.0);

    const dom = document.getElementById("three");
    dom.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = true;
    controls.maxDistance = 1500;
    controls.minDistance = 0;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshLambertMaterial({
      color: this.props.color
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light_p = new THREE.PointLight(0xffffff);
    light_p.position.set(100, 100, 100);
    scene.add(light_p);

    const light_a = new THREE.AmbientLight(0x333333);
    scene.add(light_a);

    const animate = function () {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();

    this.cube = cube;
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.color !== nextProps.color) {
      this.cube.material.color.setHex(nextProps.color);
    }
  }
}

export default Scene;
