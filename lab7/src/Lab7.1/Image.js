import { useState } from "react";
import './Image.css';

function Image() {
    const [photos, setPhotos] = useState([]);
    const [imageSize, setImageSize] = useState({ width: 600, height: 500 });

    const handleDelete = () => {
        setPhotos((prevPhotos) => prevPhotos.slice(0, -1));
    };
    const handleAdd = () => {
        const newPhoto = {
            id: Date.now(),
            src: "https://i.ibb.co/9pqKL1m/2024-09-20-124939046.png",
            alt: "2024-09-20-124939046",
        };
        setPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
    };
    const handleUpSize = () => {
        setImageSize((prevSize) => ({
            width: prevSize.width + 20,
            height: prevSize.height + 20
        }));
    };
    const handleDownSize = () => {
        setImageSize((prevSize) => ({
            width: prevSize.width - 20,
            height: prevSize.height - 20
        }));
    };

    return (
        <div className="image">
            <a href="https://miskrada.kherson.ua">
                {photos.map((photo) => (
                    <img
                        key={photo.id}
                        src={photo.src}
                        alt={photo.alt}
                        className="photoKherson"
                        style={{ width: imageSize.width, height: imageSize.height }}
                    />
                ))}
            </a>
            <div>
                <button onClick={handleDelete}>Видалити</button>
                <button onClick={handleUpSize}>Збільшити</button>
                <button onClick={handleDownSize}>Зменшити</button>
                <button onClick={handleAdd}>Додати</button>
            </div>
        </div>
    );
}

export default Image;
