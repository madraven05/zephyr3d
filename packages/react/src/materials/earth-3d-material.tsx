import { shaderMaterial } from "@react-three/drei";
import { extend, ReactThreeFiber } from "@react-three/fiber";
import { Texture } from "three";

export type Earth3DMaterialProps = {
  baseTexture: Texture;
  cloudTexture?: Texture;
  normalMap?: Texture;
  specularMap?: Texture;
};

export const Earth3DMaterial = shaderMaterial(
  {
    baseTexture: null,
    cloudTexture: null,
    normalMap: null,
    specularMap: null,
  },
  // vertex shader
  `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
    `,
  // Fragment Shader
  `
  uniform sampler2D baseTexture;
  uniform sampler2D cloudTexture;
  uniform sampler2D normalMap;
  uniform sampler2D specularMap;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vec4 baseColor = texture2D(baseTexture, vUv);
    vec4 cloudColor = texture2D(cloudTexture, vUv);

    vec4 finalColor = mix(baseColor, vec4(1.0, 1.0, 1.0, 1.0), cloudColor.r);

    // Applying normal map
    
    vec3 normal = normalize(texture2D(normalMap, vUv).xyz * 2.0 - 1.0);
    vec3 lightDir = normalize(vec3(10.0, 10.0, 10.0) - vPosition);
    float diffuse = max(dot(normal, lightDir), 0.0);
    finalColor.rgb += diffuse;


    // Apply specular map (if provided)
    
    float specularStrength = texture2D(specularMap, vUv).r;
    vec3 viewDir = normalize(-vPosition);
    vec3 reflectDir = reflect(-normalize(vec3(10.0, 10.0, 10.0) - vPosition), vNormal);
    float specular = pow(max(dot(viewDir, reflectDir), 0.0), 16.0) * specularStrength;
    finalColor.rgb += specular;

    gl_FragColor = finalColor;
  }
  `
);
// Extend JSX to include the new material
declare global {
  namespace JSX {
    interface IntrinsicElements {
      earth3DMaterial: ReactThreeFiber.Object3DNode<
        typeof Earth3DMaterial & Earth3DMaterialProps,
        typeof Earth3DMaterial
      >;
    }
  }
}

extend({ Earth3DMaterial });
