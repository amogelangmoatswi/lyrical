import { Metadata } from "next"
import MusicCard from "@/components/Musiccard"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import AlbumArtwork from "@/components/Album-airtwork"
import { madeForYouAlbums } from "./data/albums"
import SidebarTab from "@/components/SideBarTAB"


export const metadata: Metadata = {
  title: "Lyrical.dev",
  description: "Sign Along",
}

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col ">
      <div className="flex flex-col justify-center">
      <main className="grid flex-1 items-start gap-10 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-4 xl:grid-cols-4">

        <div className="col-span-1">
        
        </div>

      <div className="auto-rows-max items-start col-span-2">
        <div className="mx-auto px-2 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="items-center justify-center">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-medium tracking-tight">
                Currently playing
                </h2>
                <p className="text-sm text-muted-foreground">
                Sing along to the Beat of Music!
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-1">
              <ScrollArea>
                <div className="space-x-2 pb-4">
                  <MusicCard/> 
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>

            <div className="mt-6 space-y-1">
              <h2 className="text-2xl font-roboto font-medium tracking-tight">
                New Music
              </h2>
              <p className="text-sm text-muted-foreground">
                Hot songs that dropped this week
              </p>
            </div>
            <Separator className="my-4" />
            <div className="relative">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {madeForYouAlbums.map((album) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[150px]"
                      aspectRatio="square"
                      width={150}
                      height={150}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    
      
      <div className=" col-span-1 max-w-[45rem] pt-36 pb-20">
      <SidebarTab/>
      </div> 
      
      </main>
      </div>
    </div>
  );
}

