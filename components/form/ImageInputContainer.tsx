"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Buttons";
import { type actionFunction } from "@/utils/types";
import { LuUser } from "react-icons/lu";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text, children } = props;
  const [visible, setVisible] = useState(false);

  const userIcon = (
    <LuUser className="w-24 h-24 rounded bg-primary text-white mb-4" />
  );
  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={24}
          height={24}
          className="w-24 h-24 bg-cover rounded-md mb-4"
        />
      ) : (
        userIcon
      )}
      <Button
        variant={"outline"}
        size="sm"
        onClick={() => setVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {visible && (
        <div className="max-w-lg mb-4">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size="sm"></SubmitButton>
          </FormContainer>
        </div>
      )}
    </div>
  );
}

export default ImageInputContainer;
