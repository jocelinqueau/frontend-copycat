import * as tf from '@tensorflow/tfjs';
import convert from 'color-convert';

export type RGB = [number, number, number];


interface Colors {
  rgb: number[][]
  hex: string[]
  hsl: number[][]
}

export const getDominantShades = async (image: HTMLImageElement, k: number = 2): Promise<Colors> => {
  // map an image to list of vectors, ie a matrix or a tensor
  const tensor = tf.browser.fromPixels(image);
  const resized = tf.image.resizeBilinear(tensor, [100, 100]);
  console.log("resized", resized);
  resized.print();

  const inputFlat = resized.reshape([-1, 3]);
  console.log("inputFlat", inputFlat);
  inputFlat.print();

  let centroids = tf.randomUniform([k, 3]);
  console.log("centroids", centroids);
  centroids.print();

  let assignments = tf.zeros([inputFlat.shape[0]]).toInt();
  console.log("assignments", assignments);
  assignments.print();

  for (let i = 0; i < 10; i++) {
    const distances = tf.sub(inputFlat.expandDims(1), centroids.expandDims(0)).square().sum(2);
    assignments = distances.argMin(1);
    centroids = tf.stack(
      Array.from({ length: k }, (_, c) => {
        const mask = assignments.equal(c).expandDims(1);
        const cluster = inputFlat.mul(mask);
        const count = mask.sum(0).toFloat();
        return cluster.sum(0).div(count);
      })
    );
  }

  console.log("centroids", centroids);
  centroids.print();

  
  const rbgs = centroids.arraySync() as RGB[]
  const hexa = rbgs.map(rgb => convert.rgb.hex(rgb))
  const hsl = hexa.map(hex => convert.hex.hsl(hex))
  return {
    rgb: rbgs,
    hex: hexa,
    hsl: hsl
  }
}
