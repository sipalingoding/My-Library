import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { createProfileAction } from "@/utils/actions";
import React from "react";

function Create() {
  return (
    <section>
      <h1 className="text-2xl capitalize mb-8 font-semibold">New User</h1>
      <div className="border rounded-sm  p-8">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4">
            <FormInput id="firstName" name="firstName" type="text" />
            <FormInput id="lastName" name="lastName" type="text" />
            <FormInput id="userName" name="userName" type="text" />
          </div>
          <SubmitButton />
        </FormContainer>
      </div>
    </section>
  );
}

export default Create;
