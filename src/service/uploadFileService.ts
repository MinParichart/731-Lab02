// Task 9 Lab 3 --------------------------------------------------------------
// import { PutObjectCommand } from "@aws-sdk/client-s3";
// import { s3Client } from '../awsConfig';

// export async function uploadFile(
//   bucket: string,
//   filePath: string,
//   file: Express.Multer.File
// ): Promise<void> {

//   const params = {
//     Bucket: bucket,
//     Key: filePath,
//     Body: file.buffer,
//     ContentType: file.mimetype,
//   };

//   try {
//     const data = await s3Client.send(new PutObjectCommand(params));
//     console.log("File uploaded successfully:", data);
//   } catch (error) {
//     console.error("Error uploading file:", error);
//   }
// }

// Task 10 Lab 3 --------------------------------------------------------------
// import { PutObjectCommand } from "@aws-sdk/client-s3";
// import { s3Client } from '../awsConfig';

// export async function uploadFile(
//   bucket: string,
//   filePath: string,
//   file: Express.Multer.File
// ): Promise<string> {

//   const params = {
//     Bucket: bucket,
//     Key: filePath,
//     Body: file.buffer,
//     ContentType: file.mimetype,
//   };

//   try {
//   const data = await s3Client.send(new PutObjectCommand(params));
//   console.log('File uploaded successfully:', data);
//   const publicUrl = `https://xqkgmbsjbovbjcxmxzrx.supabase.co/storage/v1/object/public/image/${filePath}`;
//   console.log('File uploaded successfully:', publicUrl);
//   return publicUrl;
//   } catch (error) {
//     console.error('Error uploading file:', error);
//     return 'error';
//   }
// }

// Task 11 Lab 3 --------------------------------------------------------------
// import { PutObjectCommand } from "@aws-sdk/client-s3";
// import { randomBytes } from "crypto";
// import { s3Client } from '../awsConfig';

// function generateSaltedFilename(originalName: string): string {
//   const salt = randomBytes(16).toString("hex");
//   const extension = originalName.split(".").pop();
//   return `${salt}.${extension}`;
// }

// export async function uploadFile(
//   bucket: string,
//   filePath: string,
//   file: Express.Multer.File
// ): Promise<string> {
//   const saltedFilename = generateSaltedFilename(file.originalname);
//   const saltedFilePath = `${filePath}/${saltedFilename}`;
//   const params = {
//     Bucket: bucket,
//     Key: saltedFilePath,
//     Body: file.buffer,
//     ContentType: file.mimetype,
//   };

//   try {
//     const data = await s3Client.send(new PutObjectCommand(params));
//     console.log("File uploaded successfully:", data);
//     const publicUrl = `https://xqkgmbsjbovbjcxmxzrx.supabase.co/storage/v1/object/public/image/${saltedFilePath}`;
//     console.log("File uploaded successfully:", publicUrl);
//     return publicUrl;
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     return "error";
//   }
// }

// Task 12 Lab 3 --------------------------------------------------------------
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { randomBytes } from "crypto";
import { s3Client } from '../awsConfig';

function generateSaltedFilename(originalName: string): string {
  const salt = randomBytes(16).toString("hex");
  const extension = originalName.split(".").pop();
  return `${salt}.${extension}`;
}

export async function uploadFile(
  bucket: string,
  filePath: string,
  file: Express.Multer.File
): Promise<string> {
  const saltedFilename = generateSaltedFilename(file.originalname);
  const saltedFilePath = `${filePath}/${saltedFilename}`;
  const params = {
    Bucket: bucket,
    Key: saltedFilePath,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const data = await s3Client.send(new PutObjectCommand(params));
    console.log("File uploaded successfully:", data);
    const publicUrl = `${process.env.SUPABASE_OUTPUT_URL}/${saltedFilePath}`;
    console.log("File uploaded successfully:", publicUrl);
    return publicUrl;
  } catch (error) {
    console.error("Error uploading file:", error);
    return "error";
  }
}

