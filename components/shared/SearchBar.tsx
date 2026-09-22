import { SearchIcon } from "lucide-react";

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function SearchBar() {
  return (
    <Field className="w-full md:w-[31rem]">
      <InputGroup className="rounded-3xl py-5 px-3">
        <InputGroupInput id="inline-start-input" placeholder="Search..."/>
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
