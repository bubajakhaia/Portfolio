import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import Card from './Card';

import './App.css';
import './Card.css';
import Header from './Header';
import ContactCard from './ContactCard';

const cards = [
  {
    image: './imgs/3.png',
    name: 'Oasis Cabins',
    description: 'This web-app is for managing small cabin hotel business, with many interesting features like authorization, back-end and etc.',
    link: 'https://master--cabinoasis-hotel.netlify.app/',
  },
  {
    image: './imgs/2.png',
    name: 'Galaxy Guardian',
    description: 'Small game with vanilla Javascript, OOP principles.',
    link: 'https://planet-guard.vercel.app/',
  },
  {
    image: './imgs/1.png',
    name: 'CryptoLand',
    description: 'Crypto information page,RESTful apis, managing remote state with Redux Toolkit',
    link: 'https://cryptoland-psi.vercel.app/',
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Stars
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      document.body.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div>
      <Header/>
    <div className="carousel">
      <Card
        image={cards[currentIndex].image}
        name={cards[currentIndex].name}
        description={cards[currentIndex].description}
        link={cards[currentIndex].link}
      />
      
    </div>
    <div className="navigation">
        <button onClick={prevCard}>Previous</button>
        <button onClick={nextCard}>Next</button>
      </div>
      <div>
        <ContactCard/>
      </div>
    </div>
  );
};

export default App;