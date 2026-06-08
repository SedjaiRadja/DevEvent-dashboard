"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import CustomForm from "@/components/ui/forms/form" 
const EditUser = () => {
  return (
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="mb-4">Edit User</SheetTitle>
      <SheetDescription>
        <CustomForm />
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
  )
}
export default EditUser;