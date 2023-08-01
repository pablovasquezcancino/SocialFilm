import React, { useState } from "react";
import axios from axios;



const pruebaimg = () => {
    const [file, setFile] = useState("");
    const [imageName, setImageName] =useState();

    const submit = async event => {
        event.preventDefault();

        const formData = new FormData()
        formData.append('image', file)
        
        const result = await axios.post('/api/images', formData, { Headers: {'content-type': 'multipart/form-data'}})
        setImageName(result.data.imageName)
    }
  return (
    <div>
      <form encType="multipart" onSubmit={submit}>
        <input type="file" filename={file} name="file" onChange={e => setFile(e.target.files[0])} accept="image/*" />
        <button type="submit"></button>
      </form>
      {image && <img src={image}/>}
    </div>
  );
};

export default pruebaimg;
