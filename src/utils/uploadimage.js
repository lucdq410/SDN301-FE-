import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../configs";
const uploadimage = () => {
  const uploadImage = async (file) => {
    const storeRef = ref(storage, `files/${v4()}`);
    console.log("storeRef: ", storeRef);
    const snapshot = await uploadBytes(storeRef, file);
    console.log("snapshot: ", snapshot);
    const dowURL = await getDownloadURL(snapshot.ref);
    console.log("dowURL: ", dowURL);

    return dowURL;
  };
  return {
    uploadImage,
  };
};

export default uploadimage;
