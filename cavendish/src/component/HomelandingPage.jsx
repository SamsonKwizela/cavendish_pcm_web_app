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
          A fully featured React components library
        </Title>
        <Text className={classes.descriptionLanding} size="xl" mt="xl">
          Build fully functional accessible web applications faster than ever –
          Mantine includes more than 120 customizable components and hooks to
          cover you in any situation
        </Text>

        <Button
          variant="gradient"
          size="xl"
          radius="xl"
          className={classes.controlLanding}
        >
          Get started
        </Button>
      </Container>
    </div>
  );
}
