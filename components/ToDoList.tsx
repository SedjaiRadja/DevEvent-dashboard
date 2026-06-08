"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import {Card} from "@/components/ui/card"
import {Checkbox} from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {CalendarIcon} from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {useState} from "react";
import {format} from "date-fns"
 const ToDoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  
  return (

  <div>
    <h1 className="text-lg font-medium mb-6">ToDo List</h1>   
    {/* calendar */}
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline" className="w-full">
        <CalendarIcon />
          {date ? format(date,"PPP") : <span>pick a date.</span>}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0">
      <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      />
      </PopoverContent>
  </Popover>
  {/* list */}
  <ScrollArea className="max-h-[400px] overflow-y-auto p-2 mt-5">
    <div className="flex flex-col gap-3">
      <Card className="m-1 mt-1">
        <div className="flex items-center gap-3">
          <Checkbox id="item1" className="ml-4" />
          <Label htmlFor="item1">
            go to gym
          </Label>
        </div>
      </Card>
      <Card className="m-1 mt-0">
        <div className="flex items-center gap-3">
          <Checkbox id="item1" className="ml-4" />
          <Label htmlFor="item1">
            go to gym
          </Label>
        </div>
      </Card>
      <Card className="m-1 mt-0">
        <div className="flex items-center gap-3">
          <Checkbox id="item1" className="ml-4" />
          <Label htmlFor="item1">
            go to gym
          </Label>
        </div>
      </Card>
      <Card className="m-1 mt-0">
        <div className="flex items-center gap-3">
          <Checkbox id="item1" className="ml-4" />
          <Label htmlFor="item1">
            go to gym
          </Label>
        </div>
      </Card>
      <Card className="m-1 mt-">
        <div className="flex items-center gap-3">
          <Checkbox id="item1" className="ml-4" />
          <Label htmlFor="item1">
            go to gym
          </Label>
        </div>
      </Card>
      <Card className="m-1 mt-">
        <div className="flex items-center gap-3">
          <Checkbox id="item1" className="ml-4" />
          <Label htmlFor="item1">
            go to gym
          </Label>
        </div>
      </Card>
      <Card className="m-1 mt-">
        <div className="flex items-center gap-3">
          <Checkbox id="item1" className="ml-4" />
          <Label htmlFor="item1">
            go to gym
          </Label>
        </div>
      </Card>
      <Card className="m-1 mt-">
        <div className="flex items-center gap-3">
          <Checkbox id="item1" className="ml-4" />
          <Label htmlFor="item1">
            go to gym
          </Label>
        </div>
      </Card>
      <Card className="m-1 mt-">
        <div className="flex items-center gap-3">
          <Checkbox id="item1" className="ml-4" />
          <Label htmlFor="item1">
            go to gym
          </Label>
        </div>
      </Card>
      <Card className="m-1 mt-">
        <div className="flex items-center gap-3">
          <Checkbox id="item1" className="ml-4" />
          <Label htmlFor="item1">
            go to gym
          </Label>
        </div>
      </Card>
    </div>
  </ScrollArea>
</div>
  )
}
export default ToDoList;