import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <Card className="w-[400px] m-auto">
      <CardHeader>
        <CardTitle>Stop</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <Button asChild>
          <Link href="/new-game">Começar um novo jogo</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/join">Entrar em um jogo</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
