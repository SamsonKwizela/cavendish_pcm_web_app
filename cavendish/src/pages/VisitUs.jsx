import { IconCheck } from "@tabler/icons-react";
import {
  Button,
  Container,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import sda from "../assets/sda.png";
import classes from "../Style.module.css";

export function VisitUs() {
  return (
    <Container size="md">
      <div className={classes.innerVisitUs}>
        <div className={classes.contentVisitUs}>
          <Title className={classes.titleVisitUs}>
            Seek <span className={classes.highlightVisitUs}>God.</span> Serve
            <br />
            Campus. Share the Message.
          </Title>
          <Text c="dimmed" mt="md">
            “Let your light shine before others, that they may see your good
            deeds and glorify your Father in heaven.”{" "}
            <b style={{ color: "black" }}>Matthew 5:16 (NIV)</b>
          </Text>

          <Group mt={30}>
            <Button
              radius="md"
              size="lg"
              className={classes.controlVisitUs}
              bg="pcmBlue.5"
            >
              What to expect
            </Button>
          </Group>
        </div>
        <Image src={sda} alt="sda" className={classes.imageVisitUs} />
      </div>
    </Container>
  );
}
