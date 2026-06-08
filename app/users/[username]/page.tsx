import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {CardList} from "../../../components/CardList"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {BadgeCheck} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import {Badge} from "../../../components/ui/badge"
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
import {Button} from "../../../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EditUser from "../../../components/EditUser"
import {AppLineChart} from "../../../components/AppLineChart"
const userpage = () => {
  return (
    <>
    <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/users">users</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Sedjai Radja</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
{/* container */}
<div className="mt-4 flex flex-col xl:flex-row gap-8">
  {/* left */}
  <div className="w-full xl:w-1/3 space-y-6">
    {/*userBadge container */}
    <div className="bg-primary-foreground p-4 rounded-lg">
      <h1 className="text-xl font-semibold">user Badge</h1>
      <div className="flex gap-4 mt-4">
        <HoverCard>
          <HoverCardTrigger>
            <BadgeCheck size={37} className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2" />
          </HoverCardTrigger>
          <HoverCardContent>
            <h1 className="font-bold mt-2">Verified Account</h1>
            <p className="text-sm text-muted-foreground">this user has been verified by the admin.</p>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>


    {/*information container */}
    <div className="bg-primary-foreground p-4 rounded-lg">
      <div className ="flex items-center justify-between">
        <h1 className="text-xl font-semibold">User Information</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Edit Profile</Button>
          </SheetTrigger>
          <EditUser />
        </Sheet>
      </div>
      <div className="space-y-4 mt-4">
        <div className="flex flex-col gap-2 mb-8">
          <p className="text-sm text-muted-foreground">profile completion</p>
          <Progress value={60} />
        </div>
        <div className="flex items-centergap-2">
        <span className="font-bold">Username :</span>
        <span>sedjai.radja</span>
        </div>
        <div className="flex items-centergap-2">
        <span className="font-bold">email :</span>
        <span>sedjai.radja@gmail.com</span>
        </div>
        <div className="flex items-centergap-2">
        <span className="font-bold">number :</span>
        <span>0797235617</span>
        </div>
        <div className="flex items-centergap-2">
        <span className="font-bold">role :</span>
        <Badge className="ml-3">Admin</Badge>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-3">joined on feb,2026</p>
    </div>



    {/*card list container */}
    <div className="bg-primary-foreground p-4 rounded-lg">
      <CardList title="recent transactions" />
    </div>
  </div>

  {/* right */}
  <div className="w-full xl:w-2/3 space-y-6">
   {/*user card container */}
    <div className="bg-primary-foreground p-4 space-y-2 rounded-lg">
      <div className="flex items-center gap-2 ">
        <Avatar className="size-12">
          <AvatarImage src="/logo.png"/>
          <AvatarFallback>SR</AvatarFallback>
        </Avatar>
        <h1 className="font-xl font-semibold">Sedjai Radja</h1>
        
      </div>
      <p className="text-sm text-muted-foreground">the best develloper in the whole world</p>
    </div>

     {/*chart container */}
    <div className="bg-primary-foreground p-4 rounded-lg">
      <AppLineChart />
    </div>
    </div>
</div>
</>
  );
}
export default userpage;