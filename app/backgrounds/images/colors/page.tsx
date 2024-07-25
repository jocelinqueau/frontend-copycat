/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import Dropzone, { DropzoneState } from 'shadcn-dropzone';
import { Upload } from 'lucide-react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import round from 'lodash/round';
import convert from 'color-convert';
import {closest} from 'color-2-name'
import { CircleX } from 'lucide-react';

export type RGB = [number, number, number];


interface Colors {
  rgb: number[][]
  hex: string[]
  hsl: number[][]
}

const getDominantColors = async (image: HTMLImageElement, k: number = 2): Promise<Colors> => {
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

const Page = () => {
  const [file, setFile] = useState<File | null>(null);
  const [hexasColors, setHexasColors] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>('');

  useEffect(() => {
    console.log("file", file);
    if (file) {
      const image = new Image();
      image.src = URL.createObjectURL(file);
      image.onload = async () => {
        const colors = await getDominantColors(image);
        const hexa = colors.hex
        setHexasColors(hexa);
      };
    }
  }, [file?.name]);

  const _closest = selectedColor ? closest(`#${selectedColor}`) : null
  console.log("_closest", _closest)

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4" 
    style={{ 
      background:  selectedColor && `linear-gradient(to bottom, #${selectedColor}, transparent)`
      }}>

      <Dropzone
        onDrop={(acceptedFiles: File[]) => {
          if (acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
          }
        }}
        maxFiles={1}
        accept={
          {
            'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp']
          }
        }
      >
        {(dropzone: DropzoneState) => (
          <div className="flex flex-col items-center justify-center">
            <div className='flex flex-row items-center justify-center gap-2'>
              <Upload />
              {
                dropzone.isDragAccept ? (
                  <div className='text-sm font-medium'>Drop your files here!</div>
                ) : (
                  <div className='flex items-center flex-col gap-1.5'>
                    <div className='flex items-center flex-row gap-0.5 text-sm font-medium'>
                      Upload files
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        )}
      </Dropzone>
      {file && (
        <div className="rounded-sm overflow-hidden relative">
          <div className='absolute top-2 right-2 text-muted opacity-50 cursor-pointer hover:opacity-100' 
            onClick={() => {
              setFile(null)
              setHexasColors([])
              setSelectedColor('')
            }}
          >
            <CircleX className='w-6 h-6' />
          </div>
          <img src={URL.createObjectURL(file)} alt="Uploaded file" className="max-w-xs" />
        </div>
      )}


      {hexasColors.length > 0 && (
        <div className="rounded-sm overflow-hidden">
          <div className="flex flex-row items-center justify-center gap-2">
            {hexasColors.map((color, index) => (
              <div onClick={() => setSelectedColor(color)} key={index} className="w-8 h-8 border border-gray-200 opacity-50 hover:opacity-100 rounded-sm cursor-pointer" style={{ backgroundColor: `#${color}` }} />
            ))}
          </div>
        </div>
      )}
      {!!selectedColor.length && (
        <div>
          the selected color is {`#${selectedColor}`} {_closest ? <>and seems to be <span className='font-semibold underline' style={{color: `#${selectedColor}`}}>{_closest.name}</span></> : ''}
        </div>
      )}
    </div>
  )
};

export default Page;