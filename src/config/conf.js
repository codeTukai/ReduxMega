const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_ID),
    appwriteProjectDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteProjectCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteProjectBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf
