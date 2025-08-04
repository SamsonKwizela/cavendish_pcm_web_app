import { Button, Container, Overlay, Text, Title } from "@mantine/core";
import classes from "../Style.module.css";

export function HomelandingPage() {
  return (
    <div className={classes.heroLanding}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.containerLanding} size="md">
        <Title className={classes.titleLanding}>
          Growing in Faith and Knowledge – PCM Students for Christ
        </Title>
        <Text className={classes.descriptionLanding} size="xl" mt="xl">
          Join us as we honor God through academic excellence and active
          participation in His kingdom. Let’s shine in our studies, grow in
          faith, and impact the world — together.
        </Text>

        <Button
          variant="gradient"
          size="xl"
          radius="md"
          className={classes.controlLanding}
          bg="pcmBlue.5"
        >
          Saturday's at cavendish
        </Button>
      </Container>
    </div>
  );
}
