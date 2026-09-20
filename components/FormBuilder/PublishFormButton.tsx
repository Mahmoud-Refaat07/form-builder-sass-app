import React from "react";
import { Button } from "../ui/button";
import { MdOutlinePublish } from "react-icons/md";

function PublishFormButton() {
  return (
    <Button
      variant={"outline"}
      className="gap-2 text-white bg-linear-to-r from-indigo-400 to-cyan-400 cursor-pointer"
    >
      <MdOutlinePublish className="w-4 h-4" />
      Publish
    </Button>
  );
}

export default PublishFormButton;
