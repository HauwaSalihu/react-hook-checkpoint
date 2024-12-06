import { useState } from "react";
import { Button, Modal, Input, Select, message } from "antd";
import validator from "validator";

function AddMovies(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "movies added successfully",
    });
  };
  const errorMessage = (error_message) => {
    messageApi.open({
      type: "error",
      content: error_message,
    });
  };
  // a state to hold movies information from form for our store
  const [moviesData, setmoviesData] = useState({
    id: "",
    title: "",
    rating: null,
    description: null,
    posterUrl: "",
  });

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (moviesData.title.trim().length <= 2) {
      errorMessage("please provide movies name");
      return;
    }
    if (validator.isURL(moviesData.posterUrl) === false) {
      errorMessage("please provide an image url for the movies");
      return;
    }
    if (moviesData.rating === null) {
      errorMessage("please select the movies race");
      return;
    }
    if (moviesData.description === null) {
      errorMessage("please select the movies type");
      return;
    }

    success();
    const movies_TO_ADD = {
      ...moviesData,
      id: Math.floor(Math.random() * 99999),
    };
    props.handleAddNewmovies(movies_TO_ADD);
    //reset the movies data object to its default state
    setmoviesData({
      id: "",
      title: "",
      rating: null,
      posterUrl: null,
      description: null,
    });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {contextHolder}

      <Button type="primary" onClick={showModal}>
        Add new movies
      </Button>
      <Modal
        title="Add movies Information"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <Input
            size="large"
            value={moviesData.title}
            onChange={(e) => {
              setmoviesData({ ...moviesData, title: e.target.value });
            }}
            placeholder="Enter movies name"
          />
          <Input
            size="large"
            value={moviesData.description}
            onChange={(e) => {
              setmoviesData({ ...moviesData, description: e.target.value });
            }}
            placeholder="Enter movies description"
          />
          <Input
            size="large"
            value={moviesData.posterUrl}
            onChange={(e) => {
              setmoviesData({ ...moviesData, posterUrl: e.target.value });
            }}
            placeholder="Provide movies image url"
          />
          <Select
            size="large"
            value={moviesData.rating}
            onChange={(value) =>
              setmoviesData({ ...moviesData, rating: value })
            }
            placeholder="Select movie rating"
            style={{
              width: "100%",
            }}
            // onChange={handleRace}
            options={[
              {
                value: "5 star",
                label: "5 star",
              },
              {
                value: "4 star",
                label: "4 star",
              },
              {
                value: "3 star",
                label: "3 star",
              },
              {
                value: "2 star",
                label: "2 star",
              },
              {
                value: "1 star",
                label: "1 star",
              },
            ]}
          />
        </form>
      </Modal>
    </>
  );
}

export default AddMovies;
