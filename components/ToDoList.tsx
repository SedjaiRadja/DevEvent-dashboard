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
    <Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <CalendarIcon />
      {date ? format(date,"PPP") : <span>pick a date.</span>}
    </Button>
  </PopoverTrigger>
    <PopoverContent>
    <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"/>
    </PopoverContent>
  </Popover>

  <ScrollArea className="max-h-[400px] overflow-y-auto p-2 mt-5">
    <div className="flex flex-col gap-3">
      <Card className="p-3">
        <div className="flex items-center gap-3">
          <Checkbox id="item1" />
          <Label htmlFor="item1">
            Lorem hihishd, zdjfuodzfhuzo.
          </Label>
        </div>
      </Card>

      <Card className="p-3">
        <div className="flex items-center gap-3">
          <Checkbox id="item2" />
          <Label htmlFor="item2">
            Lorem hihishd, zdjfuodzfhuzo.
          </Label>
        </div>
      </Card>
<Card className="p-3">
        <div className="flex items-center gap-3">
          <Checkbox id="item2" />
          <Label htmlFor="item2">
            Lorem hihishd, zdjfuodzfhuzo.
          </Label>
        </div>
      </Card>
      <Card className="p-3">
        <div className="flex items-center gap-3">
          <Checkbox id="item2" />
          <Label htmlFor="item2">
            Lorem hihishd, zdjfuodzfhuzo.
          </Label>
        </div>
      </Card>
      <Card className="p-3">
        <div className="flex items-center gap-3">
          <Checkbox id="item2" />
          <Label htmlFor="item2">
            Lorem hihishd, zdjfuodzfhuzo.
          </Label>
        </div>
      </Card>

      <Card className="p-3">
        <div className="flex items-center gap-3">
          <Checkbox id="item2" />
          <Label htmlFor="item2">
            Lorem hihishd, zdjfuodzfhuzo.
          </Label>
        </div>
      </Card>
      <Card className="p-3">
        <div className="flex items-center gap-3">
          <Checkbox id="item2" />
          <Label htmlFor="item2">
            Lorem hihishd, zdjfuodzfhuzo.
          </Label>
        </div>
      </Card>
      <Card className="p-3">
        <div className="flex items-center gap-3">
          <Checkbox id="item2" />
          <Label htmlFor="item2">
            Lorem hihishd, zdjfuodzfhuzo.
          </Label>
        </div>
      </Card>
      <Card className="p-3">
        <div className="flex items-center gap-3">
          <Checkbox id="item2" />
          <Label htmlFor="item2">
            Lorem hihishd, zdjfuodzfhuzo.
          </Label>
        </div>
      </Card>
    </div>
  </ScrollArea>
</div>
  )
}
export default ToDoList;