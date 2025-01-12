import { SubmitButton } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import React from "react";

const createProfileAction = async (formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  console.log(firstName);
};

function Create() {
  return (
    <section>
      <h1 className="text-2xl capitalize mb-8 font-semibold">New User</h1>
      <div className="border rounded-sm max-w-lg p-8">
        <form action={createProfileAction}>
          <FormInput id="firstName" name="firstName" type="text" />
          <SubmitButton />
        </form>
      </div>
    </section>
  );
}

export default Create;
