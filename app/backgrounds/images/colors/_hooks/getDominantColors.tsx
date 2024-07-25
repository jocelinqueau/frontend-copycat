import * as tf from '@tensorflow/tfjs';
import convert from 'color-convert';

export type RGB = [number, number, number];

interface Colors {
  rgb: number[][]
  hex: string[]
  hsl: number[][]
}

export const getDominantColors = async (image: HTMLImageElement, k: number = 5): Promise<Colors> => {
  const tensor = tf.browser.fromPixels(image);
  const resized = tf.image.resizeBilinear(tensor, [100, 100]);
  const inputFlat = resized.reshape([-1, 3]);

  let centroids = tf.randomUniform([k, 3]);

  let assignments = tf.zeros([inputFlat.shape[0]]).toInt();

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

  const rgbValues = centroids.arraySync() as RGB[];
  const filteredColors = rgbValues.filter(rgb => {
    const [h, s, l] = convert.rgb.hsl(rgb);
    return s > 20 && l > 20 && l < 80; // Adjust saturation and lightness thresholds as needed
  });

  const hexValues = filteredColors.map(rgb => convert.rgb.hex(rgb));
  const hslValues = hexValues.map(hex => convert.hex.hsl(hex));

  return {
    rgb: filteredColors,
    hex: hexValues,
    hsl: hslValues
  };
}