import React from "react";

import fetchImages from "Api/pictures";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem.styled";
import { Button } from "components/Button/Button.styled";
import { ImageGallery } from "./ImageGallery.styled";
import Skeleton from "../Skeleton/Skeleton";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default class ProductsList extends React.Component {
  state = {
    products: [],
    totalPages: 0,
    pageNumber: 1
    perPage: 30,
    currentHits: 0,
    currentPage: 1,
    errorMessage: null,
    status: STATUS.IDLE,
  };

  async componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState(
        {
          skip: 0,
          products: [],
        },
        () => {
          this.fetchProducts();
        }
      );
    }

    if (prevState.currentPage !== this.state.currentPage) {
      this.fetchProducts();
    }
  }

  handleLoadMore = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1,
      skip: prevState.skip + this.state.limit,
    }));
  };

  fetchProducts = async () => {
    const { skip, limit } = this.state;
    const { searchQuery } = this.props;

    try {
      await this.setState({ status: STATUS.PENDING });

      const { total, products } = await getProducts({
        searchQuery,
        skip,
        limit,
      });

      if (!products.length) {
        throw new Error("No matches found!");
      }

      this.setState((prevState) => ({
        products: [...prevState.products, ...products],
        totalPages: Math.ceil(total / limit),
        errorMessage: null,
        status: STATUS.RESOLVED,
      }));
    } catch (error) {
      this.setState({ status: STATUS.REJECTED, errorMessage: error.message });
    }
  };

  render() {
    const { currentPage, totalPages, status, errorMessage, products } =
      this.state;

    const isLoadMoreButtonShow = products.length && currentPage < totalPages;

    if (status === STATUS.PENDING) {
      return <Skeleton />;
    }

    if (status === STATUS.RESOLVED) {
      return (
        <ImageGallery>
       
      </ImageGallery>
      );
    }

    if (status === STATUS.REJECTED) {
      return <ErrorMessage>{errorMessage}</ErrorMessage>;
    }
  }
}