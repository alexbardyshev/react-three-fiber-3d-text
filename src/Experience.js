import {Center, OrbitControls, Text3D, useMatcapTexture} from '@react-three/drei'
import {Perf} from 'r3f-perf'
// import {useState} from "react";
import * as THREE from "three"
import {useEffect} from "react";

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32)
const material = new THREE.MeshMatcapMaterial()

export default function Experience() {
  const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)

  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding
    matcapTexture.needsUpdate = true

    material.matcap = matcapTexture
    material.needsUpdate = true
  }, []);


  // const [torusGeometry, setTorusGeometry] = useState();
  // const [material, setMaterial] = useState();

  return <>

    <Perf position="top-left"/>

    <OrbitControls makeDefault/>

    {/*<torusGeometry ref={ setTorusGeometry } args={[1, 0.6, 16, 32]}/>*/}
    {/*<meshMatcapMaterial ref={ setMaterial } matcap={matcapTexture}/>*/}

    <Center>
      <Text3D
        material={ material }
        font="./fonts/helvetiker_regular.typeface.json"
        size={0.75}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}

      >
        OLEKSII.DEV
      </Text3D>
    </Center>

    {[...Array(100)].map(( value, index ) =>
      <mesh
        key={index}
        geometry={ torusGeometry }
        material={ material }
        position={[
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ]}
        scale={0.2 + Math.random() * 0.2}
        rotation={[
          Math.random() + Math.PI,
          Math.random() + Math.PI,
          0
        ]}
      />
    )}

  </>
}
