// Task 9 Lab 3 --------------------------------------------------------------
// import { S3Client } from "@aws-sdk/client-s3";

// export const s3Client = new S3Client({
//   credentials: {
//     accessKeyId: "c2c9bd6d0b321ded6dfc706edf708f3e",
//     secretAccessKey: "88e4d553b4de899ca51b4f7d7adf917d907b58d7986282ddc488376020fa4f3c",
//   },
//   endpoint: "https://xqkgmbsjbovbjcxmxzrx.supabase.co/storage/v1/s3",
//   region: "ap-southeast-1",
//   forcePathStyle: true,
// });

// Task 12 Lab 3 --------------------------------------------------------------
import { S3Client } from "@aws-sdk/client-s3";
import dotenv from 'dotenv';
dotenv.config();

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const endpoint = process.env.SUPABASE_ENDPOINT_URL;
const region = process.env.AWS_REGION;

if (!accessKeyId || !secretAccessKey || !endpoint || !region) {
    throw new Error("Missing required environment variables for AWS S3 configuration");
  }

export const s3Client = new S3Client({
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
  endpoint,
  region,
  forcePathStyle: true,
});
