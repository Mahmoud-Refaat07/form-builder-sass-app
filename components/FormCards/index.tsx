import { GetForms } from "@/actions/form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Form } from "@/lib/generated/prisma/client";
import { formatDistance } from "date-fns";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaEdit, FaWpforms } from "react-icons/fa";
import { LuView } from "react-icons/lu";

export function FormCardSkeleton() {
  return <Skeleton className="border-2 border-primary-/20 h-47.5 w-full" />;
}

export async function FormCards() {
  const forms = await GetForms();

  return (
    <>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </>
  );
}

export function FormCard({ form }: { form: Form }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate font-bold">{form.name}</span>
          {form.published && <Badge>Published</Badge>}
          {!form.published && <Badge variant={"destructive"}>Draft</Badge>}
        </CardTitle>
        <CardDescription className="flex items-center justify-between text-muted-foreground text-sm">
          {formatDistance(form.createdAt, new Date(), {
            addSuffix: true,
          })}
          {form.published && (
            <span className="flex items-center gap-2">
              <LuView className="text-muted-foreground" />
              <span>{form.visits.toLocaleString("en")}</span>

              <FaWpforms className="text-muted-foreground" />
              <span>{form.submissions.toLocaleString("en")}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="h[20px] truncate text-sm text-muted-foreground">
        {form.description || "No description"}
      </CardContent>
      <CardFooter className="flex flex-col">
        {form.published && (
          <Button className="w-full mt-2 text-md gap-4">
            <Link
              href={`/forms/${form.id}`}
              className="flex justify-center items-center"
            >
              View submissions <BiRightArrowAlt />
            </Link>
          </Button>
        )}
        {!form.published && (
          <Button className="w-full mt-2 text-md gap-4">
            <Link
              href={`/builder/${form.id}`}
              className="flex justify-center items-center gap-2"
            >
              Edit form <FaEdit />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
