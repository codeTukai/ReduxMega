import conf from '../config/conf'
import{Client, ID,  Databases, Storage, Query} from 'appwrite';

export class Service{
   client = new Client()
   databases;
   bucket;

   constructor(){
     this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
   }

   async createPost({title, slug, content, featuredImage, status, userId}){
    try {
        return await this.databases.createDocument(
            conf.appwriteProjectDatabaseId,
            conf.appwriteProjectCollectionId,
            slug, 
            {
                title,
                content,
                featuredImage,
                status,
                userId
            })
        
    } catch (error) {
         console.log("Appwrite service :: createPost :: error", error);
         throw error;
    }
   }

   async updatePost(slug, {title, content, featuredImage, status}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteProjectDatabaseId,
            conf.appwriteProjectCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
        )
    } catch (error) {
         console.log("Appwrite service :: updatePost :: error", error);
    }
   }

   async deletePost(slug){
   try {
     await this.databases.deleteDocument(
        conf.appwriteProjectDatabaseId,
        conf.appwriteProjectCollectionId,
        slug
    )
    return true
   } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);
    return false
   }
   }

   async getPost(slug){
    try {

        return await this.databases.getDocument(
            conf.appwriteProjectDatabaseId,
            conf.appwriteProjectCollectionId,
            slug
        )
        
    } catch (error) {
          console.log("Appwrite service :: getPost :: error", error);
        return false
    }
   }

   async getAllPost(queries = [Query.equal("status", "active")]){
    try {
        return await this.databases.listDocuments(
            conf.appwriteProjectDatabaseId,
            conf.appwriteProjectCollectionId,
            queries
        )
    } catch (error) {
         console.log("Appwrite service :: getAllPost :: error", error);
        return false
        
    }
   }

   // File upload file

   async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteProjectBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
       console.log("Appwrite service :: uploadFile :: error", error);
        return false
    }
   }
   async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile(
            conf.appwriteProjectBucketId,
            fileId
        )
        return true
    } catch (error) {
         console.log("Appwrite service :: deleteFile :: error", error);
        return false
    }
   }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteProjectBucketId,
            fileId
        )
    }
}

const service = new Service();

export default service