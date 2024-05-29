// import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, FileInput, Select, TextInput } from "flowbite-react";

const CreatePost = () => {
  return (
    <div className="p-2 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create A Post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Select A Category</option>
            <option value="technology">Technology</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="health">Health</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
            <option value="fashion">Fashion</option>
            <option value="sports">Sports</option>
            <option value="education">Education</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput type="file" accept="image/*" />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
          >
            Upload An Image
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write something amazing..."
          className="h-52 mb-12"
          required
        />
        <Button type="submit" outline gradientDuoTone="purpleToPink" size="lg">
          Publish Your Post
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
