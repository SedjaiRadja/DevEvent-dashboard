import {Card,CardContent,CardTitle,} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
export const popularContent = [
  {
    id: 1,
    title: "Modern Web Development",
    badge: "Technology",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    count: 1250,
  },
  {
    id: 2,
    title: "Healthy Lifestyle Tips",
    badge: "Health",
    image:
      "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
    count: 980,
  },
  {
    id: 3,
    title: "Travel Around Europe",
    badge: "Travel",
    image:
      "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg",
    count: 8700,
  },
  {
    id: 4,
    title: "Business Growth Strategies",
    badge: "Business",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    count: 730,
  },
  {
    id: 5,
    title: "Photography Essentials",
    badge: "Photography",
    image:
      "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg",
    count: 6400,
  },
];

export const latestTransactions = [
  {
    id: 1,
    title: "Premium Subscription",
    badge: "Completed",
    image:
      "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg",
    count: 1200,
  },
  {
    id: 2,
    title: "Course Purchase",
    badge: "Pending",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    count: 3500,
  },
  {
    id: 3,
    title: "E-book Download",
    badge: "Completed",
    image:
      "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
    count: 3400,
  },
  {
    id: 4,
    title: "Consultation Booking",
    badge: "Processing",
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    count: 4900,
  },
  {
    id: 5,
    title: "Software License",
    badge: "Completed",
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    count: 6700,
  },
];
export const CardList = ({title} : {title : string}) => {
  const List = title === "popular content"? popularContent : latestTransactions;

  return(
    <div className="">
      <h1 className="font-medium text-lg mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {List.map((item)=>(
          <Card key={item.id} className="flex-row items-center gap-4 px-4 py-3">
  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md">
    <Image
      src={item.image}
      alt={item.title}
      fill
      className="object-cover"
    />
  </div>

  <div className="flex-1">
    <p className="font-medium text-sm">
      {item.title}
    </p>
    <Badge variant="secondary" className="mt-1">{item.badge}</Badge>
  </div>
      

  <span className="shrink-0 font-medium text-muted-foreground">
    {(item.count / 1000).toFixed(2)}K
  </span>
</Card>
          
        ))}
      </div>
    </div>
  )
}
