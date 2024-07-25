/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import Dropzone, { DropzoneState } from 'shadcn-dropzone';
import { Upload } from 'lucide-react';
import { closest } from 'color-2-name'
import { CircleX } from 'lucide-react';
import { getDominantShades } from './_hooks/getDominantShades';
import { getDominantColors } from './_hooks/getDominantColors';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes'


const Page = () => {
  const [file, setFile] = useState<File | null>(null);
  const [hexasColors, setHexasColors] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [useDominantColors, setUseDominantColors] = useState<boolean>(true);
  const [useDominantShades, setUseDominantShades] = useState<boolean>(false);
  const [shades, setShades] = useState<string[]>([]);
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      if (event.clipboardData && event.clipboardData.files.length > 0) {
        const file = event.clipboardData.files[0];
        console.log("here", file);
        if (file.type.startsWith('image/')) {
          setFile(file);
        }
      }
    };

    window.addEventListener('paste', handlePaste);

    return () => {
      window.removeEventListener('paste', handlePaste);
    };
  }, []);

  useEffect(() => {
    console.log("file", file);
    console.log("filename", file?.name);
    if (file) {
      const image = new Image();
      image.src = URL.createObjectURL(file);
      image.onload = async () => {
        const colors = await getDominantColors(image);
        const shades = await getDominantShades(image);
        setHexasColors(colors.hex);
        setShades(shades.hex);

      };
    }
  }, [file?.name, file?.lastModified]);

  const _closest = selectedColor ? closest(`#${selectedColor}`) : null
  console.log("_closest", _closest)

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4"
      style={{
        background: selectedColor && `linear-gradient(to bottom, #${selectedColor}, ${theme === 'dark' ? '#00000033' : '#ffffffB3'})`
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
                      Paste or upload an image
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        )}
      </Dropzone>
      {file && (
        <div className='flex gap-2'>
          <Switch
            checked={useDominantColors}
            onCheckedChange={setUseDominantColors}
          />
          <div>
            {useDominantColors ? 'Use dominant colors' : 'Use dominant shades'}
          </div>
        </div>
      )}
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
          <img src={URL.createObjectURL(file)} alt="Uploaded file" className="max-w-screen-sm" />
        </div>
      )}


      {
        useDominantColors && hexasColors.length > 0 && (
          <div className="rounded-sm overflow-hidden">
            <div className="flex flex-row items-center justify-center gap-2">
                {hexasColors.map((color, index) => (
                  <div onClick={() => setSelectedColor(color)} key={index} className="w-8 h-8 border border-gray-200 opacity-50 hover:opacity-100 rounded-sm cursor-pointer" style={{ backgroundColor: `#${color}` }} />
                ))}
              </div>
          </div>
        )
      }
      {
        !useDominantColors && shades.length > 0 && (
          <div className="rounded-sm overflow-hidden">
            <div className="flex flex-row items-center justify-center gap-2">
              {shades.map((color, index) => (
                <div onClick={() => setSelectedColor(color)} key={index} className="w-8 h-8 border border-gray-200 opacity-50 hover:opacity-100 rounded-sm cursor-pointer" style={{ backgroundColor: `#${color}` }} />
              ))}
            </div>
          </div>
        )
      }
      {!!selectedColor.length && (
        <div>
          the selected color is {`#${selectedColor}`} {_closest ? <>and seems to be <span className='font-semibold underline' style={{ color: `#${selectedColor}` }}>{_closest.name}</span></> : ''}
        </div>
      )}
    </div>
  )
};

export default Page;