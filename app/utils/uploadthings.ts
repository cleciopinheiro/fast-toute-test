import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
import '@uploadthing/react/styles.css';
 
import type { OurFileRouter } from "../api/uploadthing/core";
 
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();