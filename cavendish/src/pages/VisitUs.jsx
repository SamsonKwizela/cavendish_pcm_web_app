import {
  Button,
  Container,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import sda from "../assets/sda.png";
import classes from "../Style.module.css";

export function VisitUs() {
  return (
    <div className={classes.waveSection}>
      {/* Top Wave */}
      <svg
        className={classes.waveTop}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#edf2ff"
          d="M0,96L80,122.7C160,149,320,203,480,197.3C640,192,800,128,960,106.7C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>

      {/* Content */}
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

      {/* Bottom Wave */}
      <svg
        className={classes.waveBottom}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#edf2ff"
          d="M0,32L80,74.7C160,117,320,203,480,224C640,245,800,203,960,170.7C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
