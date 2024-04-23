
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import Lyrics from "@/components/Lyrics"

export default function MusicCard() {
  return (
    <Card className=" dark:bg-neutral-900 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
  <CardContent className="flex gap-4 p-6">
    <img
      alt="Photo"
      className="rounded-lg shadow-2xl outline-1 shadow-red-500/30"
      height="200"
      src="/diss.jpg"
      style={{
        aspectRatio: "200/200",
        objectFit: "cover",
      }}
      width="200"
    />
    <div className="grid gap-1 flex-grow"> {/* Use flex-grow to let this div take remaining space */}
      <CardHeader>
        <CardTitle>Red Leather</CardTitle>
        <CardDescription>Future, Metro Boomin & J. Cole</CardDescription>
        <div style={{ width: '100%', maxWidth: '100%' }}> {/* Set width and max-width to 100% */}
          <Lyrics />
        </div>
      </CardHeader>
    </div>
  </CardContent>
</Card>

  )
}
