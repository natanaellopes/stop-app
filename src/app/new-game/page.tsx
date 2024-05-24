import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const NewGamePage = () => {
  return (
    <Card className="w-[400px] m-auto">
      <CardHeader>
        <CardTitle>Novo Jogo</CardTitle>
        <CardDescription>
          Compartilhe o seguinte código com seus amigos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-6xl text-center font-bold">F50K</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="secondary" asChild>
          <Link href="/">Voltar ao início</Link>
        </Button>
        <Button>Cancelar jogo</Button>
      </CardFooter>
    </Card>
  );
};

export default NewGamePage;
