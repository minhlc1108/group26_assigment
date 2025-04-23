import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Assignment9() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">
            Deploy WeatherApp
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <a href="https://my-tailwind-project-nt8m-mbr57xlhc-minhlc1108s-projects.vercel.app/" className="w-full text-blue-700">https://my-tailwind-project-nt8m.vercel.app/</a>
        </CardContent>
      </Card>
    </div>
  );
}