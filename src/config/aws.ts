export const awsConfig = {
  region: process.env.VITE_AWS_REGION || '', // Provide default values or validation if necessary
  credentials: {
    accessKeyId: process.env.VITE_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY || '',
  },
  bucketName: process.env.VITE_AWS_BUCKET_NAME || '',
};
