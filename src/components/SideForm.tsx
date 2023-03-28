import React from "react";

type HandleChange = (value: string) => void;

interface FormProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonTextChange: HandleChange;
  onTitleChange: HandleChange;
  onDescriptionChange: HandleChange;
  onImageUrlChange: HandleChange;
}

const SideForm = function ({
  title,
  description,
  buttonText,
  onTitleChange,
  onDescriptionChange,
  onButtonTextChange,
  onImageUrlChange,
}: FormProps) {
  return (
    <div className="side-form">
      <div>
        <h3>Hero</h3>
        <form className="form">
          <label>
            <span>Title</span>

            <input
              value={title}
              onChange={(e) => onTitleChange(e.target.value)}
            ></input>
          </label>

          <label>
            <span>Description</span>
            <textarea
              value={description}
              onChange={(e) => onDescriptionChange(e.target.value)}
              rows={10}
            ></textarea>
          </label>

          <label>
            <input
              placeholder="Image url"
              onChange={(e) => onImageUrlChange(e.target.value)}
            ></input>
          </label>

          <label>
            <span>Button</span>
            <input
              value={buttonText}
              onChange={(e) => onButtonTextChange(e.target.value)}
            ></input>

            <input placeholder="Button Url"></input>
          </label>

          <label>
            <input value={"View Product Demo"}></input>
            <input value={"#"}></input>
          </label>
        </form>
      </div>
    </div>
  );
};

export default SideForm;
