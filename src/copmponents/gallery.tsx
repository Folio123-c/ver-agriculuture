import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllGalleries, selectGalleries } from '../Redux/Features/gallery';

const Gallery = () => {
  const dispatch = useDispatch();
  const galleries = useSelector(selectGalleries);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentGalleryImages, setCurrentGalleryImages] = useState([]);

  useEffect(() => {
    dispatch(fetchAllGalleries());
  }, [dispatch]);

  const openGalleryModal = (images) => {
    setCurrentGalleryImages(images);
    setModalOpen(true);
  };

  const closeGalleryModal = () => {
    setModalOpen(false);
    setCurrentGalleryImages([]);
  };

  return (
    <div>
      <h1 className='text-5xl font-bold py-10 text-center'>Gallery</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 px-32">
        {galleries.map(({ _id, thumbnailImage, title, images }) => (
          <div key={_id}>
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              src={thumbnailImage}
              alt={title}
            />
            <h3 className="text-lg font-medium mt-2">{title}</h3>
            <button 
              className="block w-full mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
              onClick={() => openGalleryModal(images)}
            >
              View Gallery
            </button>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg overflow-y-auto max-h-full relative">
            <button 
              className="absolute top-4 right-4 text-red-500"
              onClick={closeGalleryModal}
            >
              Close
            </button>
            {currentGalleryImages.length > 0 ? (
              <div className="flex flex-wrap border-2 border-green-400 mt-8">
                {currentGalleryImages.map((imageUrl, index) => (
                  <div key={index} className="w-1/4 p-2">
                    <img 
                      src={imageUrl} 
                      alt={`Image ${index + 1}`} 
                      className="w-full h-auto" 
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-lg font-medium mt-8">
                No images in gallery.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
