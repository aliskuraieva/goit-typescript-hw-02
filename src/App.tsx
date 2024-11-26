import { useEffect, useState } from "react";

import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

import { fetchImages } from "./api/unsplash-api";
import { Image, ImgInfo } from "./App.types";

export interface ResponseFetchImages {
  results: Image[];
  total_pages: number;
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImageInfo, setModalImageInfo] = useState<ImgInfo | null>(null);

  const handleSubmit = async (newValue: string) => {
    setImages([]);
    setPage(1);
    setSearchValue(newValue);
  };

  const handleChangePage = () => {
    console.log(handleChangePage);
    setPage(page + 1);
  };

  const onOpenModal = (imageData: ImgInfo) => {
    setModalImageInfo(imageData);
    setModalIsOpen(true);
  };

  const onCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (searchValue === "") {
      return;
    }
    async function getImages() {
      try {
        setLoader(true);
        setError(false);
        const { results, total_pages }: ResponseFetchImages = await fetchImages(
          searchValue,
          page
        );
        if (page === 1) {
          setTotalPages(total_pages);
        }
        setImages((prevPhotos) => {
          return [...prevPhotos, ...results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getImages();
  }, [page, searchValue]);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} onOpenModal={onOpenModal} />
      )}

      {error && (
        <ErrorMessage
          message={
            "Whoops, something went wrong! Please try reloading this page!"
          }
        />
      )}
      {loader && <Loader />}
      {images.length > 0 && !loader && page < totalPages && (
        <LoadMoreBtn onClick={handleChangePage} />
      )}
      {modalIsOpen && (
        <ImageModal
          imgModal={modalImageInfo}
          onCloseModal={onCloseModal}
          modalIsOpen={modalIsOpen}
        />
      )}
    </div>
  );
}

export default App;
