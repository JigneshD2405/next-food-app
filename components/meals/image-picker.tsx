"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import classes from "./image-picker.module.css";
interface ImagePickerProps {
  label: string;
  name: string;
}

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>();
  function handlePicClick() {
    imageInputRef?.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader?.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage as string} alt="Image picked by user" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png ,image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={(e) => handleImageChange(e)}
          required
        />
        <button className={classes.button} type="button" onClick={handlePicClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
