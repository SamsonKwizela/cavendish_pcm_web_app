import { useState } from "react";
import { Burger, Container, Group, Image, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "../Style.module.css";
import pcmLogo from "../assets/pcm.jpeg";
import { Box } from "@mui/material";

const links = [
  { link: "/home", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/ministries", label: "Ministries" },
];

export function NavigationBar() {
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
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src={pcmLogo} alt="logo" className={classes.logo} />
          <Text size="sm" weight="bold" sx={{ marginLeft: "10px" }}>
            Cavendish PCM
          </Text>
        </Box>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
