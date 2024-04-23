import { Flame } from "lucide-react";
import Topart from "./TopArt";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea} from "./ui/scroll-area";
import ImageCarousel from "./ImageCarousel";


export default function Sidebar() {
  return (
    <>
     
     
     <div className="overflow-hidden">
        <ImageCarousel />
      </div>
  

    <div className=" py-4">
    <Card className="overflow-hidden">
    <ScrollArea className="h-[24rem] w-full rounded-md border">
  <CardHeader className="flex flex-row items-start bg-muted/50">
    <div className="grid gap-0.5">
      <CardTitle className="group flex items-center gap-2 text-lg">
        Top Artist
        <Button
          size="icon"
          variant="outline2"
          className="h-7 w-7 border-b-2 border-green-600"
        >
          <Flame className="h-5 w-5 fill-green-500 stroke-none" />
        </Button>
      </CardTitle>
    </div>
  </CardHeader>
  
    <CardContent className="p-4 text-sm overflow-y-auto">
      <div className="grid gap-3">
        <Topart />
      </div>
    </CardContent>
  </ScrollArea>
</Card>

    </div>
    
    
    
      
      </>


  );
}
