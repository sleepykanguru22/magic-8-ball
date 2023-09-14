import { useState, useEffect } from "react";
export default function Vision() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const width = Math.floor(Math.random() * 10) + 300;
    const height = Math.floor(Math.random() * 10) + 300;
    const imageUrl = `https://source.unsplash.com/${width}x${height}`;
    setImageUrl(imageUrl);
  }, []);

  return (
    <div>
      <img src={imageUrl} />
    </div>
  );
}
