import { Button, Spacer } from "@nextui-org/react";
import { Container } from "@nextui-org/react";
import { Text } from "@nextui-org/react";


export default function Home() {
  return (
    <Container css={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <div style={{ width: "100%" }}>
        <Text h1 css={{ textAlign: "center", marginBottom: "50px" }}>家里有男人</Text>
        <Button size="xl" css={{ width: "100%" }} onPress={() => {
          new Audio("/one.m4a").play();
        }}>“谁啊，干嘛的？”</Button>
        <Spacer y={1} />
        <Button size="xl" color="error" css={{ width: "100%" }} onPress={() => {
          new Audio("/2.m4a").play();
        }}>“诶干啥的，有毛病吗”</Button>
        <Spacer y={1} />
        <Button size="xl" color="warning" css={{ width: "100%" }} onPress={() => {
          new Audio("/3.m4a").play();
        }}>“你放门口吧，我一会来拿”</Button>
        <Spacer y={1} />
        <Button size="xl" color="secondary" css={{ width: "100%" }} onPress={() => {
          new Audio("/4.m4a").play();
        }}>“等一下啊，等一下”</Button>
        <Spacer y={1} />
      </div>
    </Container>
  )
}
