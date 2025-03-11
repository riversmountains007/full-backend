import { v2 as cloudinary } from 'cloudinary';
import  fs from "fs"




    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET 
         // Click 'View API Keys' above to copy your API secret
    });
    
    const uploadOnCloudinary = async (localFilePath) => {
     
     if(!localFilePath){
      console.log("Please provide a file path")
        return
     }
        // Upload an image
     const uploadResult = await cloudinary.uploader
     .upload(
         localFilePath, {
             public_id: 'files',
             resource_type:'auto',
         }
     )
     .catch((error) => {
        fs.unlinkSync(localFilePath) // remove locally saved temp file as the upload operation got failed.
        
        if(!fs.existsSync(localFilePath)){
            console.log("File not found",error)
            return
           }
     });
  
  console.log(uploadResult);
  return uploadResult
    }

    
    export default uploadOnCloudinary