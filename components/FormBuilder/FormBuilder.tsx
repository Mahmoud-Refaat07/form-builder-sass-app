"use client";

import { Form } from "@/lib/generated/prisma/client";
import PreviewDialogButton from "./PreviewDialogButton";
import SaveFormButton from "./SaveFormButton";
import PublishFormButton from "./PublishFormButton";
import Designer from "./Designer";

const FormBuilder = ({ form }: { form: Form }) => {
  return (
    <main className="flex flex-col w-full">
      <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
        <h2 className="truncate font-medium">
          <span className="text-muted-foreground">Form:</span>
          {form.name}
        </h2>
        <div className="flex items-center gap-2">
          <PreviewDialogButton />
          {!form.published && (
            <>
              <SaveFormButton />
              <PublishFormButton />
            </>
          )}
        </div>
      </nav>
      <div className="flex w-full grow items-center justify-center relative overflow-y-auto h-170  bg-accent bg-[url(/brick-wall.svg)]">
        <Designer />
      </div>
    </main>
  );
};

export default FormBuilder;
