import { ManageChecklist } from "./manage-checklist";
import { SectionHeading } from "../section-heading";

export function ManageContent() {
  return (
    <div>
      <SectionHeading title="Create & Manage Courses Easily." titleClassName="max-w-md">
        <strong className="font-semibold text-foreground">ByteSpace</strong> supports individuals or
        entities in the creation, publication, and administration of educational courses.
      </SectionHeading>
      <ManageChecklist />
    </div>
  );
}