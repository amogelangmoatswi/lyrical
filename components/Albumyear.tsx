import Image from "next/image"
import { Upload } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function AlbumOfYear() {
  return (
    <div>
      <CardContent className=" pt-4">
        <div className="grid gap-2">
          <Image
            alt="Product image"
            className="aspect-square w-full rounded-md object-cover"
            height="200"
            src="/tyla.jpeg"
            width="200"
          />
        </div>
      </CardContent>
      <CardHeader className=" py-1">
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      </div>
    
  )
}
