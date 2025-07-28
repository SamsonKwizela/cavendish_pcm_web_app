import { useState } from "react";
import {
  Burger,
  Container,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "../Style.module.css";
import pcmLogo from "../assets/pcm.png";
import { Box } from "@mui/material";
import { HomelandingPage } from "./HomelandingPage";
import { UpcomingEvent } from "../pages/UpcomingEvent";
import { VisitUs } from "../pages/VisitUs";

const links = [
  { link: "/home", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/ministries", label: "Ministries" },
  { link: "/contact", label: "Contact Us" },
];

export function NavigationBar() {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <header
        className={classes.header}
        style={{ backgroundColor: theme.colors.pcmBlue[5] }}
      >
        <Container size="md" className={classes.inner}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image src={pcmLogo} alt="logo" className={classes.logo} />
            <Text size="xl" weight="bold" sx={{ marginLeft: "10px" }} c="white">
              Cavendish PCM
            </Text>
          </Box>
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>
      </header>
      <HomelandingPage />
      <VisitUs />
      <UpcomingEvent />
    </>
  );
}
